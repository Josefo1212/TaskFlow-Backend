import { Router } from 'express';
import {
	assignTaskController,
	changeTaskPriorityController,
	changeTaskStatusController,
	createTaskController,
	deleteTaskController,
	getTaskController,
	listTasksController,
	updateTaskController,
} from '../controller/task.controller';
import {
	addTagToTaskController as addTaskTagController,
	listTagsForTaskController as listTaskTagsController,
	removeTagFromTaskController as removeTaskTagController,
} from '../controller/tag.controller';
import { authenticateRequest } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async-handler';

const router = Router();

router.use(authenticateRequest);

router.post('/', asyncHandler(createTaskController));

router.get('/', asyncHandler(listTasksController));

router.get('/:taskId', asyncHandler(getTaskController));

router.put('/:taskId', asyncHandler(updateTaskController));

router.delete('/:taskId', asyncHandler(deleteTaskController));

router.patch('/:taskId/status', asyncHandler(changeTaskStatusController));

router.patch('/:taskId/priority', asyncHandler(changeTaskPriorityController));

router.patch('/:taskId/assign', asyncHandler(assignTaskController));

router.get('/:taskId/tags', asyncHandler(listTaskTagsController));

router.post('/:taskId/tags', asyncHandler(addTaskTagController));

router.delete('/:taskId/tags/:tagId', asyncHandler(removeTaskTagController));

export const tasksRoutes: Router = router;
