"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServiceError = void 0;
class ProjectServiceError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ProjectServiceError';
    }
}
exports.ProjectServiceError = ProjectServiceError;
//# sourceMappingURL=project-errors.js.map