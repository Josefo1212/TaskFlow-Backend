import { Response } from 'express';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
export declare function createProjectController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function listProjectsController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function getProjectController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function updateProjectController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function deleteProjectController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function addProjectMemberController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function listProjectMembersController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function updateProjectMemberRoleController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function removeProjectMemberController(req: AuthenticatedRequest, res: Response): Promise<void>;
//# sourceMappingURL=project.controller.d.ts.map