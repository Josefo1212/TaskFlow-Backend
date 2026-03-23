import * as grpc from '@grpc/grpc-js';
import { LoginResult } from '../services/auth.services';
export interface RegisterGrpcRequest {
    user: string;
    email: string;
    password: string;
}
export interface RegisterGrpcResponse {
    user_id: string;
    email: string;
    user: string;
    access_token: string;
    refresh_token: string;
    refresh_expires_at: string;
}
export interface LoginGrpcRequest {
    user: string;
    password: string;
}
export interface LoginGrpcResponse {
    user_id: string;
    email: string;
    user: string;
    access_token: string;
    refresh_token: string;
    refresh_expires_at: string;
}
export interface ForgotPasswordGrpcRequest {
    user: string;
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
type AuthGrpcResponse = {
    user_id: string;
    email: string;
    user: string;
    access_token: string;
    refresh_token: string;
    refresh_expires_at: string;
};
export declare function toGrpcServiceError(error: unknown): grpc.ServiceError;
export declare function extractMetadataValue(metadata: grpc.Metadata, key: string): string | null;
export declare function mapAuthResultToGrpcResponse(data: LoginResult): AuthGrpcResponse;
export declare const authController: grpc.UntypedServiceImplementation;
export {};
//# sourceMappingURL=auth.controller.d.ts.map