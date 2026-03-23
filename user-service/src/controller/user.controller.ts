import * as grpc from '@grpc/grpc-js';
import {
	checkUserExists,
	getBasicInfo,
	getProfile,
	getUsersByIds,
	listUsers,
	searchUsers,
	updateProfile,
	UserBasic,
	UserProfile,
} from '../services/user.services';
import { UserServiceError } from '../utils/user-errors';

interface GetProfileGrpcRequest {
	user_id: string;
}

interface UpdateProfileGrpcRequest {
	user_id: string;
	user?: string;
	email?: string;
}

interface ListUsersGrpcRequest {
	page?: number;
	limit?: number;
	search?: string;
}

interface SearchUsersGrpcRequest {
	query?: string;
	limit?: number;
}

interface GetUsersByIdsGrpcRequest {
	user_ids?: string[];
}

interface CheckUserExistsGrpcRequest {
	user_id: string;
}

interface GetBasicInfoGrpcRequest {
	user_id: string;
}

interface UserGrpcResponse {
	id: string;
	user: string;
	email: string;
	created_at: string;
	updated_at: string;
}

interface UserBasicGrpcResponse {
	id: string;
	user: string;
	email: string;
}

interface GetProfileGrpcResponse {
	user: UserGrpcResponse;
}

interface UpdateProfileGrpcResponse {
	user: UserGrpcResponse;
}

interface ListUsersGrpcResponse {
	users: UserGrpcResponse[];
	total: number;
	page: number;
	limit: number;
}

interface SearchUsersGrpcResponse {
	users: UserBasicGrpcResponse[];
}

interface GetUsersByIdsGrpcResponse {
	users: UserBasicGrpcResponse[];
}

interface CheckUserExistsGrpcResponse {
	exists: boolean;
	user?: UserBasicGrpcResponse;
}

interface GetBasicInfoGrpcResponse {
	user: UserBasicGrpcResponse;
}

function mapHttpErrorToGrpcCode(statusCode: number): grpc.status {
	if (statusCode === 400) {
		return grpc.status.INVALID_ARGUMENT;
	}

	if (statusCode === 404) {
		return grpc.status.NOT_FOUND;
	}

	if (statusCode === 409) {
		return grpc.status.ALREADY_EXISTS;
	}

	return grpc.status.INTERNAL;
}

function toGrpcServiceError(error: unknown): grpc.ServiceError {
	if (error instanceof UserServiceError) {
		return {
			code: mapHttpErrorToGrpcCode(error.statusCode),
			message: error.message,
			name: 'UserServiceError',
		} as grpc.ServiceError;
	}

	return {
		code: grpc.status.INTERNAL,
		message: 'Internal server error',
		name: 'InternalError',
	} as grpc.ServiceError;
}

function mapUser(user: UserProfile): UserGrpcResponse {
	return {
		id: user.id,
		user: user.user,
		email: user.email,
		created_at: user.createdAt,
		updated_at: user.updatedAt,
	};
}

function mapBasicUser(user: UserBasic): UserBasicGrpcResponse {
	return {
		id: user.id,
		user: user.user,
		email: user.email,
	};
}

export const userController: grpc.UntypedServiceImplementation = {
	GetProfile: async (
		call: grpc.ServerUnaryCall<GetProfileGrpcRequest, GetProfileGrpcResponse>,
		callback: grpc.sendUnaryData<GetProfileGrpcResponse>,
	) => {
		try {
			const user = await getProfile({ userId: call.request.user_id ?? '' });
			callback(null, { user: mapUser(user) });
		} catch (error) {
			console.error('[GetProfile] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	UpdateProfile: async (
		call: grpc.ServerUnaryCall<UpdateProfileGrpcRequest, UpdateProfileGrpcResponse>,
		callback: grpc.sendUnaryData<UpdateProfileGrpcResponse>,
	) => {
		try {
			const payload: {
				userId: string;
				user?: string;
				email?: string;
			} = {
				userId: call.request.user_id ?? '',
			};

			if (call.request.user?.trim()) {
				payload.user = call.request.user;
			}

			if (call.request.email?.trim()) {
				payload.email = call.request.email;
			}

			const user = await updateProfile(payload);
			callback(null, { user: mapUser(user) });
		} catch (error) {
			console.error('[UpdateProfile] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	ListUsers: async (
		call: grpc.ServerUnaryCall<ListUsersGrpcRequest, ListUsersGrpcResponse>,
		callback: grpc.sendUnaryData<ListUsersGrpcResponse>,
	) => {
		try {
			const payload: {
				page?: number;
				limit?: number;
				search?: string;
			} = {};

			if (call.request.page && call.request.page > 0) {
				payload.page = call.request.page;
			}

			if (call.request.limit && call.request.limit > 0) {
				payload.limit = call.request.limit;
			}

			if (call.request.search?.trim()) {
				payload.search = call.request.search;
			}

			const result = await listUsers(payload);
			callback(null, {
				users: result.users.map(mapUser),
				total: result.total,
				page: result.page,
				limit: result.limit,
			});
		} catch (error) {
			console.error('[ListUsers] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	SearchUsers: async (
		call: grpc.ServerUnaryCall<SearchUsersGrpcRequest, SearchUsersGrpcResponse>,
		callback: grpc.sendUnaryData<SearchUsersGrpcResponse>,
	) => {
		try {
			const payload: {
				query?: string;
				limit?: number;
			} = {};

			if (call.request.query?.trim()) {
				payload.query = call.request.query;
			}

			if (call.request.limit && call.request.limit > 0) {
				payload.limit = call.request.limit;
			}

			const users = await searchUsers(payload);
			callback(null, { users: users.map(mapBasicUser) });
		} catch (error) {
			console.error('[SearchUsers] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	GetUsersByIds: async (
		call: grpc.ServerUnaryCall<GetUsersByIdsGrpcRequest, GetUsersByIdsGrpcResponse>,
		callback: grpc.sendUnaryData<GetUsersByIdsGrpcResponse>,
	) => {
		try {
			const users = await getUsersByIds({ userIds: call.request.user_ids ?? [] });
			callback(null, { users: users.map(mapBasicUser) });
		} catch (error) {
			console.error('[GetUsersByIds] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	CheckUserExists: async (
		call: grpc.ServerUnaryCall<CheckUserExistsGrpcRequest, CheckUserExistsGrpcResponse>,
		callback: grpc.sendUnaryData<CheckUserExistsGrpcResponse>,
	) => {
		try {
			const result = await checkUserExists({ userId: call.request.user_id ?? '' });
			const response: CheckUserExistsGrpcResponse = {
				exists: result.exists,
			};

			if (result.user) {
				response.user = mapBasicUser(result.user);
			}

			callback(null, response);
		} catch (error) {
			console.error('[CheckUserExists] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	GetBasicInfo: async (
		call: grpc.ServerUnaryCall<GetBasicInfoGrpcRequest, GetBasicInfoGrpcResponse>,
		callback: grpc.sendUnaryData<GetBasicInfoGrpcResponse>,
	) => {
		try {
			const user = await getBasicInfo({ userId: call.request.user_id ?? '' });
			callback(null, { user: mapBasicUser(user) });
		} catch (error) {
			console.error('[GetBasicInfo] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},
};
