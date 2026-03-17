"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const zod_1 = require("zod");
dotenv_1.default.config();
const envSchema = zod_1.z.object({
    PORT: zod_1.z.coerce.number().int().positive().default(3000),
    NODE_ENV: zod_1.z.enum(['development', 'test', 'production']).default('development'),
    AUTH_GRPC_URL: zod_1.z.string().min(1, 'AUTH_GRPC_URL is required'),
    USER_GRPC_URL: zod_1.z.string().min(1, 'USER_GRPC_URL is required'),
    TASK_GRPC_URL: zod_1.z.string().min(1, 'TASK_GRPC_URL is required'),
    PROJECT_GRPC_URL: zod_1.z.string().min(1, 'PROJECT_GRPC_URL is required'),
    TAG_GRPC_URL: zod_1.z.string().min(1, 'TAG_GRPC_URL is required'),
    JWT_SECRET: zod_1.z.string().min(1, 'JWT_SECRET is required'),
    CORS_ORIGIN: zod_1.z.string().optional(),
    REFRESH_COOKIE_NAME: zod_1.z.string().min(1).default('refresh_token'),
    REFRESH_COOKIE_DOMAIN: zod_1.z.string().min(1).optional(),
    REFRESH_COOKIE_SAME_SITE: zod_1.z.enum(['lax', 'strict', 'none']).default('lax'),
    REFRESH_COOKIE_SECURE: zod_1.z
        .enum(['true', 'false'])
        .optional()
        .transform((value) => value === 'true'),
});
exports.env = envSchema.parse({
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
//# sourceMappingURL=env.js.map