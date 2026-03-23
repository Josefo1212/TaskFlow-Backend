import { SignOptions } from 'jsonwebtoken';
type JwtExpiresIn = NonNullable<SignOptions['expiresIn']>;
export interface AuthRuntimeConfig {
    jwtSecret: string;
    jwtAccessExpiresIn: JwtExpiresIn;
    refreshTokenTtlDays: number;
}
export interface AccessTokenPayload {
    sub: string;
    email: string;
    user: string;
}
export declare function getAuthRuntimeConfig(): AuthRuntimeConfig;
export declare function generateAccessToken(payload: AccessTokenPayload, jwtSecret: string, expiresIn: JwtExpiresIn): string;
export declare function generateRefreshToken(): string;
export declare function calculateRefreshExpiration(ttlDays: number): Date;
export {};
//# sourceMappingURL=token.d.ts.map