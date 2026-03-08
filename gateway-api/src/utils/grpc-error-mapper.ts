import * as grpc from '@grpc/grpc-js';

export class GatewayError extends Error {
	constructor(
		message: string,
		public readonly statusCode: number,
	) {
		super(message);
		this.name = 'GatewayError';
	}
}

export function mapGrpcErrorToHttp(error: grpc.ServiceError): GatewayError {
	switch (error.code) {
		case grpc.status.INVALID_ARGUMENT:
			return new GatewayError(error.message || 'Invalid request', 400);
		case grpc.status.UNAUTHENTICATED:
			return new GatewayError(error.message || 'Unauthorized', 401);
		case grpc.status.PERMISSION_DENIED:
			return new GatewayError(error.message || 'Forbidden', 403);
		case grpc.status.NOT_FOUND:
			return new GatewayError(error.message || 'Resource not found', 404);
		case grpc.status.ALREADY_EXISTS:
			return new GatewayError(error.message || 'Resource already exists', 409);
		default:
			return new GatewayError(error.message || 'Internal server error', 500);
	}
}