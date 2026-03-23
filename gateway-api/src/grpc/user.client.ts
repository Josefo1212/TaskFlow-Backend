import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { env } from '../config/env';

export interface UserGrpcResponse {
	id: string;
	user: string;
	email: string;
	created_at: string;
	updated_at: string;
}

export interface UserBasicGrpcResponse {
	id: string;
	user: string;
	email: string;
}

export interface GetProfileGrpcRequest {
	user_id: string;
}

export interface GetProfileGrpcResponse {
	user: UserGrpcResponse;
}

export interface UpdateProfileGrpcRequest {
	user_id: string;
	user?: string;
	email?: string;
}

export interface UpdateProfileGrpcResponse {
	user: UserGrpcResponse;
}

export interface ListUsersGrpcRequest {
	page?: number;
	limit?: number;
	search?: string;
}

export interface ListUsersGrpcResponse {
	users: UserGrpcResponse[];
	total: number;
	page: number;
	limit: number;
}

export interface SearchUsersGrpcRequest {
	query: string;
	limit?: number;
}

export interface SearchUsersGrpcResponse {
	users: UserBasicGrpcResponse[];
}

export interface GetUsersByIdsGrpcRequest {
	user_ids: string[];
}

export interface GetUsersByIdsGrpcResponse {
	users: UserBasicGrpcResponse[];
}

export interface CheckUserExistsGrpcRequest {
	user_id: string;
}

export interface CheckUserExistsGrpcResponse {
	exists: boolean;
	user?: UserBasicGrpcResponse;
}

export interface GetBasicInfoGrpcRequest {
	user_id: string;
}

export interface GetBasicInfoGrpcResponse {
	user: UserBasicGrpcResponse;
}

interface UserServiceClient extends grpc.Client {
	GetProfile(
		request: GetProfileGrpcRequest,
		callback: grpc.requestCallback<GetProfileGrpcResponse>,
	): void;
	UpdateProfile(
		request: UpdateProfileGrpcRequest,
		callback: grpc.requestCallback<UpdateProfileGrpcResponse>,
	): void;
	ListUsers(
		request: ListUsersGrpcRequest,
		callback: grpc.requestCallback<ListUsersGrpcResponse>,
	): void;
	SearchUsers(
		request: SearchUsersGrpcRequest,
		callback: grpc.requestCallback<SearchUsersGrpcResponse>,
	): void;
	GetUsersByIds(
		request: GetUsersByIdsGrpcRequest,
		callback: grpc.requestCallback<GetUsersByIdsGrpcResponse>,
	): void;
	CheckUserExists(
		request: CheckUserExistsGrpcRequest,
		callback: grpc.requestCallback<CheckUserExistsGrpcResponse>,
	): void;
	GetBasicInfo(
		request: GetBasicInfoGrpcRequest,
		callback: grpc.requestCallback<GetBasicInfoGrpcResponse>,
	): void;
}

interface LoadedUserPackage {
	user: {
		UserService: grpc.ServiceClientConstructor;
	};
}

const protoPath = path.resolve(__dirname, '../../proto/user.proto');

const packageDefinition = protoLoader.loadSync(protoPath, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const loadedProto = grpc.loadPackageDefinition(packageDefinition) as unknown as LoadedUserPackage;

export const userClient = new loadedProto.user.UserService(
	env.USER_GRPC_URL,
	grpc.credentials.createInsecure(),
) as unknown as UserServiceClient;