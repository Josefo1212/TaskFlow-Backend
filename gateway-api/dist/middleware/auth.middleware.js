"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRequest = authenticateRequest;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const grpc_error_mapper_1 = require("../utils/grpc-error-mapper");
function extractAccessToken(req) {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader?.startsWith('Bearer ')) {
        return authorizationHeader.slice('Bearer '.length).trim();
    }
    const cookieToken = req.cookies?.access_token;
    if (typeof cookieToken === 'string' && cookieToken.trim()) {
        return cookieToken.trim();
    }
    return null;
}
function authenticateRequest(req, _res, next) {
    const token = extractAccessToken(req);
    if (!token) {
        next(new grpc_error_mapper_1.GatewayError('Se requiere el access token.', 401));
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, env_1.env.JWT_SECRET);
        if (typeof decoded !== 'object' ||
            decoded === null ||
            typeof decoded.sub !== 'string' ||
            typeof decoded.email !== 'string' ||
            typeof decoded.user !== 'string') {
            throw new grpc_error_mapper_1.GatewayError('El access token tiene un contenido inválido.', 401);
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        if (error instanceof grpc_error_mapper_1.GatewayError) {
            next(error);
            return;
        }
        next(new grpc_error_mapper_1.GatewayError('Access token inválido o expirado.', 401));
    }
}
//# sourceMappingURL=auth.middleware.js.map