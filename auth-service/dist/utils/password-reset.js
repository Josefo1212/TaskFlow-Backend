"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePasswordResetToken = generatePasswordResetToken;
exports.storePasswordResetToken = storePasswordResetToken;
exports.getPasswordResetUser = getPasswordResetUser;
exports.deletePasswordResetToken = deletePasswordResetToken;
const crypto_1 = require("crypto");
const redis_1 = require("../config/redis");
const PASSWORD_RESET_PREFIX = 'auth:password_reset:';
function getPasswordResetKey(token) {
    return `${PASSWORD_RESET_PREFIX}${token}`;
}
function getPasswordResetTtlSeconds(ttlMinutes) {
    return Math.max(60, Math.floor(ttlMinutes * 60));
}
function generatePasswordResetToken() {
    return (0, crypto_1.randomBytes)(32).toString('hex');
}
async function storePasswordResetToken(token, user, ttlMinutes) {
    await (0, redis_1.setRedisValue)(getPasswordResetKey(token), user, getPasswordResetTtlSeconds(ttlMinutes));
}
async function getPasswordResetUser(token) {
    const user = await (0, redis_1.getRedisValue)(getPasswordResetKey(token));
    return user?.trim() ? user : null;
}
async function deletePasswordResetToken(token) {
    return (0, redis_1.deleteRedisKey)(getPasswordResetKey(token));
}
//# sourceMappingURL=password-reset.js.map