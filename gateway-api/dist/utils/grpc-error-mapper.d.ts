import * as grpc from '@grpc/grpc-js';
export declare class GatewayError extends Error {
    readonly statusCode: number;
    constructor(message: string, statusCode: number);
}
export declare function mapGrpcErrorToHttp(error: grpc.ServiceError): GatewayError;
//# sourceMappingURL=grpc-error-mapper.d.ts.map