import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
	PORT: z.coerce.number().int().positive().default(3000),
	NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
	AUTH_GRPC_URL: z.string().min(1, 'AUTH_GRPC_URL es requerido.'),
	USER_GRPC_URL: z.string().min(1, 'USER_GRPC_URL es requerido.'),
	TASK_GRPC_URL: z.string().min(1, 'TASK_GRPC_URL es requerido.'),
	PROJECT_GRPC_URL: z.string().min(1, 'PROJECT_GRPC_URL es requerido.'),
	TAG_GRPC_URL: z.string().min(1, 'TAG_GRPC_URL es requerido.'),
	JWT_SECRET: z.string().min(1, 'JWT_SECRET es requerido.'),
	CORS_ORIGIN: z.string().optional(),
	REFRESH_COOKIE_NAME: z.string().min(1).default('refresh_token'),
	REFRESH_COOKIE_DOMAIN: z.string().min(1).optional(),
	REFRESH_COOKIE_SAME_SITE: z.enum(['lax', 'strict', 'none']).default('lax'),
	REFRESH_COOKIE_SECURE: z
		.enum(['true', 'false'])
		.optional()
		.transform((value) => value === 'true'),
});

export const env = envSchema.parse({
	PORT: process.env.PORT,
	NODE_ENV: process.env.NODE_ENV,
	AUTH_GRPC_URL: process.env.AUTH_GRPC_URL,
	USER_GRPC_URL: process.env.USER_GRPC_URL,
	TASK_GRPC_URL: process.env.TASK_GRPC_URL,
	PROJECT_GRPC_URL: process.env.PROJECT_GRPC_URL,
	TAG_GRPC_URL: process.env.TAG_GRPC_URL,
	JWT_SECRET: process.env.JWT_SECRET,
	CORS_ORIGIN: process.env.CORS_ORIGIN,
	REFRESH_COOKIE_NAME: process.env.REFRESH_COOKIE_NAME,
	REFRESH_COOKIE_DOMAIN: process.env.REFRESH_COOKIE_DOMAIN,
	REFRESH_COOKIE_SAME_SITE: process.env.REFRESH_COOKIE_SAME_SITE,
	REFRESH_COOKIE_SECURE: process.env.REFRESH_COOKIE_SECURE,
});