"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthRuntimeConfig = getAuthRuntimeConfig;
const auth_errors_1 = require("./auth.errors");
function getAuthRuntimeConfig() {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new auth_errors_1.AuthServiceError('JWT_SECRET is not configured', 500);
    }
    const refreshTokenTtlDays = Number(process.env.REFRESH_TOKEN_TTL_DAYS ?? 7);
    return {
        jwtSecret,
        jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '15m',
        refreshTokenTtlDays,
    };
}
//# sourceMappingURL=auth.config.js.map