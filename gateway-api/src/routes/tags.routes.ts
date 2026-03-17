import { Router } from 'express';
import {
	createTagController,
	deleteTagController,
	getTagController,
	listTagsController,
	updateTagController,
} from '../controller/tag.controller';
import { authenticateRequest } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async-handler';

const router = Router();

router.use(authenticateRequest);

router.post('/', asyncHandler(createTagController));

router.get('/', asyncHandler(listTagsController));

router.get('/:tagId', asyncHandler(getTagController));

router.put('/:tagId', asyncHandler(updateTagController));

router.delete('/:tagId', asyncHandler(deleteTagController));

export const tagsRoutes: Router = router;
