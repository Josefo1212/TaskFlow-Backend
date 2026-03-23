"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyProfileController = getMyProfileController;
exports.updateMyProfileController = updateMyProfileController;
exports.listUsersController = listUsersController;
exports.searchUsersController = searchUsersController;
exports.getUsersByIdsController = getUsersByIdsController;
exports.checkUserExistsController = checkUserExistsController;
exports.getBasicInfoController = getBasicInfoController;
const zod_1 = require("zod");
const grpc_error_mapper_1 = require("../utils/grpc-error-mapper");
const user_service_1 = require("../services/user.service");
const updateProfileSchema = zod_1.z
    .object({
    user: zod_1.z
        .string()
        .min(1, 'El campo "user" no puede estar vacío.')
        .max(250, 'El campo "user" debe tener como máximo 250 caracteres.')
        .optional(),
    email: zod_1.z
        .email('El campo "email" debe ser un correo válido.')
        .max(250, 'El campo "email" debe tener como máximo 250 caracteres.')
        .optional(),
})
    .refine((data) => data.user !== undefined || data.email !== undefined, {
    message: 'Debes enviar al menos "user" o "email".',
});
const listUsersSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().optional(),
    limit: zod_1.z.coerce.number().int().positive().optional(),
    search: zod_1.z.string().optional(),
});
const searchUsersSchema = zod_1.z.object({
    query: zod_1.z.string().optional().default(''),
    limit: zod_1.z.coerce.number().int().positive().optional(),
});
const getUsersByIdsSchema = zod_1.z.object({
    user_ids: zod_1.z.array(zod_1.z.string().min(1)).default([]),
});
function requireAuthenticatedUserId(req) {
    const userId = req.user?.sub;
    if (!userId) {
        throw new grpc_error_mapper_1.GatewayError('No autorizado.', 401);
    }
    return userId;
}
function requireRouteUserId(req) {
    const { userId } = req.params;
    if (typeof userId !== 'string' || !userId.trim()) {
        throw new grpc_error_mapper_1.GatewayError('Se requiere el parámetro "userId".', 400);
    }
    return userId;
}
async function getMyProfileController(req, res) {
    const response = await (0, user_service_1.getProfileWithUserService)({
        user_id: requireAuthenticatedUserId(req),
    });
    res.status(200).json(response);
}
async function updateMyProfileController(req, res) {
    const payload = updateProfileSchema.parse(req.body ?? {});
    const requestPayload = {
        user_id: requireAuthenticatedUserId(req),
    };
    if (payload.user !== undefined) {
        requestPayload.user = payload.user;
    }
    if (payload.email !== undefined) {
        requestPayload.email = payload.email;
    }
    const response = await (0, user_service_1.updateProfileWithUserService)(requestPayload);
    res.status(200).json(response);
}
async function listUsersController(req, res) {
    const payload = listUsersSchema.parse(req.query);
    const requestPayload = {};
    if (payload.page !== undefined) {
        requestPayload.page = payload.page;
    }
    if (payload.limit !== undefined) {
        requestPayload.limit = payload.limit;
    }
    if (payload.search !== undefined) {
        requestPayload.search = payload.search;
    }
    const response = await (0, user_service_1.listUsersWithUserService)(requestPayload);
    res.status(200).json(response);
}
async function searchUsersController(req, res) {
    const payload = searchUsersSchema.parse(req.query);
    const requestPayload = {
        query: payload.query,
    };
    if (payload.limit !== undefined) {
        requestPayload.limit = payload.limit;
    }
    const response = await (0, user_service_1.searchUsersWithUserService)(requestPayload);
    res.status(200).json(response);
}
async function getUsersByIdsController(req, res) {
    const payload = getUsersByIdsSchema.parse(req.body ?? {});
    const response = await (0, user_service_1.getUsersByIdsWithUserService)(payload);
    res.status(200).json(response);
}
async function checkUserExistsController(req, res) {
    const response = await (0, user_service_1.checkUserExistsWithUserService)({
        user_id: requireRouteUserId(req),
    });
    res.status(200).json(response);
}
async function getBasicInfoController(req, res) {
    const response = await (0, user_service_1.getBasicInfoWithUserService)({
        user_id: requireRouteUserId(req),
    });
    res.status(200).json(response);
}
//# sourceMappingURL=user.controller.js.map