interface AccessTokenPayload {
    sub: string;
    email: string;
    name: string;
}
export declare function generateAccessToken(payload: AccessTokenPayload, jwtSecret: string, expiresIn: string): string;
export declare function generateRefreshToken(): string;
export declare function calculateRefreshExpiration(ttlDays: number): Date;
export {};
//# sourceMappingURL=auth.token.d.ts.map