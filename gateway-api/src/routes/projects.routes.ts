import { Router } from 'express';
import {
	addProjectMemberController,
	createProjectController,
	deleteProjectController,
	getProjectController,
	listProjectMembersController,
	listProjectsController,
	removeProjectMemberController,
	updateProjectController,
	updateProjectMemberRoleController,
} from '../controller/project.controller';
import { authenticateRequest } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async-handler';

const router = Router();

router.use(authenticateRequest);

router.post('/', asyncHandler(createProjectController));
router.get('/', asyncHandler(listProjectsController));
router.get('/:projectId', asyncHandler(getProjectController));
router.put('/:projectId', asyncHandler(updateProjectController));
router.delete('/:projectId', asyncHandler(deleteProjectController));

router.get('/:projectId/members', asyncHandler(listProjectMembersController));
router.post('/:projectId/members', asyncHandler(addProjectMemberController));
router.patch('/:projectId/members/:userId/role', asyncHandler(updateProjectMemberRoleController));
router.delete('/:projectId/members/:userId', asyncHandler(removeProjectMemberController));

export const projectsRoutes: Router = router;
