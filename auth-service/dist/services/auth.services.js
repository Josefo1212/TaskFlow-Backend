"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
exports.logout = logout;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_queries_1 = require("../queries/auth.queries");
const auth_config_1 = require("./auth.config");
const auth_errors_1 = require("./auth.errors");
const auth_token_1 = require("./auth.token");
async function login(input) {
    const email = input.email?.trim().toLowerCase();
    const password = input.password;
    if (!email || !password) {
        throw new auth_errors_1.AuthServiceError('Email and password are required', 400);
    }
    const user = await (0, auth_queries_1.findUserByEmail)(email);
    if (!user) {
        throw new auth_errors_1.AuthServiceError('Invalid credentials', 401);
    }
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new auth_errors_1.AuthServiceError('Invalid credentials', 401);
    }
    const config = (0, auth_config_1.getAuthRuntimeConfig)();
    const accessToken = (0, auth_token_1.generateAccessToken)({
        sub: user.id,
        email: user.email,
        name: user.name,
    }, config.jwtSecret, config.jwtAccessExpiresIn);
    const refreshToken = (0, auth_token_1.generateRefreshToken)();
    const refreshExpiresAt = (0, auth_token_1.calculateRefreshExpiration)(config.refreshTokenTtlDays);
    const session = await (0, auth_queries_1.createSession)({
        userId: user.id,
        ip: input.ip,
        refreshToken,
        refreshExpiresAt,
        userAgent: input.userAgent,
    });
    await (0, auth_queries_1.createAuthLog)({
        userId: user.id,
        sessionId: session.id,
        action: 'login_success',
        tableName: 'sessions',
        recordId: session.id,
        metadata: { email: user.email },
        ip: input.ip,
    });
    return {
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
        },
        accessToken,
        refreshToken: session.refresh_token,
        refreshExpiresAt: session.refresh_expires_at,
        sessionId: session.id,
    };
}
async function logout(input) {
    const refreshToken = input.refreshToken?.trim();
    if (!refreshToken) {
        throw new auth_errors_1.AuthServiceError('refreshToken is required', 400);
    }
    const activeSession = await (0, auth_queries_1.findActiveSessionByRefreshToken)(refreshToken);
    if (!activeSession) {
        return { message: 'Session already closed or token invalid' };
    }
    const deactivatedSessionId = await (0, auth_queries_1.deactivateSessionByRefreshToken)(refreshToken);
    if (!deactivatedSessionId) {
        return { message: 'Session already closed or token invalid' };
    }
    await (0, auth_queries_1.createAuthLog)({
        userId: activeSession.user_id,
        sessionId: activeSession.id,
        action: 'logout_success',
        tableName: 'sessions',
        recordId: activeSession.id,
        metadata: {},
        ip: input.ip,
    });
    return { message: 'Logout successful' };
}
//# sourceMappingURL=auth.services.js.map