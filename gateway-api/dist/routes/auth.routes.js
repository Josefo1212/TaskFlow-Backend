"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const rate_limit_middleware_1 = require("../middleware/rate-limit.middleware");
const async_handler_1 = require("../utils/async-handler");
const router = (0, express_1.Router)();
router.post('/register', rate_limit_middleware_1.authRateLimiter, (0, async_handler_1.asyncHandler)(auth_controller_1.registerController));
router.post('/login', rate_limit_middleware_1.authRateLimiter, (0, async_handler_1.asyncHandler)(auth_controller_1.loginController));
router.post('/refresh', rate_limit_middleware_1.authRateLimiter, (0, async_handler_1.asyncHandler)(auth_controller_1.refreshController));
router.post('/logout', rate_limit_middleware_1.authRateLimiter, (0, async_handler_1.asyncHandler)(auth_controller_1.logoutController));
router.get('/me', auth_middleware_1.authenticateRequest, (0, async_handler_1.asyncHandler)(auth_controller_1.meController));
exports.authRoutes = router;
//# sourceMappingURL=auth.routes.js.map