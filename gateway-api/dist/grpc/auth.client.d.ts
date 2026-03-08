import * as grpc from '@grpc/grpc-js';
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
    Register(request: RegisterGrpcRequest, callback: grpc.requestCallback<AuthUserGrpcResponse>): void;
    Login(request: LoginGrpcRequest, callback: grpc.requestCallback<AuthUserGrpcResponse>): void;
    Refresh(request: RefreshGrpcRequest, callback: grpc.requestCallback<RefreshGrpcResponse>): void;
    Logout(request: LogoutGrpcRequest, callback: grpc.requestCallback<LogoutGrpcResponse>): void;
}
export declare const authClient: AuthServiceClient;
export {};
//# sourceMappingURL=auth.client.d.ts.map