import * as grpc from '@grpc/grpc-js';
import { login, logout } from '../services/auth.services';

export const authController: grpc.UntypedServiceImplementation = {
	Login: async (
		call: grpc.ServerUnaryCall<LoginGrpcRequest, LoginGrpcResponse>,
		callback: grpc.sendUnaryData<LoginGrpcResponse>,
	) => {
		try {
			const reqIp = call.request.ip || extractMetadataValue(call.metadata, 'x-forwarded-for');
			const reqUserAgent =
				call.request.user_agent || extractMetadataValue(call.metadata, 'user-agent');

			const data = await login({
				email: call.request.email ?? '',
				password: call.request.password ?? '',
				ip: reqIp,
				userAgent: reqUserAgent,
			});

			callback(null, mapLoginResultToGrpcResponse(data));
		} catch (error) {
			callback(toGrpcServiceError(error));
		}
	},

	Logout: async (
		call: grpc.ServerUnaryCall<LogoutGrpcRequest, LogoutGrpcResponse>,
		callback: grpc.sendUnaryData<LogoutGrpcResponse>,
	) => {
		try {
			const reqIp = call.request.ip || extractMetadataValue(call.metadata, 'x-forwarded-for');

			const result = await logout({
				refreshToken: call.request.refresh_token ?? '',
				ip: reqIp,
			});

			callback(null, result);
		} catch (error) {
			callback(toGrpcServiceError(error));
		}
	},
};
// --- Tipos gRPC ---
export interface LoginGrpcRequest {
	email: string;
	password: string;
	ip?: string;
	user_agent?: string;
}

export interface LoginGrpcResponse {
	user_id: string;
	email: string;
	name: string;
	access_token: string;
	refresh_token: string;
	refresh_expires_at: string;
	session_id: string;
}

export interface LogoutGrpcRequest {
	refresh_token: string;
	ip?: string;
}

export interface LogoutGrpcResponse {
	message: string;
}

// --- Mapeadores gRPC ---
import { AuthServiceError, LoginResult } from '../services/auth.services';

function mapHttpErrorToGrpcCode(statusCode: number): grpc.status {
	if (statusCode === 400) {
		return grpc.status.INVALID_ARGUMENT;
	}
	if (statusCode === 401) {
		return grpc.status.UNAUTHENTICATED;
	}
	return grpc.status.INTERNAL;
}

export function toGrpcServiceError(error: unknown): grpc.ServiceError {
	if (error instanceof AuthServiceError) {
		return {
			code: mapHttpErrorToGrpcCode(error.statusCode),
			message: error.message,
			name: 'AuthServiceError',
		} as grpc.ServiceError;
	}
	return {
		code: grpc.status.INTERNAL,
		message: 'Internal server error',
		name: 'InternalError',
	} as grpc.ServiceError;
}

export function extractMetadataValue(metadata: grpc.Metadata, key: string): string | null {
	const values = metadata.get(key);
	const value = values[0];
	if (typeof value === 'string') {
		return value;
	}
	return null;
}

export function mapLoginResultToGrpcResponse(data: LoginResult): LoginGrpcResponse {
	return {
		user_id: data.user.id,
		email: data.user.email,
		name: data.user.name,
		access_token: data.accessToken,
		refresh_token: data.refreshToken,
		refresh_expires_at: data.refreshExpiresAt.toISOString(),
		session_id: data.sessionId,
	};
}
