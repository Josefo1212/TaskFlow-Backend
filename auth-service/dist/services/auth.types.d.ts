export interface LoginInput {
    email: string;
    password: string;
    ip: string | null;
    userAgent: string | null;
}
export interface LogoutInput {
    refreshToken: string;
    ip: string | null;
}
export interface LoginResult {
    user: {
        id: string;
        email: string;
        name: string;
    };
    accessToken: string;
    refreshToken: string;
    refreshExpiresAt: Date;
    sessionId: string;
}
export interface LogoutResult {
    message: string;
}
//# sourceMappingURL=auth.types.d.ts.map