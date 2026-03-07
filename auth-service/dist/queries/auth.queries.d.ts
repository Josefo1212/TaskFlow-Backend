interface UserRecord {
    id: string;
    email: string;
    password: string;
    name: string;
}
interface ActiveSessionRecord {
    id: string;
    user_id: string;
}
interface SessionRecord {
    id: string;
    refresh_token: string;
    refresh_expires_at: Date;
}
interface CreateSessionParams {
    userId: string;
    ip: string | null;
    refreshToken: string;
    refreshExpiresAt: Date;
    userAgent: string | null;
}
interface CreateAuthLogParams {
    userId: string | null;
    sessionId: string | null;
    action: string;
    tableName: string | null;
    recordId: string | null;
    metadata?: Record<string, unknown>;
    ip: string | null;
}
export declare function findUserByEmail(email: string): Promise<UserRecord | null>;
export declare function findActiveSessionByRefreshToken(refreshToken: string): Promise<ActiveSessionRecord | null>;
export declare function createSession(params: CreateSessionParams): Promise<SessionRecord>;
export declare function deactivateSessionByRefreshToken(refreshToken: string): Promise<string | null>;
export declare function createAuthLog(params: CreateAuthLogParams): Promise<void>;
export {};
//# sourceMappingURL=auth.queries.d.ts.map