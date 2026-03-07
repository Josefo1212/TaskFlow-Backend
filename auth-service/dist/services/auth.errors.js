"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceError = void 0;
class AuthServiceError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.AuthServiceError = AuthServiceError;
//# sourceMappingURL=auth.errors.js.map