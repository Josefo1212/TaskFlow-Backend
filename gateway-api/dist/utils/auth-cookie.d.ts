import { Response } from 'express';
export declare function setRefreshTokenCookie(res: Response, refreshToken: string, expiresAt: string): void;
export declare function clearRefreshTokenCookie(res: Response): void;
export declare function readRefreshTokenCookie(cookies: RequestCookies | undefined): string | null;
type RequestCookies = Record<string, unknown>;
export {};
//# sourceMappingURL=auth-cookie.d.ts.map