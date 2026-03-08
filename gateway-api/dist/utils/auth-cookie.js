"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRefreshTokenCookie = setRefreshTokenCookie;
exports.clearRefreshTokenCookie = clearRefreshTokenCookie;
exports.readRefreshTokenCookie = readRefreshTokenCookie;
const env_1 = require("../config/env");
function getRefreshCookieOptions(maxAge) {
    const secure = env_1.env.REFRESH_COOKIE_SECURE ?? env_1.env.NODE_ENV === 'production';
    return {
        httpOnly: true,
        secure,
        sameSite: env_1.env.REFRESH_COOKIE_SAME_SITE,
        path: '/auth',
        maxAge,
        ...(env_1.env.REFRESH_COOKIE_DOMAIN ? { domain: env_1.env.REFRESH_COOKIE_DOMAIN } : {}),
    };
}
function setRefreshTokenCookie(res, refreshToken, expiresAt) {
    const expiresAtMs = new Date(expiresAt).getTime();
    const maxAge = Number.isFinite(expiresAtMs)
        ? Math.max(expiresAtMs - Date.now(), 0)
        : undefined;
    res.cookie(env_1.env.REFRESH_COOKIE_NAME, refreshToken, getRefreshCookieOptions(maxAge));
}
function clearRefreshTokenCookie(res) {
    res.clearCookie(env_1.env.REFRESH_COOKIE_NAME, getRefreshCookieOptions());
}
function readRefreshTokenCookie(cookies) {
    const cookieValue = cookies?.[env_1.env.REFRESH_COOKIE_NAME];
    if (typeof cookieValue !== 'string') {
        return null;
    }
    const token = cookieValue.trim();
    return token ? token : null;
}
//# sourceMappingURL=auth-cookie.js.map