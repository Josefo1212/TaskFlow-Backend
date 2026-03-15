interface UserRecord {
    id: string;
    email: string;
    password: string;
    name: string;
}
interface CreatedUserRecord {
    id: string;
    email: string;
    name: string;
}
interface CreateUserParams {
    name: string;
    email: string;
    passwordHash: string;
}
interface UpdatedUserRecord {
    id: string;
    email: string;
    name: string;
}
export declare function findUserByEmail(email: string): Promise<UserRecord | null>;
export declare function findUserByName(name: string): Promise<UserRecord | null>;
export declare function createUser(params: CreateUserParams): Promise<CreatedUserRecord>;
export declare function updateUserPasswordByEmail(email: string, passwordHash: string): Promise<UpdatedUserRecord | null>;
export declare function updateUserPasswordByName(name: string, passwordHash: string): Promise<UpdatedUserRecord | null>;
export {};
//# sourceMappingURL=auth.queries.d.ts.map