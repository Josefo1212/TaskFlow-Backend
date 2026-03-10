import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
export declare function getMyProfileController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function updateMyProfileController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function listUsersController(req: Request, res: Response): Promise<void>;
export declare function searchUsersController(req: Request, res: Response): Promise<void>;
export declare function getUsersByIdsController(req: Request, res: Response): Promise<void>;
export declare function checkUserExistsController(req: Request, res: Response): Promise<void>;
export declare function getBasicInfoController(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=user.controller.d.ts.map