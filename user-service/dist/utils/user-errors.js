"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceError = void 0;
class UserServiceError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'UserServiceError';
    }
}
exports.UserServiceError = UserServiceError;
//# sourceMappingURL=user-errors.js.map