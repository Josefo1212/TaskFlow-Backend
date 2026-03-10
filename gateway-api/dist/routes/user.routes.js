"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const async_handler_1 = require("../utils/async-handler");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticateRequest);
router.get('/me', (0, async_handler_1.asyncHandler)(user_controller_1.getMyProfileController));
router.patch('/me', (0, async_handler_1.asyncHandler)(user_controller_1.updateMyProfileController));
router.get('/', (0, async_handler_1.asyncHandler)(user_controller_1.listUsersController));
router.get('/search', (0, async_handler_1.asyncHandler)(user_controller_1.searchUsersController));
router.post('/basic-info', (0, async_handler_1.asyncHandler)(user_controller_1.getUsersByIdsController));
router.get('/:userId/basic-info', (0, async_handler_1.asyncHandler)(user_controller_1.getBasicInfoController));
router.get('/:userId/exists', (0, async_handler_1.asyncHandler)(user_controller_1.checkUserExistsController));
exports.userRoutes = router;
//# sourceMappingURL=user.routes.js.map