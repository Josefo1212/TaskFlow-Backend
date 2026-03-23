import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { ZodError, ZodIssue } from 'zod';
import { env } from './config/env';
import { authRoutes } from './routes/auth.routes';
import { projectsRoutes } from './routes/projects.routes';
import { tagsRoutes } from './routes/tags.routes';
import { userRoutes } from './routes/user.routes';
import { tasksRoutes } from './routes/tasks.routes';
import { GatewayError } from './utils/grpc-error-mapper';

function getIssuePath(issue: ZodIssue): string {
	const path = issue.path.map(String).join('.');
	return path || 'payload';
}

function formatZodErrorEs(error: ZodError): string {
	const issue = error.issues[0];
	if (!issue) {
		return 'Datos inválidos.';
	}

	const field = getIssuePath(issue);

	if (issue.code === 'too_small' && 'minimum' in issue && typeof issue.minimum === 'number') {
		const unit = issue.minimum === 1 ? 'carácter' : 'caracteres';
		return `El campo "${field}" debe tener al menos ${issue.minimum} ${unit}.`;
	}

	if (issue.code === 'too_big' && 'maximum' in issue && typeof issue.maximum === 'number') {
		const unit = issue.maximum === 1 ? 'carácter' : 'caracteres';
		return `El campo "${field}" debe tener como máximo ${issue.maximum} ${unit}.`;
	}

	if (issue.code === 'invalid_format' && 'format' in issue && issue.format === 'email') {
		return `El campo "${field}" debe ser un correo válido.`;
	}

	if (issue.code === 'invalid_type') {
		return `El campo "${field}" tiene un tipo inválido.`;
	}

	if (issue.code === 'custom') {
		return `Datos inválidos en "${field}".`;
	}

	return 'Datos inválidos.';
}

function defaultSpanishMessageForStatus(statusCode: number): string {
	switch (statusCode) {
		case 400:
			return 'Solicitud inválida.';
		case 401:
			return 'No autorizado.';
		case 403:
			return 'Prohibido.';
		case 404:
			return 'No encontrado.';
		case 409:
			return 'Conflicto.';
		case 429:
			return 'Demasiadas solicitudes. Intenta más tarde.';
		case 502:
			return 'Error del servidor.';
		case 503:
			return 'Servicio no disponible. Intenta más tarde.';
		case 504:
			return 'Tiempo de espera agotado. Intenta más tarde.';
		default:
			return 'Error interno del servidor.';
	}
}

export function createApp(): express.Express {
	const app = express();
	app.set('trust proxy', 1);

	const allowedCorsOrigins = (env.CORS_ORIGIN ?? '')
		.split(',')
		.map((origin) => origin.trim())
		.filter(Boolean);

	app.use(helmet());
	const corsOptions: cors.CorsOptions = {
		credentials: true,
		origin: (origin, callback) => {
			if (!origin || allowedCorsOrigins.length === 0) {
				callback(null, true);
				return;
			}

			if (allowedCorsOrigins.includes(origin)) {
				callback(null, true);
				return;
			}

			const error = new Error('Origen no permitido por CORS') as Error & { statusCode?: number };
			error.statusCode = 403;
			callback(error);
		},
	};

	app.use(cors(corsOptions));
	// Express 5 + path-to-regexp v8 no acepta '*' como ruta. Regex evita ese parse.
	app.options(/.*/, cors(corsOptions));
	app.use(morgan('dev'));
	app.use(express.json());
	app.use(cookieParser());

	app.get('/health', (_req, res) => {
		res.status(200).json({
			service: 'gateway-api',
			status: 'ok',
		});
	});

	app.use('/auth', authRoutes);
	app.use('/projects', projectsRoutes);
	app.use('/users', userRoutes);
	app.use('/tasks', tasksRoutes);
	app.use('/tags', tagsRoutes);

	app.use((req, res) => {
		res.status(404).json({
			message: `Ruta ${req.method} ${req.originalUrl} no encontrada`,
		});
	});

	app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
		if (error instanceof ZodError) {
			res.status(400).json({ message: formatZodErrorEs(error) });
			return;
		}

		const statusCode =
			typeof error === 'object' &&
			error !== null &&
			'statusCode' in error &&
			typeof error.statusCode === 'number'
				? error.statusCode
				: 500;

		const providedMessage =
			typeof error === 'object' &&
			error !== null &&
			'message' in error &&
			typeof error.message === 'string'
				? error.message
				: '';

		const message =
			error instanceof GatewayError
				? providedMessage || defaultSpanishMessageForStatus(statusCode)
				: defaultSpanishMessageForStatus(statusCode);

		res.status(statusCode).json({ message });
	});

	return app;
}
