import { AuthUserGrpcResponse, ForgotPasswordGrpcRequest, ForgotPasswordGrpcResponse, LoginGrpcRequest, LogoutGrpcRequest, LogoutGrpcResponse, RefreshGrpcRequest, RefreshGrpcResponse, RegisterGrpcRequest, ResetPasswordGrpcRequest, ResetPasswordGrpcResponse } from '../grpc/auth.client';
export declare function registerWithAuthService(payload: RegisterGrpcRequest): Promise<AuthUserGrpcResponse>;
export declare function loginWithAuthService(payload: LoginGrpcRequest): Promise<AuthUserGrpcResponse>;
export declare function refreshWithAuthService(payload: RefreshGrpcRequest): Promise<RefreshGrpcResponse>;
export declare function logoutWithAuthService(payload: LogoutGrpcRequest): Promise<LogoutGrpcResponse>;
export declare function forgotPasswordWithAuthService(payload: ForgotPasswordGrpcRequest): Promise<ForgotPasswordGrpcResponse>;
export declare function resetPasswordWithAuthService(payload: ResetPasswordGrpcRequest): Promise<ResetPasswordGrpcResponse>;
//# sourceMappingURL=auth.service.d.ts.map