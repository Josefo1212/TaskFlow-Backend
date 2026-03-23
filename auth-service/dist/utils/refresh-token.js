"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRefreshToken = storeRefreshToken;
exports.getRefreshTokenUser = getRefreshTokenUser;
exports.deleteRefreshToken = deleteRefreshToken;
const redis_1 = require("../config/redis");
const REFRESH_TOKEN_PREFIX = 'auth:refresh:';
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
    if (!parsed.id || !parsed.email || !parsed.user) {
        return null;
    }
    return parsed;
}
async function deleteRefreshToken(refreshToken) {
    return (0, redis_1.deleteRedisKey)(getRefreshTokenKey(refreshToken));
}
//# sourceMappingURL=refresh-token.js.map