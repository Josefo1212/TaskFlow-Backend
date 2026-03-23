import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
export interface AuthenticatedUserPayload extends JwtPayload {
    sub: string;
    email: string;
    user: string;
}
export interface AuthenticatedRequest extends Request {
    user?: AuthenticatedUserPayload;
}
export declare function authenticateRequest(req: AuthenticatedRequest, _res: Response, next: NextFunction): void;
//# sourceMappingURL=auth.middleware.d.ts.map