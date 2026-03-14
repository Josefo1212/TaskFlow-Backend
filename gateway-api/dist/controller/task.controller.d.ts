import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
export declare function createTaskController(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function listTasksController(req: Request, res: Response): Promise<void>;
export declare function getTaskController(req: Request, res: Response): Promise<void>;
export declare function updateTaskController(req: Request, res: Response): Promise<void>;
export declare function deleteTaskController(req: Request, res: Response): Promise<void>;
export declare function changeTaskStatusController(req: Request, res: Response): Promise<void>;
export declare function changeTaskPriorityController(req: Request, res: Response): Promise<void>;
export declare function assignTaskController(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=task.controller.d.ts.map