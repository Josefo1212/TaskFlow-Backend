export interface UserIdentity {
    id: string;
    email: string;
    user: string;
}
export declare function storeRefreshToken(refreshToken: string, user: UserIdentity, ttlDays: number): Promise<void>;
export declare function getRefreshTokenUser(refreshToken: string): Promise<UserIdentity | null>;
export declare function deleteRefreshToken(refreshToken: string): Promise<boolean>;
//# sourceMappingURL=refresh-token.d.ts.map