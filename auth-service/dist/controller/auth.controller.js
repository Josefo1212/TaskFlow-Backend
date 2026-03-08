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
exports.authController = void 0;
exports.toGrpcServiceError = toGrpcServiceError;
exports.extractMetadataValue = extractMetadataValue;
exports.mapAuthResultToGrpcResponse = mapAuthResultToGrpcResponse;
const grpc = __importStar(require("@grpc/grpc-js"));
const auth_services_1 = require("../services/auth.services");
// --- Mapeadores gRPC ---
function mapHttpErrorToGrpcCode(statusCode) {
    if (statusCode === 400) {
        return grpc.status.INVALID_ARGUMENT;
    }
    if (statusCode === 401) {
        return grpc.status.UNAUTHENTICATED;
    }
    if (statusCode === 409) {
        return grpc.status.ALREADY_EXISTS;
    }
    return grpc.status.INTERNAL;
}
function toGrpcServiceError(error) {
    if (error instanceof auth_services_1.AuthServiceError) {
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
function mapAuthResultToGrpcResponse(data) {
    return {
        user_id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        access_token: data.accessToken,
        refresh_token: data.refreshToken,
        refresh_expires_at: data.refreshExpiresAt.toISOString(),
    };
}
exports.authController = {
    Register: async (call, callback) => {
        try {
            const data = await (0, auth_services_1.register)({
                name: call.request.name ?? '',
                email: call.request.email ?? '',
                password: call.request.password ?? '',
            });
            console.log(`[Register] Usuario registrado: ${data.user.name}`);
            callback(null, mapAuthResultToGrpcResponse(data));
        }
        catch (error) {
            console.error('[Register] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    Login: async (call, callback) => {
        try {
            const data = await (0, auth_services_1.login)({
                name: call.request.name ?? '',
                password: call.request.password ?? '',
            });
            console.log(`[Login] Usuario autenticado: ${data.user.name}`);
            callback(null, mapAuthResultToGrpcResponse(data));
        }
        catch (error) {
            console.error('[Login] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    Refresh: async (call, callback) => {
        try {
            const data = await (0, auth_services_1.refresh)({
                refreshToken: call.request.refresh_token ?? '',
            });
            console.log('[Refresh] Access token renovado');
            callback(null, { access_token: data.accessToken });
        }
        catch (error) {
            console.error('[Refresh] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    Logout: async (call, callback) => {
        try {
            const result = await (0, auth_services_1.logout)({
                refreshToken: call.request.refresh_token ?? '',
            });
            console.log('[Logout] Refresh token invalidado');
            callback(null, result);
        }
        catch (error) {
            console.error('[Logout] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
};
//# sourceMappingURL=auth.controller.js.map