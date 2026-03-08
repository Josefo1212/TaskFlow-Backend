"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerWithAuthService = registerWithAuthService;
exports.loginWithAuthService = loginWithAuthService;
exports.refreshWithAuthService = refreshWithAuthService;
exports.logoutWithAuthService = logoutWithAuthService;
const auth_client_1 = require("../grpc/auth.client");
const grpc_error_mapper_1 = require("../utils/grpc-error-mapper");
function promisifyUnaryCall(method, request) {
    return new Promise((resolve, reject) => {
        method.call(auth_client_1.authClient, request, (error, response) => {
            if (error) {
                reject((0, grpc_error_mapper_1.mapGrpcErrorToHttp)(error));
                return;
            }
            if (!response) {
                reject(new Error('Empty response from auth-service'));
                return;
            }
            resolve(response);
        });
    });
}
function registerWithAuthService(payload) {
    return promisifyUnaryCall(auth_client_1.authClient.Register, payload);
}
function loginWithAuthService(payload) {
    return promisifyUnaryCall(auth_client_1.authClient.Login, payload);
}
function refreshWithAuthService(payload) {
    return promisifyUnaryCall(auth_client_1.authClient.Refresh, payload);
}
function logoutWithAuthService(payload) {
    return promisifyUnaryCall(auth_client_1.authClient.Logout, payload);
}
//# sourceMappingURL=auth.service.js.map