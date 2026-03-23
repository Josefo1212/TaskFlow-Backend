"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayError = void 0;
exports.mapGrpcErrorToHttp = mapGrpcErrorToHttp;
const grpc = __importStar(require("@grpc/grpc-js"));
class GatewayError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'GatewayError';
    }
}
exports.GatewayError = GatewayError;
function mapGrpcErrorToHttp(error) {
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
//# sourceMappingURL=grpc-error-mapper.js.map