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
const env_1 = require("./config/env");
const auth_routes_1 = require("./routes/auth.routes");
const user_routes_1 = require("./routes/user.routes");
function createApp() {
    const app = (0, express_1.default)();
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)({
        credentials: true,
        origin: (origin, callback) => {
            if (!origin || !env_1.env.CORS_ORIGIN || origin === env_1.env.CORS_ORIGIN) {
                callback(null, true);
                return;
            }
            callback(new Error('Origin not allowed by CORS'));
        },
    }));
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
    app.use('/users', user_routes_1.userRoutes);
    app.use((req, res) => {
        res.status(404).json({
            message: `Route ${req.method} ${req.originalUrl} not found`,
        });
    });
    app.use((error, _req, res, _next) => {
        const statusCode = typeof error === 'object' &&
            error !== null &&
            'statusCode' in error &&
            typeof error.statusCode === 'number'
            ? error.statusCode
            : 500;
        const message = typeof error === 'object' &&
            error !== null &&
            'message' in error &&
            typeof error.message === 'string'
            ? error.message
            : 'Internal server error';
        res.status(statusCode).json({ message });
    });
    return app;
}
//# sourceMappingURL=app.js.map