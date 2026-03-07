import * as grpc from '@grpc/grpc-js';
import { LoginResult } from '../services/auth.types';
import { LoginGrpcResponse } from './auth.grpc.types';
export declare function toGrpcServiceError(error: unknown): grpc.ServiceError;
export declare function extractMetadataValue(metadata: grpc.Metadata, key: string): string | null;
export declare function mapLoginResultToGrpcResponse(data: LoginResult): LoginGrpcResponse;
//# sourceMappingURL=auth.grpc.mapper.d.ts.map