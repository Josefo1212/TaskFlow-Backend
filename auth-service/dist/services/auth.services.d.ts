export interface RegisterInput {
    name: string;
    email: string;
    password: string;
}
export interface LoginInput {
    name: string;
    password: string;
}
export interface LogoutInput {
    refreshToken: string;
}
export interface RefreshInput {
    refreshToken: string;
}
export interface AuthResult {
    user: {
        id: string;
        email: string;
        name: string;
    };
    accessToken: string;
    refreshToken: string;
    refreshExpiresAt: Date;
}
export type RegisterResult = AuthResult;
export type LoginResult = AuthResult;
export interface RefreshResult {
    accessToken: string;
}
export interface LogoutResult {
    message: string;
}
export declare class AuthServiceError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export interface AuthRuntimeConfig {
    jwtSecret: string;
    jwtAccessExpiresIn: string;
    refreshTokenTtlDays: number;
}
export declare function getAuthRuntimeConfig(): AuthRuntimeConfig;
interface AccessTokenPayload {
    sub: string;
    email: string;
    name: string;
}
export declare function generateAccessToken(payload: AccessTokenPayload, jwtSecret: string, expiresIn: string): string;
export declare function generateRefreshToken(): string;
export declare function calculateRefreshExpiration(ttlDays: number): Date;
export declare function register(input: RegisterInput): Promise<RegisterResult>;
export declare function login(input: LoginInput): Promise<LoginResult>;
export declare function refresh(input: RefreshInput): Promise<RefreshResult>;
export declare function logout(input: LogoutInput): Promise<LogoutResult>;
export {};
//# sourceMappingURL=auth.services.d.ts.map