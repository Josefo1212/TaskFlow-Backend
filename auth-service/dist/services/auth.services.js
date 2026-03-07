"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceError = void 0;
exports.getAuthRuntimeConfig = getAuthRuntimeConfig;
exports.generateAccessToken = generateAccessToken;
exports.generateRefreshToken = generateRefreshToken;
exports.calculateRefreshExpiration = calculateRefreshExpiration;
exports.register = register;
exports.login = login;
exports.logout = logout;
const crypto_1 = require("crypto");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_queries_1 = require("../queries/auth.queries");
const jwt = require('jsonwebtoken');
// --- Errores ---
class AuthServiceError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.AuthServiceError = AuthServiceError;
function getAuthRuntimeConfig() {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new AuthServiceError('JWT_SECRET is not configured', 500);
    }
    const refreshTokenTtlDays = Number(process.env.REFRESH_TOKEN_TTL_DAYS ?? 7);
    return {
        jwtSecret,
        jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '15m',
        refreshTokenTtlDays,
    };
}
function generateAccessToken(payload, jwtSecret, expiresIn) {
    return jwt.sign(payload, jwtSecret, { expiresIn });
}
function generateRefreshToken() {
    return (0, crypto_1.randomBytes)(48).toString('hex');
}
function calculateRefreshExpiration(ttlDays) {
    return new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1000);
}
async function createSessionWithTokens(params) {
    const config = getAuthRuntimeConfig();
    const accessToken = generateAccessToken({
        sub: params.user.id,
        email: params.user.email,
        name: params.user.name,
    }, config.jwtSecret, config.jwtAccessExpiresIn);
    const refreshToken = generateRefreshToken();
    const refreshExpiresAt = calculateRefreshExpiration(config.refreshTokenTtlDays);
    const session = await (0, auth_queries_1.createSession)({
        userId: params.user.id,
        ip: params.ip,
        refreshToken,
        refreshExpiresAt,
        userAgent: params.userAgent,
    });
    return {
        user: {
            id: params.user.id,
            email: params.user.email,
            name: params.user.name,
        },
        accessToken,
        refreshToken: session.refresh_token,
        refreshExpiresAt: session.refresh_expires_at,
        sessionId: session.id,
    };
}
async function register(input) {
    const name = input.name?.trim();
    const email = input.email?.trim().toLowerCase();
    const password = input.password;
    if (!name || !email || !password) {
        throw new AuthServiceError('Name, email and password are required', 400);
    }
    if (password.length < 8) {
        throw new AuthServiceError('Password must be at least 8 characters', 400);
    }
    const existingUser = await (0, auth_queries_1.findUserByEmail)(email);
    if (existingUser) {
        throw new AuthServiceError('Email already registered', 409);
    }
    const passwordHash = await bcryptjs_1.default.hash(password, 10);
    const user = await (0, auth_queries_1.createUser)({
        name,
        email,
        passwordHash,
    });
    const sessionResult = await createSessionWithTokens({
        user,
        ip: input.ip,
        userAgent: input.userAgent,
    });
    await (0, auth_queries_1.createAuthLog)({
        userId: user.id,
        sessionId: sessionResult.sessionId,
        action: 'register_success',
        tableName: 'users',
        recordId: user.id,
        metadata: { email: user.email },
        ip: input.ip,
    });
    return sessionResult;
}
async function login(input) {
    const email = input.email?.trim().toLowerCase();
    const password = input.password;
    if (!email || !password) {
        throw new AuthServiceError('Email and password are required', 400);
    }
    const user = await (0, auth_queries_1.findUserByEmail)(email);
    if (!user) {
        throw new AuthServiceError('Invalid credentials', 401);
    }
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new AuthServiceError('Invalid credentials', 401);
    }
    const sessionResult = await createSessionWithTokens({
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
        },
        ip: input.ip,
        userAgent: input.userAgent,
    });
    await (0, auth_queries_1.createAuthLog)({
        userId: user.id,
        sessionId: sessionResult.sessionId,
        action: 'login_success',
        tableName: 'sessions',
        recordId: sessionResult.sessionId,
        metadata: { email: user.email },
        ip: input.ip,
    });
    return sessionResult;
}
async function logout(input) {
    const refreshToken = input.refreshToken?.trim();
    if (!refreshToken) {
        throw new AuthServiceError('refreshToken is required', 400);
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