"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const zod_1 = require("zod");
const env_1 = require("./config/env");
const auth_routes_1 = require("./routes/auth.routes");
const projects_routes_1 = require("./routes/projects.routes");
const tags_routes_1 = require("./routes/tags.routes");
const user_routes_1 = require("./routes/user.routes");
const tasks_routes_1 = require("./routes/tasks.routes");
const grpc_error_mapper_1 = require("./utils/grpc-error-mapper");
function getIssuePath(issue) {
    const path = issue.path.map(String).join('.');
    return path || 'payload';
}
function formatZodErrorEs(error) {
    const issue = error.issues[0];
    if (!issue) {
        return 'Datos inválidos.';
    }
    const field = getIssuePath(issue);
    if (issue.code === 'too_small' && 'minimum' in issue && typeof issue.minimum === 'number') {
        const unit = issue.minimum === 1 ? 'carácter' : 'caracteres';
        return `El campo "${field}" debe tener al menos ${issue.minimum} ${unit}.`;
    }
    if (issue.code === 'too_big' && 'maximum' in issue && typeof issue.maximum === 'number') {
        const unit = issue.maximum === 1 ? 'carácter' : 'caracteres';
        return `El campo "${field}" debe tener como máximo ${issue.maximum} ${unit}.`;
    }
    if (issue.code === 'invalid_format' && 'format' in issue && issue.format === 'email') {
        return `El campo "${field}" debe ser un correo válido.`;
    }
    if (issue.code === 'invalid_type') {
        return `El campo "${field}" tiene un tipo inválido.`;
    }
    if (issue.code === 'custom') {
        return `Datos inválidos en "${field}".`;
    }
    return 'Datos inválidos.';
}
function defaultSpanishMessageForStatus(statusCode) {
    switch (statusCode) {
        case 400:
            return 'Solicitud inválida.';
        case 401:
            return 'No autorizado.';
        case 403:
            return 'Prohibido.';
        case 404:
            return 'No encontrado.';
        case 409:
            return 'Conflicto.';
        case 429:
            return 'Demasiadas solicitudes. Intenta más tarde.';
        case 502:
            return 'Error del servidor.';
        case 503:
            return 'Servicio no disponible. Intenta más tarde.';
        case 504:
            return 'Tiempo de espera agotado. Intenta más tarde.';
        default:
            return 'Error interno del servidor.';
    }
}
function createApp() {
    const app = (0, express_1.default)();
    app.set('trust proxy', 1);
    const allowedCorsOrigins = (env_1.env.CORS_ORIGIN ?? '')
        .split(',')
        .map((origin) => origin.trim())
        .filter(Boolean);
    app.use((0, helmet_1.default)());
    const corsOptions = {
        credentials: true,
        origin: (origin, callback) => {
            if (!origin || allowedCorsOrigins.length === 0) {
                callback(null, true);
                return;
            }
            if (allowedCorsOrigins.includes(origin)) {
                callback(null, true);
                return;
            }
            const error = new Error('Origen no permitido por CORS');
            error.statusCode = 403;
            callback(error);
        },
    };
    app.use((0, cors_1.default)(corsOptions));
    // Express 5 + path-to-regexp v8 no acepta '*' como ruta. Regex evita ese parse.
    app.options(/.*/, (0, cors_1.default)(corsOptions));
    app.use((0, morgan_1.default)('dev'));
    app.use(express_1.default.json());
    app.use((0, cookie_parser_1.default)());
    app.get('/health', (_req, res) => {
        res.status(200).json({
            service: 'gateway-api',
            status: 'ok',
        });
    });
    app.use('/auth', auth_routes_1.authRoutes);
    app.use('/projects', projects_routes_1.projectsRoutes);
    app.use('/users', user_routes_1.userRoutes);
    app.use('/tasks', tasks_routes_1.tasksRoutes);
    app.use('/tags', tags_routes_1.tagsRoutes);
    app.use((req, res) => {
        res.status(404).json({
            message: `Ruta ${req.method} ${req.originalUrl} no encontrada`,
        });
    });
    app.use((error, _req, res, _next) => {
        if (error instanceof zod_1.ZodError) {
            res.status(400).json({ message: formatZodErrorEs(error) });
            return;
        }
        const statusCode = typeof error === 'object' &&
            error !== null &&
            'statusCode' in error &&
            typeof error.statusCode === 'number'
            ? error.statusCode
            : 500;
        const providedMessage = typeof error === 'object' &&
            error !== null &&
            'message' in error &&
            typeof error.message === 'string'
            ? error.message
            : '';
        const message = error instanceof grpc_error_mapper_1.GatewayError
            ? providedMessage || defaultSpanishMessageForStatus(statusCode)
            : defaultSpanishMessageForStatus(statusCode);
        res.status(statusCode).json({ message });
    });
    return app;
}
//# sourceMappingURL=app.js.map