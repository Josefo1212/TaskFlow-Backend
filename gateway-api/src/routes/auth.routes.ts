import { Router } from 'express';
import {
	loginController,
	meController,
	logoutController,
	refreshController,
	registerController,
} from '../controller/auth.controller';
import { authenticateRequest } from '../middleware/auth.middleware';
import { authRateLimiter } from '../middleware/rate-limit.middleware';
import { asyncHandler } from '../utils/async-handler';

const router = Router();

router.post('/register', authRateLimiter, asyncHandler(registerController));
router.post('/login', authRateLimiter, asyncHandler(loginController));
router.post('/refresh', authRateLimiter, asyncHandler(refreshController));
router.post('/logout', authRateLimiter, asyncHandler(logoutController));
router.get('/me', authenticateRequest, asyncHandler(meController));

export const authRoutes: Router = router;