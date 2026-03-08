"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = registerController;
exports.loginController = loginController;
exports.refreshController = refreshController;
exports.logoutController = logoutController;
const zod_1 = require("zod");
const auth_service_1 = require("../services/auth.service");
const registerSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'name is required'),
    email: zod_1.z.email('email must be valid'),
    password: zod_1.z.string().min(6, 'password must have at least 6 characters'),
});
const loginSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'name is required'),
    password: zod_1.z.string().min(1, 'password is required'),
});
const refreshSchema = zod_1.z.object({
    refresh_token: zod_1.z.string().min(1, 'refresh_token is required'),
});
async function registerController(req, res) {
    const payload = registerSchema.parse(req.body);
    const response = await (0, auth_service_1.registerWithAuthService)(payload);
    res.status(201).json(response);
}
async function loginController(req, res) {
    const payload = loginSchema.parse(req.body);
    const response = await (0, auth_service_1.loginWithAuthService)(payload);
    res.status(200).json(response);
}
async function refreshController(req, res) {
    const payload = refreshSchema.parse(req.body);
    const response = await (0, auth_service_1.refreshWithAuthService)(payload);
    res.status(200).json(response);
}
async function logoutController(req, res) {
    const payload = refreshSchema.parse(req.body);
    const response = await (0, auth_service_1.logoutWithAuthService)(payload);
    res.status(200).json(response);
}
//# sourceMappingURL=auth.controller.js.map