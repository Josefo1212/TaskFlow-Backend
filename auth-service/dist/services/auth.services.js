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
exports.refresh = refresh;
exports.logout = logout;
const crypto_1 = require("crypto");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const redis_1 = require("../config/redis");
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
const REFRESH_TOKEN_PREFIX = 'auth:refresh:';
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
function getRefreshTokenKey(refreshToken) {
    return `${REFRESH_TOKEN_PREFIX}${refreshToken}`;
}
function getRefreshTokenTtlSeconds(ttlDays) {
    return Math.max(1, Math.floor(ttlDays * 24 * 60 * 60));
}
async function storeRefreshToken(refreshToken, user, ttlDays) {
    await (0, redis_1.setRedisValue)(getRefreshTokenKey(refreshToken), JSON.stringify(user), getRefreshTokenTtlSeconds(ttlDays));
}
async function getRefreshTokenUser(refreshToken) {
    const payload = await (0, redis_1.getRedisValue)(getRefreshTokenKey(refreshToken));
    if (!payload) {
        return null;
    }
    const parsed = JSON.parse(payload);
    if (!parsed.id || !parsed.email || !parsed.name) {
        return null;
    }
    return parsed;
}
async function deleteRefreshToken(refreshToken) {
    return (0, redis_1.deleteRedisKey)(getRefreshTokenKey(refreshToken));
}
async function issueTokensForUser(user) {
    const config = getAuthRuntimeConfig();
    const accessToken = generateAccessToken({
        sub: user.id,
        email: user.email,
        name: user.name,
    }, config.jwtSecret, config.jwtAccessExpiresIn);
    const refreshToken = generateRefreshToken();
    const refreshExpiresAt = calculateRefreshExpiration(config.refreshTokenTtlDays);
    await storeRefreshToken(refreshToken, user, config.refreshTokenTtlDays);
    return {
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
        },
        accessToken,
        refreshToken,
        refreshExpiresAt,
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
    const existingUsername = await (0, auth_queries_1.findUserByName)(name);
    if (existingUsername) {
        throw new AuthServiceError('Username already registered', 409);
    }
    const passwordHash = await bcryptjs_1.default.hash(password, 10);
    const user = await (0, auth_queries_1.createUser)({
        name,
        email,
        passwordHash,
    });
    return issueTokensForUser(user);
}
async function login(input) {
    const name = input.name?.trim();
    const password = input.password;
    if (!name || !password) {
        throw new AuthServiceError('Username and password are required', 400);
    }
    const user = await (0, auth_queries_1.findUserByName)(name);
    if (!user) {
        throw new AuthServiceError('Invalid credentials', 401);
    }
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new AuthServiceError('Invalid credentials', 401);
    }
    return issueTokensForUser({
        id: user.id,
        email: user.email,
        name: user.name,
    });
}
async function refresh(input) {
    const refreshToken = input.refreshToken?.trim();
    if (!refreshToken) {
        throw new AuthServiceError('refreshToken is required', 400);
    }
    const user = await getRefreshTokenUser(refreshToken);
    if (!user) {
        throw new AuthServiceError('Refresh token is invalid or expired', 401);
    }
    const config = getAuthRuntimeConfig();
    const accessToken = generateAccessToken({
        sub: user.id,
        email: user.email,
        name: user.name,
    }, config.jwtSecret, config.jwtAccessExpiresIn);
    return { accessToken };
}
async function logout(input) {
    const refreshToken = input.refreshToken?.trim();
    if (!refreshToken) {
        throw new AuthServiceError('refreshToken is required', 400);
    }
    const deleted = await deleteRefreshToken(refreshToken);
    if (!deleted) {
        return { message: 'Refresh token already removed or invalid' };
    }
    return { message: 'Logout successful' };
}
//# sourceMappingURL=auth.services.js.map