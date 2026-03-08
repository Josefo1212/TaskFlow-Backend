import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
	PORT: z.coerce.number().int().positive().default(3000),
	NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
	AUTH_GRPC_URL: z.string().min(1, 'AUTH_GRPC_URL is required'),
	JWT_SECRET: z.string().min(1, 'JWT_SECRET is required'),
});

export const env = envSchema.parse({
	PORT: process.env.PORT,
	NODE_ENV: process.env.NODE_ENV,
	AUTH_GRPC_URL: process.env.AUTH_GRPC_URL,
	JWT_SECRET: process.env.JWT_SECRET,
});