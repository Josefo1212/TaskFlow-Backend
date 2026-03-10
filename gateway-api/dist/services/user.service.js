"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileWithUserService = getProfileWithUserService;
exports.updateProfileWithUserService = updateProfileWithUserService;
exports.listUsersWithUserService = listUsersWithUserService;
exports.searchUsersWithUserService = searchUsersWithUserService;
exports.getUsersByIdsWithUserService = getUsersByIdsWithUserService;
exports.checkUserExistsWithUserService = checkUserExistsWithUserService;
exports.getBasicInfoWithUserService = getBasicInfoWithUserService;
const user_client_1 = require("../grpc/user.client");
const grpc_error_mapper_1 = require("../utils/grpc-error-mapper");
function promisifyUnaryCall(client, method, request) {
    return new Promise((resolve, reject) => {
        method.call(client, request, (error, response) => {
            if (error) {
                reject((0, grpc_error_mapper_1.mapGrpcErrorToHttp)(error));
                return;
            }
            if (!response) {
                reject(new Error('Empty response from user-service'));
                return;
            }
            resolve(response);
        });
    });
}
function getProfileWithUserService(payload) {
    return promisifyUnaryCall(user_client_1.userClient, user_client_1.userClient.GetProfile, payload);
}
function updateProfileWithUserService(payload) {
    return promisifyUnaryCall(user_client_1.userClient, user_client_1.userClient.UpdateProfile, payload);
}
function listUsersWithUserService(payload) {
    return promisifyUnaryCall(user_client_1.userClient, user_client_1.userClient.ListUsers, payload);
}
function searchUsersWithUserService(payload) {
    return promisifyUnaryCall(user_client_1.userClient, user_client_1.userClient.SearchUsers, payload);
}
function getUsersByIdsWithUserService(payload) {
    return promisifyUnaryCall(user_client_1.userClient, user_client_1.userClient.GetUsersByIds, payload);
}
function checkUserExistsWithUserService(payload) {
    return promisifyUnaryCall(user_client_1.userClient, user_client_1.userClient.CheckUserExists, payload);
}
function getBasicInfoWithUserService(payload) {
    return promisifyUnaryCall(user_client_1.userClient, user_client_1.userClient.GetBasicInfo, payload);
}
//# sourceMappingURL=user.service.js.map