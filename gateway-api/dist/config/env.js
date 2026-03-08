"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const zod_1 = require("zod");
dotenv_1.default.config({ path: process.env.ENV_FILE || '.env' });
const envSchema = zod_1.z.object({
    PORT: zod_1.z.coerce.number().int().positive().default(3000),
    HOST: zod_1.z.string().default('0.0.0.0'),
    NODE_ENV: zod_1.z.enum(['development', 'test', 'production']).default('development'),
    AUTH_GRPC_URL: zod_1.z.string().min(1, 'AUTH_GRPC_URL is required'),
    JWT_SECRET: zod_1.z.string().min(1, 'JWT_SECRET is required'),
});
exports.env = envSchema.parse({
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    NODE_ENV: process.env.NODE_ENV,
    AUTH_GRPC_URL: process.env.AUTH_GRPC_URL,
    JWT_SECRET: process.env.JWT_SECRET,
});
//# sourceMappingURL=env.js.map