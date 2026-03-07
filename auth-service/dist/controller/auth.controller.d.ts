import * as grpc from '@grpc/grpc-js';
import { LoginResult } from '../services/auth.services';
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
export declare function toGrpcServiceError(error: unknown): grpc.ServiceError;
export declare function extractMetadataValue(metadata: grpc.Metadata, key: string): string | null;
export declare function mapAuthResultToGrpcResponse(data: LoginResult): LoginGrpcResponse;
export declare const authController: grpc.UntypedServiceImplementation;
//# sourceMappingURL=auth.controller.d.ts.map