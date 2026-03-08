import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
export declare function registerController(req: Request, res: Response): Promise<void>;
export declare function loginController(req: Request, res: Response): Promise<void>;
export declare function refreshController(req: Request, res: Response): Promise<void>;
export declare function logoutController(req: Request, res: Response): Promise<void>;
export declare function meController(req: AuthenticatedRequest, res: Response): Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map