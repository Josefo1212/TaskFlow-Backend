interface UserRow {
    id: string;
    user: string;
    email: string;
    created_at: string | Date;
    updated_at: string | Date;
}
interface UserBasicRow {
    id: string;
    user: string;
    email: string;
}
export declare function findUserById(userId: string): Promise<UserRow | null>;
export declare function findUserByEmail(email: string): Promise<UserRow | null>;
export declare function findUserByUser(user: string): Promise<UserRow | null>;
export declare function updateUserProfile(userId: string, user: string, email: string): Promise<UserRow>;
export declare function listUsersQuery(search: string, limit: number, offset: number): Promise<UserRow[]>;
export declare function countUsersQuery(search: string): Promise<number>;
export declare function searchUsersQuery(query: string, limit: number): Promise<UserBasicRow[]>;
export declare function getUsersByIdsQuery(userIds: string[]): Promise<UserBasicRow[]>;
export type { UserBasicRow, UserRow };
//# sourceMappingURL=user.queries.d.ts.map