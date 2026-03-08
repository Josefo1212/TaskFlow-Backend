import { Router } from 'express';
import {
	loginController,
	logoutController,
	refreshController,
	registerController,
} from '../controller/auth.controller';
import { asyncHandler } from '../utils/async-handler';

const router = Router();

router.post('/register', asyncHandler(registerController));
router.post('/login', asyncHandler(loginController));
router.post('/refresh', asyncHandler(refreshController));
router.post('/logout', asyncHandler(logoutController));

export const authRoutes: Router = router;