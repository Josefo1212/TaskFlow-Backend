import * as grpc from '@grpc/grpc-js';
import {
	LoginResult,
	forgotPassword,
	login,
	refresh,
	register,
	resetPassword,
	logout,
} from '../services/auth.services';
import { AuthServiceError } from '../utils/auth-errors';

// --- Tipos gRPC ---
export interface RegisterGrpcRequest {
	name: string;
	email: string;
	password: string;
}

export interface RegisterGrpcResponse {
	user_id: string;
	email: string;
	name: string;
	access_token: string;
	refresh_token: string;
	refresh_expires_at: string;
}

export interface LoginGrpcRequest {
	name: string;
	password: string;
}

export interface LoginGrpcResponse {
	user_id: string;
	email: string;
	name: string;
	access_token: string;
	refresh_token: string;
	refresh_expires_at: string;
}

export interface ForgotPasswordGrpcRequest {
	name: string;
}

export interface ForgotPasswordGrpcResponse {
	token: string;
}

export interface ResetPasswordGrpcRequest {
	token: string;
	password: string;
}

export interface ResetPasswordGrpcResponse {
	message: string;
}

export interface RefreshGrpcRequest {
	refresh_token: string;
}

export interface RefreshGrpcResponse {
	access_token: string;
}

export interface LogoutGrpcRequest {
	refresh_token: string;
}

export interface LogoutGrpcResponse {
	message: string;
}

// --- Mapeadores gRPC ---
function mapHttpErrorToGrpcCode(statusCode: number): grpc.status {
	if (statusCode === 400) {
		return grpc.status.INVALID_ARGUMENT;
	}

	if (statusCode === 401) {
		return grpc.status.UNAUTHENTICATED;
	}

	if (statusCode === 409) {
		return grpc.status.ALREADY_EXISTS;
	}

	if (statusCode === 404) {
		return grpc.status.NOT_FOUND;
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


export function mapAuthResultToGrpcResponse(data: LoginResult): LoginGrpcResponse {
	return {
		user_id: data.user.id,
		email: data.user.email,
		name: data.user.name,
		access_token: data.accessToken,
		refresh_token: data.refreshToken,
		refresh_expires_at: data.refreshExpiresAt.toISOString(),
	};
}

export const authController: grpc.UntypedServiceImplementation = {
	Register: async (
		call: grpc.ServerUnaryCall<RegisterGrpcRequest, RegisterGrpcResponse>,
		callback: grpc.sendUnaryData<RegisterGrpcResponse>
	) => {
		try {
			const data = await register({
				name: call.request.name ?? '',
				email: call.request.email ?? '',
				password: call.request.password ?? '',
			});
			console.log(`[Register] Usuario registrado: ${data.user.name}`);
			callback(null, mapAuthResultToGrpcResponse(data));
		} catch (error) {
			console.error('[Register] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	Login: async (
		call: grpc.ServerUnaryCall<LoginGrpcRequest, LoginGrpcResponse>,
		callback: grpc.sendUnaryData<LoginGrpcResponse>,
	) => {
		try {
			const data = await login({
				name: call.request.name ?? '',
				password: call.request.password ?? '',
			});
			console.log(`[Login] Usuario autenticado: ${data.user.name}`);
			callback(null, mapAuthResultToGrpcResponse(data));
		} catch (error) {
			console.error('[Login] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	ForgotPassword: async (
		call: grpc.ServerUnaryCall<ForgotPasswordGrpcRequest, ForgotPasswordGrpcResponse>,
		callback: grpc.sendUnaryData<ForgotPasswordGrpcResponse>,
	) => {
		try {
			const data = await forgotPassword({
				name: call.request.name ?? '',
			});
			console.log('[ForgotPassword] Token generado');
			callback(null, { token: data.token });
		} catch (error) {
			console.error('[ForgotPassword] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	ResetPassword: async (
		call: grpc.ServerUnaryCall<ResetPasswordGrpcRequest, ResetPasswordGrpcResponse>,
		callback: grpc.sendUnaryData<ResetPasswordGrpcResponse>,
	) => {
		try {
			const data = await resetPassword({
				token: call.request.token ?? '',
				password: call.request.password ?? '',
			});
			console.log('[ResetPassword] Password actualizada');
			callback(null, { message: data.message });
		} catch (error) {
			console.error('[ResetPassword] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	Refresh: async (
		call: grpc.ServerUnaryCall<RefreshGrpcRequest, RefreshGrpcResponse>,
		callback: grpc.sendUnaryData<RefreshGrpcResponse>,
	) => {
		try {
			const data = await refresh({
				refreshToken: call.request.refresh_token ?? '',
			});

			console.log('[Refresh] Access token renovado');
			callback(null, { access_token: data.accessToken });
		} catch (error) {
			console.error('[Refresh] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	Logout: async (
		call: grpc.ServerUnaryCall<LogoutGrpcRequest, LogoutGrpcResponse>,
		callback: grpc.sendUnaryData<LogoutGrpcResponse>,
	) => {
		try {
			const result = await logout({
				refreshToken: call.request.refresh_token ?? '',
			});

			console.log('[Logout] Refresh token invalidado');
			callback(null, result);
		} catch (error) {
 			console.error('[Logout] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},
};
