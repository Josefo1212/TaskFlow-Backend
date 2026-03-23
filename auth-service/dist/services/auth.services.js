"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.refresh = refresh;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;
exports.logout = logout;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const zod_1 = require("zod");
const auth_queries_1 = require("../queries/auth.queries");
const auth_errors_1 = require("../utils/auth-errors");
const refresh_token_1 = require("../utils/refresh-token");
const token_1 = require("../utils/token");
const password_reset_1 = require("../utils/password-reset");
const registerInputSchema = zod_1.z.object({
    user: zod_1.z.string().trim().min(1, 'User is required').max(250, 'User must be at most 250 characters'),
    email: zod_1.z
        .string()
        .trim()
        .email('Email must be valid')
        .max(250, 'Email must be at most 250 characters'),
    password: zod_1.z
        .string()
        .min(8, 'Password must be between 8 and 15 characters')
        .max(15, 'Password must be between 8 and 15 characters'),
});
const loginInputSchema = zod_1.z.object({
    user: zod_1.z.string().trim().min(1, 'Username and password are required').max(250, 'User must be at most 250 characters'),
    password: zod_1.z.string().min(1, 'Username and password are required'),
});
const forgotPasswordInputSchema = zod_1.z.object({
    user: zod_1.z.string().trim().min(1, 'User is required').max(250, 'User must be at most 250 characters'),
});
const resetPasswordInputSchema = zod_1.z.object({
    token: zod_1.z.string().trim().min(1, 'Token is required'),
    password: zod_1.z
        .string()
        .min(8, 'Password must be between 8 and 15 characters')
        .max(15, 'Password must be between 8 and 15 characters'),
});
function parseOrThrow(schema, input) {
    const result = schema.safeParse(input);
    if (!result.success) {
        throw new auth_errors_1.AuthServiceError(result.error.issues[0]?.message ?? 'Invalid input', 400);
    }
    return result.data;
}
async function issueTokensForUser(user) {
    const config = (0, token_1.getAuthRuntimeConfig)();
    const accessToken = (0, token_1.generateAccessToken)({
        sub: user.id,
        email: user.email,
        user: user.user,
    }, config.jwtSecret, config.jwtAccessExpiresIn);
    const refreshToken = (0, token_1.generateRefreshToken)();
    const refreshExpiresAt = (0, token_1.calculateRefreshExpiration)(config.refreshTokenTtlDays);
    await (0, refresh_token_1.storeRefreshToken)(refreshToken, user, config.refreshTokenTtlDays);
    return {
        user: {
            id: user.id,
            email: user.email,
            user: user.user,
        },
        accessToken,
        refreshToken,
        refreshExpiresAt,
    };
}
async function register(input) {
    const parsed = parseOrThrow(registerInputSchema, input);
    const username = parsed.user;
    const email = parsed.email.toLowerCase();
    const password = parsed.password;
    const existingUser = await (0, auth_queries_1.findUserByEmail)(email);
    if (existingUser) {
        throw new auth_errors_1.AuthServiceError('Email already registered', 409);
    }
    const existingUsername = await (0, auth_queries_1.findUserByUser)(username);
    if (existingUsername) {
        throw new auth_errors_1.AuthServiceError('Username already registered', 409);
    }
    const passwordHash = await bcryptjs_1.default.hash(password, 10);
    const createdUser = await (0, auth_queries_1.createUser)({
        user: username,
        email,
        passwordHash,
    });
    return issueTokensForUser(createdUser);
}
async function login(input) {
    const parsed = parseOrThrow(loginInputSchema, input);
    const user = parsed.user;
    const password = parsed.password;
    const found = await (0, auth_queries_1.findUserByUser)(user);
    if (!found) {
        throw new auth_errors_1.AuthServiceError('Invalid credentials', 401);
    }
    const isPasswordValid = await bcryptjs_1.default.compare(password, found.password);
    if (!isPasswordValid) {
        throw new auth_errors_1.AuthServiceError('Invalid credentials', 401);
    }
    return issueTokensForUser({
        id: found.id,
        email: found.email,
        user: found.user,
    });
}
async function refresh(input) {
    const refreshToken = input.refreshToken?.trim();
    if (!refreshToken) {
        throw new auth_errors_1.AuthServiceError('refreshToken is required', 400);
    }
    const user = await (0, refresh_token_1.getRefreshTokenUser)(refreshToken);
    if (!user) {
        throw new auth_errors_1.AuthServiceError('Refresh token is invalid or expired', 401);
    }
    const config = (0, token_1.getAuthRuntimeConfig)();
    const accessToken = (0, token_1.generateAccessToken)({
        sub: user.id,
        email: user.email,
        user: user.user,
    }, config.jwtSecret, config.jwtAccessExpiresIn);
    return { accessToken };
}
async function forgotPassword(input) {
    const parsed = parseOrThrow(forgotPasswordInputSchema, input);
    const user = parsed.user;
    const ttlMinutes = Number(process.env.PASSWORD_RESET_TTL_MINUTES ?? 15);
    const token = (0, password_reset_1.generatePasswordResetToken)();
    // Guardamos el nombre; si el usuario no existe, guardamos un marcador para no filtrar info.
    const found = await (0, auth_queries_1.findUserByUser)(user);
    await (0, password_reset_1.storePasswordResetToken)(token, found ? found.user : '__invalid__', ttlMinutes);
    return { token };
}
async function resetPassword(input) {
    const parsed = parseOrThrow(resetPasswordInputSchema, input);
    const token = parsed.token;
    const password = parsed.password;
    const user = await (0, password_reset_1.getPasswordResetUser)(token);
    if (!user || user === '__invalid__') {
        throw new auth_errors_1.AuthServiceError('Token is invalid or expired', 400);
    }
    const found = await (0, auth_queries_1.findUserByUser)(user);
    if (!found) {
        await (0, password_reset_1.deletePasswordResetToken)(token);
        throw new auth_errors_1.AuthServiceError('Token is invalid or expired', 400);
    }
    const passwordHash = await bcryptjs_1.default.hash(password, 10);
    const updated = await (0, auth_queries_1.updateUserPasswordByUser)(user, passwordHash);
    await (0, password_reset_1.deletePasswordResetToken)(token);
    if (!updated) {
        throw new auth_errors_1.AuthServiceError('Failed to update password', 500);
    }
    return { message: 'Password updated' };
}
async function logout(input) {
    const refreshToken = input.refreshToken?.trim();
    if (!refreshToken) {
        throw new auth_errors_1.AuthServiceError('refreshToken is required', 400);
    }
    const deleted = await (0, refresh_token_1.deleteRefreshToken)(refreshToken);
    if (!deleted) {
        return { message: 'Refresh token already removed or invalid' };
    }
    return { message: 'Logout successful' };
}
//# sourceMappingURL=auth.services.js.map