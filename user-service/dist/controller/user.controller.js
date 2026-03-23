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
exports.userController = void 0;
const grpc = __importStar(require("@grpc/grpc-js"));
const user_services_1 = require("../services/user.services");
const user_errors_1 = require("../utils/user-errors");
function mapHttpErrorToGrpcCode(statusCode) {
    if (statusCode === 400) {
        return grpc.status.INVALID_ARGUMENT;
    }
    if (statusCode === 404) {
        return grpc.status.NOT_FOUND;
    }
    if (statusCode === 409) {
        return grpc.status.ALREADY_EXISTS;
    }
    return grpc.status.INTERNAL;
}
function toGrpcServiceError(error) {
    if (error instanceof user_errors_1.UserServiceError) {
        return {
            code: mapHttpErrorToGrpcCode(error.statusCode),
            message: error.message,
            name: 'UserServiceError',
        };
    }
    return {
        code: grpc.status.INTERNAL,
        message: 'Internal server error',
        name: 'InternalError',
    };
}
function mapUser(user) {
    return {
        id: user.id,
        user: user.user,
        email: user.email,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
    };
}
function mapBasicUser(user) {
    return {
        id: user.id,
        user: user.user,
        email: user.email,
    };
}
exports.userController = {
    GetProfile: async (call, callback) => {
        try {
            const user = await (0, user_services_1.getProfile)({ userId: call.request.user_id ?? '' });
            callback(null, { user: mapUser(user) });
        }
        catch (error) {
            console.error('[GetProfile] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    UpdateProfile: async (call, callback) => {
        try {
            const payload = {
                userId: call.request.user_id ?? '',
            };
            if (call.request.user?.trim()) {
                payload.user = call.request.user;
            }
            if (call.request.email?.trim()) {
                payload.email = call.request.email;
            }
            const user = await (0, user_services_1.updateProfile)(payload);
            callback(null, { user: mapUser(user) });
        }
        catch (error) {
            console.error('[UpdateProfile] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    ListUsers: async (call, callback) => {
        try {
            const payload = {};
            if (call.request.page && call.request.page > 0) {
                payload.page = call.request.page;
            }
            if (call.request.limit && call.request.limit > 0) {
                payload.limit = call.request.limit;
            }
            if (call.request.search?.trim()) {
                payload.search = call.request.search;
            }
            const result = await (0, user_services_1.listUsers)(payload);
            callback(null, {
                users: result.users.map(mapUser),
                total: result.total,
                page: result.page,
                limit: result.limit,
            });
        }
        catch (error) {
            console.error('[ListUsers] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    SearchUsers: async (call, callback) => {
        try {
            const payload = {};
            if (call.request.query?.trim()) {
                payload.query = call.request.query;
            }
            if (call.request.limit && call.request.limit > 0) {
                payload.limit = call.request.limit;
            }
            const users = await (0, user_services_1.searchUsers)(payload);
            callback(null, { users: users.map(mapBasicUser) });
        }
        catch (error) {
            console.error('[SearchUsers] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    GetUsersByIds: async (call, callback) => {
        try {
            const users = await (0, user_services_1.getUsersByIds)({ userIds: call.request.user_ids ?? [] });
            callback(null, { users: users.map(mapBasicUser) });
        }
        catch (error) {
            console.error('[GetUsersByIds] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    CheckUserExists: async (call, callback) => {
        try {
            const result = await (0, user_services_1.checkUserExists)({ userId: call.request.user_id ?? '' });
            const response = {
                exists: result.exists,
            };
            if (result.user) {
                response.user = mapBasicUser(result.user);
            }
            callback(null, response);
        }
        catch (error) {
            console.error('[CheckUserExists] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    GetBasicInfo: async (call, callback) => {
        try {
            const user = await (0, user_services_1.getBasicInfo)({ userId: call.request.user_id ?? '' });
            callback(null, { user: mapBasicUser(user) });
        }
        catch (error) {
            console.error('[GetBasicInfo] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
};
//# sourceMappingURL=user.controller.js.map