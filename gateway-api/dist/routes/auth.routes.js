"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const async_handler_1 = require("../utils/async-handler");
const router = (0, express_1.Router)();
router.post('/register', (0, async_handler_1.asyncHandler)(auth_controller_1.registerController));
router.post('/login', (0, async_handler_1.asyncHandler)(auth_controller_1.loginController));
router.post('/refresh', (0, async_handler_1.asyncHandler)(auth_controller_1.refreshController));
router.post('/logout', (0, async_handler_1.asyncHandler)(auth_controller_1.logoutController));
exports.authRoutes = router;
//# sourceMappingURL=auth.routes.js.map