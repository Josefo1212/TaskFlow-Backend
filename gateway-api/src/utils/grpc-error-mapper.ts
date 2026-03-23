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
			return new GatewayError('Solicitud inválida.', 400);
		case grpc.status.FAILED_PRECONDITION:
			return new GatewayError('La solicitud no cumple las condiciones requeridas.', 400);
		case grpc.status.UNAUTHENTICATED:
			return new GatewayError('No autorizado.', 401);
		case grpc.status.PERMISSION_DENIED:
			return new GatewayError('Prohibido.', 403);
		case grpc.status.NOT_FOUND:
			return new GatewayError('Recurso no encontrado.', 404);
		case grpc.status.ALREADY_EXISTS:
			return new GatewayError('El recurso ya existe.', 409);
		case grpc.status.ABORTED:
			return new GatewayError('Conflicto. Intenta de nuevo.', 409);
		case grpc.status.RESOURCE_EXHAUSTED:
			return new GatewayError('Demasiadas solicitudes. Intenta más tarde.', 429);
		case grpc.status.UNAVAILABLE:
			return new GatewayError('Servicio no disponible. Intenta más tarde.', 503);
		case grpc.status.DEADLINE_EXCEEDED:
			return new GatewayError('Tiempo de espera agotado. Intenta más tarde.', 504);
		default:
			return new GatewayError('Error del servidor.', 502);
	}
}