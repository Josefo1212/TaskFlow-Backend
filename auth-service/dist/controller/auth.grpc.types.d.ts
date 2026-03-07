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
//# sourceMappingURL=auth.grpc.types.d.ts.map