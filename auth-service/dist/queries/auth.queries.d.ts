interface UserRecord {
    id: string;
    email: string;
    password: string;
    user: string;
}
interface CreatedUserRecord {
    id: string;
    email: string;
    user: string;
}
interface CreateUserParams {
    user: string;
    email: string;
    passwordHash: string;
}
interface UpdatedUserRecord {
    id: string;
    email: string;
    user: string;
}
export declare function findUserByEmail(email: string): Promise<UserRecord | null>;
export declare function findUserByUser(user: string): Promise<UserRecord | null>;
export declare function createUser(params: CreateUserParams): Promise<CreatedUserRecord>;
export declare function updateUserPasswordByEmail(email: string, passwordHash: string): Promise<UpdatedUserRecord | null>;
export declare function updateUserPasswordByUser(user: string, passwordHash: string): Promise<UpdatedUserRecord | null>;
export {};
//# sourceMappingURL=auth.queries.d.ts.map