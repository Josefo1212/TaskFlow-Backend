import { Router } from 'express';
import {
	checkUserExistsController,
	getBasicInfoController,
	getMyProfileController,
	getUsersByIdsController,
	listUsersController,
	searchUsersController,
	updateMyProfileController,
} from '../controller/user.controller';
import { authenticateRequest } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async-handler';

const router = Router();

router.use(authenticateRequest);
router.get('/me', asyncHandler(getMyProfileController));
router.patch('/me', asyncHandler(updateMyProfileController));
router.get('/', asyncHandler(listUsersController));
router.get('/search', asyncHandler(searchUsersController));
router.post('/basic-info', asyncHandler(getUsersByIdsController));
router.get('/:userId/basic-info', asyncHandler(getBasicInfoController));
router.get('/:userId/exists', asyncHandler(checkUserExistsController));

export const userRoutes: Router = router;