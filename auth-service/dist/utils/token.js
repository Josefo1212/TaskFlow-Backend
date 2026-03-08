"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthRuntimeConfig = getAuthRuntimeConfig;
exports.generateAccessToken = generateAccessToken;
exports.generateRefreshToken = generateRefreshToken;
exports.calculateRefreshExpiration = calculateRefreshExpiration;
const crypto_1 = require("crypto");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_errors_1 = require("./auth-errors");
function getAuthRuntimeConfig() {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new auth_errors_1.AuthServiceError('JWT_SECRET is not configured', 500);
    }
    const refreshTokenTtlDays = Number(process.env.REFRESH_TOKEN_TTL_DAYS ?? 7);
    return {
        jwtSecret,
        jwtAccessExpiresIn: (process.env.JWT_ACCESS_EXPIRES_IN ?? '15m'),
        refreshTokenTtlDays,
    };
}
function generateAccessToken(payload, jwtSecret, expiresIn) {
    const options = { expiresIn };
    return jsonwebtoken_1.default.sign(payload, jwtSecret, options);
}
function generateRefreshToken() {
    return (0, crypto_1.randomBytes)(48).toString('hex');
}
function calculateRefreshExpiration(ttlDays) {
    return new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1000);
}
//# sourceMappingURL=token.js.map