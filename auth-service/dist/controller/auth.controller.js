"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_grpc_mapper_1 = require("./auth.grpc.mapper");
const auth_services_1 = require("../services/auth.services");
exports.authController = {
    Login: async (call, callback) => {
        try {
            const reqIp = call.request.ip || (0, auth_grpc_mapper_1.extractMetadataValue)(call.metadata, 'x-forwarded-for');
            const reqUserAgent = call.request.user_agent || (0, auth_grpc_mapper_1.extractMetadataValue)(call.metadata, 'user-agent');
            const data = await (0, auth_services_1.login)({
                email: call.request.email ?? '',
                password: call.request.password ?? '',
                ip: reqIp,
                userAgent: reqUserAgent,
            });
            callback(null, (0, auth_grpc_mapper_1.mapLoginResultToGrpcResponse)(data));
        }
        catch (error) {
            callback((0, auth_grpc_mapper_1.toGrpcServiceError)(error));
        }
    },
    Logout: async (call, callback) => {
        try {
            const reqIp = call.request.ip || (0, auth_grpc_mapper_1.extractMetadataValue)(call.metadata, 'x-forwarded-for');
            const result = await (0, auth_services_1.logout)({
                refreshToken: call.request.refresh_token ?? '',
                ip: reqIp,
            });
            callback(null, result);
        }
        catch (error) {
            callback((0, auth_grpc_mapper_1.toGrpcServiceError)(error));
        }
    },
};
//# sourceMappingURL=auth.controller.js.map