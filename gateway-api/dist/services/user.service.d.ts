import { CheckUserExistsGrpcRequest, CheckUserExistsGrpcResponse, GetBasicInfoGrpcRequest, GetBasicInfoGrpcResponse, GetProfileGrpcRequest, GetProfileGrpcResponse, GetUsersByIdsGrpcRequest, GetUsersByIdsGrpcResponse, ListUsersGrpcRequest, ListUsersGrpcResponse, SearchUsersGrpcRequest, SearchUsersGrpcResponse, UpdateProfileGrpcRequest, UpdateProfileGrpcResponse } from '../grpc/user.client';
export declare function getProfileWithUserService(payload: GetProfileGrpcRequest): Promise<GetProfileGrpcResponse>;
export declare function updateProfileWithUserService(payload: UpdateProfileGrpcRequest): Promise<UpdateProfileGrpcResponse>;
export declare function listUsersWithUserService(payload: ListUsersGrpcRequest): Promise<ListUsersGrpcResponse>;
export declare function searchUsersWithUserService(payload: SearchUsersGrpcRequest): Promise<SearchUsersGrpcResponse>;
export declare function getUsersByIdsWithUserService(payload: GetUsersByIdsGrpcRequest): Promise<GetUsersByIdsGrpcResponse>;
export declare function checkUserExistsWithUserService(payload: CheckUserExistsGrpcRequest): Promise<CheckUserExistsGrpcResponse>;
export declare function getBasicInfoWithUserService(payload: GetBasicInfoGrpcRequest): Promise<GetBasicInfoGrpcResponse>;
//# sourceMappingURL=user.service.d.ts.map