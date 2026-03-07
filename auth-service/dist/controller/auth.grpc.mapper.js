"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGrpcServiceError = toGrpcServiceError;
exports.extractMetadataValue = extractMetadataValue;
exports.mapLoginResultToGrpcResponse = mapLoginResultToGrpcResponse;
const grpc = __importStar(require("@grpc/grpc-js"));
const auth_errors_1 = require("../services/auth.errors");
function mapHttpErrorToGrpcCode(statusCode) {
    if (statusCode === 400) {
        return grpc.status.INVALID_ARGUMENT;
    }
    if (statusCode === 401) {
        return grpc.status.UNAUTHENTICATED;
    }
    return grpc.status.INTERNAL;
}
function toGrpcServiceError(error) {
    if (error instanceof auth_errors_1.AuthServiceError) {
        return {
            code: mapHttpErrorToGrpcCode(error.statusCode),
            message: error.message,
            name: 'AuthServiceError',
        };
    }
    return {
        code: grpc.status.INTERNAL,
        message: 'Internal server error',
        name: 'InternalError',
    };
}
function extractMetadataValue(metadata, key) {
    const values = metadata.get(key);
    const value = values[0];
    if (typeof value === 'string') {
        return value;
    }
    return null;
}
function mapLoginResultToGrpcResponse(data) {
    return {
        user_id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        access_token: data.accessToken,
        refresh_token: data.refreshToken,
        refresh_expires_at: data.refreshExpiresAt.toISOString(),
        session_id: data.sessionId,
    };
}
//# sourceMappingURL=auth.grpc.mapper.js.map