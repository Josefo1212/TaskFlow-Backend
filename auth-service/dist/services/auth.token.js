"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = generateAccessToken;
exports.generateRefreshToken = generateRefreshToken;
exports.calculateRefreshExpiration = calculateRefreshExpiration;
const crypto_1 = require("crypto");
const jwt = require('jsonwebtoken');
function generateAccessToken(payload, jwtSecret, expiresIn) {
    return jwt.sign(payload, jwtSecret, { expiresIn });
}
function generateRefreshToken() {
    return (0, crypto_1.randomBytes)(48).toString('hex');
}
function calculateRefreshExpiration(ttlDays) {
    return new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1000);
}
//# sourceMappingURL=auth.token.js.map