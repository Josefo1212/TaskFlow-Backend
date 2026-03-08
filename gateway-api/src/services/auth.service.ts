import * as grpc from '@grpc/grpc-js';
import {
	authClient,
	AuthUserGrpcResponse,
	LoginGrpcRequest,
	LogoutGrpcRequest,
	LogoutGrpcResponse,
	RefreshGrpcRequest,
	RefreshGrpcResponse,
	RegisterGrpcRequest,
} from '../grpc/auth.client';
import { mapGrpcErrorToHttp } from '../utils/grpc-error-mapper';

function promisifyUnaryCall<RequestType, ResponseType>(
	method: (request: RequestType, callback: grpc.requestCallback<ResponseType>) => void,
	request: RequestType,
) {
	return new Promise<ResponseType>((resolve, reject) => {
		method.call(authClient, request, (error, response) => {
			if (error) {
				reject(mapGrpcErrorToHttp(error));
				return;
			}

			if (!response) {
				reject(new Error('Empty response from auth-service'));
				return;
			}

			resolve(response);
		});
	});
}

export function registerWithAuthService(payload: RegisterGrpcRequest): Promise<AuthUserGrpcResponse> {
	return promisifyUnaryCall(authClient.Register, payload);
}

export function loginWithAuthService(payload: LoginGrpcRequest): Promise<AuthUserGrpcResponse> {
	return promisifyUnaryCall(authClient.Login, payload);
}

export function refreshWithAuthService(payload: RefreshGrpcRequest): Promise<RefreshGrpcResponse> {
	return promisifyUnaryCall(authClient.Refresh, payload);
}

export function logoutWithAuthService(payload: LogoutGrpcRequest): Promise<LogoutGrpcResponse> {
	return promisifyUnaryCall(authClient.Logout, payload);
}