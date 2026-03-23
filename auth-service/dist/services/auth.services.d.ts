export interface RegisterInput {
    user: string;
    email: string;
    password: string;
}
export interface LoginInput {
    user: string;
    password: string;
}
export interface LogoutInput {
    refreshToken: string;
}
export interface RefreshInput {
    refreshToken: string;
}
export interface ForgotPasswordInput {
    user: string;
}
export interface ForgotPasswordResult {
    token: string;
}
export interface ResetPasswordInput {
    token: string;
    password: string;
}
export interface ResetPasswordResult {
    message: string;
}
export interface AuthResult {
    user: {
        id: string;
        email: string;
        user: string;
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
export declare function forgotPassword(input: ForgotPasswordInput): Promise<ForgotPasswordResult>;
export declare function resetPassword(input: ResetPasswordInput): Promise<ResetPasswordResult>;
export declare function logout(input: LogoutInput): Promise<LogoutResult>;
//# sourceMappingURL=auth.services.d.ts.map