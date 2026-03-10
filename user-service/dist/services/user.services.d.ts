export interface UserProfile {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}
export interface UserBasic {
    id: string;
    name: string;
    email: string;
}
interface GetProfileInput {
    userId: string;
}
interface UpdateProfileInput {
    userId: string;
    name?: string;
    email?: string;
}
interface ListUsersInput {
    page?: number;
    limit?: number;
    search?: string;
}
interface SearchUsersInput {
    query?: string;
    limit?: number;
}
interface GetUsersByIdsInput {
    userIds: string[];
}
interface CheckUserExistsInput {
    userId: string;
}
interface GetBasicInfoInput {
    userId: string;
}
interface ListUsersResult {
    users: UserProfile[];
    total: number;
    page: number;
    limit: number;
}
interface CheckUserExistsResult {
    exists: boolean;
    user?: UserBasic;
}
export declare function getProfile(input: GetProfileInput): Promise<UserProfile>;
export declare function updateProfile(input: UpdateProfileInput): Promise<UserProfile>;
export declare function listUsers(input: ListUsersInput): Promise<ListUsersResult>;
export declare function searchUsers(input: SearchUsersInput): Promise<UserBasic[]>;
export declare function getUsersByIds(input: GetUsersByIdsInput): Promise<UserBasic[]>;
export declare function checkUserExists(input: CheckUserExistsInput): Promise<CheckUserExistsResult>;
export declare function getBasicInfo(input: GetBasicInfoInput): Promise<UserBasic>;
export {};
//# sourceMappingURL=user.services.d.ts.map