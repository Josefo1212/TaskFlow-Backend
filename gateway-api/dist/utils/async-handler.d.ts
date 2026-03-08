import { NextFunction, Request, Response } from 'express';
type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
export declare function asyncHandler(handler: AsyncHandler): (req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=async-handler.d.ts.map