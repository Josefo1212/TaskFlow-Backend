import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { authRoutes } from './routes/auth.routes';


export function createApp(): express.Express {
	const app = express();

	app.use(helmet());
	app.use(cors());
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
