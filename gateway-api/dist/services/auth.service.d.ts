import { AuthUserGrpcResponse, LoginGrpcRequest, LogoutGrpcRequest, LogoutGrpcResponse, RefreshGrpcRequest, RefreshGrpcResponse, RegisterGrpcRequest } from '../grpc/auth.client';
export declare function registerWithAuthService(payload: RegisterGrpcRequest): Promise<AuthUserGrpcResponse>;
export declare function loginWithAuthService(payload: LoginGrpcRequest): Promise<AuthUserGrpcResponse>;
export declare function refreshWithAuthService(payload: RefreshGrpcRequest): Promise<RefreshGrpcResponse>;
export declare function logoutWithAuthService(payload: LogoutGrpcRequest): Promise<LogoutGrpcResponse>;
//# sourceMappingURL=auth.service.d.ts.map