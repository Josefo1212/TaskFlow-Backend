import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { env } from '../config/env';

export interface RegisterGrpcRequest {
	name: string;
	email: string;
	password: string;
}

export interface AuthUserGrpcResponse {
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

interface AuthServiceClient extends grpc.Client {
	Register(
		request: RegisterGrpcRequest,
		callback: grpc.requestCallback<AuthUserGrpcResponse>,
	): void;
	Login(
		request: LoginGrpcRequest,
		callback: grpc.requestCallback<AuthUserGrpcResponse>,
	): void;
	Refresh(
		request: RefreshGrpcRequest,
		callback: grpc.requestCallback<RefreshGrpcResponse>,
	): void;
	Logout(
		request: LogoutGrpcRequest,
		callback: grpc.requestCallback<LogoutGrpcResponse>,
	): void;
}

interface LoadedAuthPackage {
	auth: {
		AuthService: grpc.ServiceClientConstructor;
	};
}

const protoPath = path.resolve(__dirname, '../../proto/auth.proto');

const packageDefinition = protoLoader.loadSync(protoPath, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const loadedProto = grpc.loadPackageDefinition(packageDefinition) as unknown as LoadedAuthPackage;

export const authClient = new loadedProto.auth.AuthService(
	env.AUTH_GRPC_URL,
	grpc.credentials.createInsecure(),
) as unknown as AuthServiceClient;