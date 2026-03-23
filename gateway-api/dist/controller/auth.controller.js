"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = registerController;
exports.loginController = loginController;
exports.refreshController = refreshController;
exports.logoutController = logoutController;
exports.meController = meController;
exports.forgotPasswordController = forgotPasswordController;
exports.resetPasswordController = resetPasswordController;
const zod_1 = require("zod");
const auth_service_1 = require("../services/auth.service");
const auth_cookie_1 = require("../utils/auth-cookie");
const grpc_error_mapper_1 = require("../utils/grpc-error-mapper");
const registerSchema = zod_1.z.object({
    user: zod_1.z.string().min(1, 'user is required').max(250, 'user must be at most 250 characters'),
    email: zod_1.z.email('email must be valid').max(250, 'email must be at most 250 characters'),
    password: zod_1.z
        .string()
        .min(8, 'password must have at least 8 characters')
        .max(15, 'password must be at most 15 characters'),
});
const loginSchema = zod_1.z.object({
    user: zod_1.z.string().trim().min(1, 'user is required').max(250, 'user must be at most 250 characters'),
    password: zod_1.z.string().min(1, 'password is required'),
});
const refreshSchema = zod_1.z.object({
    refresh_token: zod_1.z.string().min(1, 'refresh_token is required').optional(),
});
const forgotPasswordSchema = zod_1.z.object({
    user: zod_1.z.string().trim().min(1, 'user is required').max(250, 'user must be at most 250 characters'),
});
const resetPasswordSchema = zod_1.z.object({
    token: zod_1.z.string().min(1, 'token is required'),
    password: zod_1.z
        .string()
        .min(8, 'password must have at least 8 characters')
        .max(15, 'password must be at most 15 characters'),
});
function getRefreshTokenFromRequest(req) {
    const cookieToken = (0, auth_cookie_1.readRefreshTokenCookie)(req.cookies);
    if (cookieToken) {
        return cookieToken;
    }
    const parsedBody = refreshSchema.safeParse(req.body ?? {});
    const bodyToken = parsedBody.success ? parsedBody.data.refresh_token?.trim() : '';
    if (bodyToken) {
        return bodyToken;
    }
    throw new grpc_error_mapper_1.GatewayError('refresh_token is required', 400);
}
function buildAuthResponse(response) {
    return {
        user_id: response.user_id,
        email: response.email,
        user: response.user,
        access_token: response.access_token,
    };
}
async function registerController(req, res) {
    const payload = registerSchema.parse(req.body);
    const response = await (0, auth_service_1.registerWithAuthService)(payload);
    (0, auth_cookie_1.setRefreshTokenCookie)(res, response.refresh_token, response.refresh_expires_at);
    res.status(201).json(buildAuthResponse(response));
}
async function loginController(req, res) {
    const payload = loginSchema.parse(req.body);
    const response = await (0, auth_service_1.loginWithAuthService)(payload);
    (0, auth_cookie_1.setRefreshTokenCookie)(res, response.refresh_token, response.refresh_expires_at);
    res.status(200).json(buildAuthResponse(response));
}
async function refreshController(req, res) {
    const refreshToken = getRefreshTokenFromRequest(req);
    try {
        const response = await (0, auth_service_1.refreshWithAuthService)({ refresh_token: refreshToken });
        res.status(200).json(response);
    }
    catch (error) {
        (0, auth_cookie_1.clearRefreshTokenCookie)(res);
        throw error;
    }
}
async function logoutController(req, res) {
    const refreshToken = getRefreshTokenFromRequest(req);
    const response = await (0, auth_service_1.logoutWithAuthService)({ refresh_token: refreshToken });
    (0, auth_cookie_1.clearRefreshTokenCookie)(res);
    res.status(200).json(response);
}
async function meController(req, res) {
    res.status(200).json({
        user: req.user,
    });
}
async function forgotPasswordController(req, res) {
    const payload = forgotPasswordSchema.parse(req.body);
    const response = await (0, auth_service_1.forgotPasswordWithAuthService)({ user: payload.user });
    res.status(200).json(response);
}
async function resetPasswordController(req, res) {
    const payload = resetPasswordSchema.parse(req.body);
    const response = await (0, auth_service_1.resetPasswordWithAuthService)(payload);
    res.status(200).json(response);
}
//# sourceMappingURL=auth.controller.js.map