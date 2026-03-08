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
export declare function register(input: RegisterInput): Promise<RegisterResult>;
export declare function login(input: LoginInput): Promise<LoginResult>;
export declare function refresh(input: RefreshInput): Promise<RefreshResult>;
export declare function logout(input: LogoutInput): Promise<LogoutResult>;
//# sourceMappingURL=auth.services.d.ts.map