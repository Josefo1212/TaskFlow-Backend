import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env';
import { authRoutes } from './routes/auth.routes';
import { projectsRoutes } from './routes/projects.routes';
import { tagsRoutes } from './routes/tags.routes';
import { userRoutes } from './routes/user.routes';
import { tasksRoutes } from './routes/tasks.routes';

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

			const error = new Error('Origin not allowed by CORS') as Error & { statusCode?: number };
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
			message: `Route ${req.method} ${req.originalUrl} not found`,
		});
	});

	app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
		const statusCode =
			typeof error === 'object' &&
			error !== null &&
			'statusCode' in error &&
			typeof error.statusCode === 'number'
				? error.statusCode
				: 500;

		const message =
			typeof error === 'object' &&
			error !== null &&
			'message' in error &&
			typeof error.message === 'string'
				? error.message
				: 'Internal server error';

		res.status(statusCode).json({ message });
	});

	return app;
}
