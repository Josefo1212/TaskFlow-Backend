"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.refresh = refresh;
exports.logout = logout;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_queries_1 = require("../queries/auth.queries");
const auth_errors_1 = require("../utils/auth-errors");
const refresh_token_1 = require("../utils/refresh-token");
const token_1 = require("../utils/token");
async function issueTokensForUser(user) {
    const config = (0, token_1.getAuthRuntimeConfig)();
    const accessToken = (0, token_1.generateAccessToken)({
        sub: user.id,
        email: user.email,
        name: user.name,
    }, config.jwtSecret, config.jwtAccessExpiresIn);
    const refreshToken = (0, token_1.generateRefreshToken)();
    const refreshExpiresAt = (0, token_1.calculateRefreshExpiration)(config.refreshTokenTtlDays);
    await (0, refresh_token_1.storeRefreshToken)(refreshToken, user, config.refreshTokenTtlDays);
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
        throw new auth_errors_1.AuthServiceError('Name, email and password are required', 400);
    }
    if (password.length < 8) {
        throw new auth_errors_1.AuthServiceError('Password must be at least 8 characters', 400);
    }
    const existingUser = await (0, auth_queries_1.findUserByEmail)(email);
    if (existingUser) {
        throw new auth_errors_1.AuthServiceError('Email already registered', 409);
    }
    const existingUsername = await (0, auth_queries_1.findUserByName)(name);
    if (existingUsername) {
        throw new auth_errors_1.AuthServiceError('Username already registered', 409);
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
        throw new auth_errors_1.AuthServiceError('Username and password are required', 400);
    }
    const user = await (0, auth_queries_1.findUserByName)(name);
    if (!user) {
        throw new auth_errors_1.AuthServiceError('Invalid credentials', 401);
    }
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new auth_errors_1.AuthServiceError('Invalid credentials', 401);
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
        name: user.name,
    }, config.jwtSecret, config.jwtAccessExpiresIn);
    return { accessToken };
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