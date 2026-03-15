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
exports.projectController = void 0;
const grpc = __importStar(require("@grpc/grpc-js"));
const project_service_1 = require("../services/project.service");
const project_errors_1 = require("../utils/project-errors");
function mapHttpErrorToGrpcCode(statusCode) {
    if (statusCode === 400)
        return grpc.status.INVALID_ARGUMENT;
    if (statusCode === 401)
        return grpc.status.UNAUTHENTICATED;
    if (statusCode === 403)
        return grpc.status.PERMISSION_DENIED;
    if (statusCode === 404)
        return grpc.status.NOT_FOUND;
    if (statusCode === 409)
        return grpc.status.ALREADY_EXISTS;
    return grpc.status.INTERNAL;
}
function toGrpcServiceError(error) {
    if (error instanceof project_errors_1.ProjectServiceError) {
        return {
            code: mapHttpErrorToGrpcCode(error.statusCode),
            message: error.message,
            name: 'ProjectServiceError',
        };
    }
    return {
        code: grpc.status.INTERNAL,
        message: 'Internal server error',
        name: 'InternalError',
    };
}
function mapProject(project) {
    return {
        id: project.id,
        owner_id: project.ownerId ?? '',
        name: project.name,
        description: project.description ?? '',
        created_at: project.createdAt,
        updated_at: project.updatedAt,
    };
}
function mapMember(member) {
    return {
        id: member.id,
        project_id: member.projectId,
        user_id: member.userId,
        role: member.role,
        created_at: member.createdAt,
    };
}
exports.projectController = {
    CreateProject: async (call, callback) => {
        try {
            const requestPayload = {
                requesterId: call.request.requester_id ?? '',
                name: call.request.name ?? '',
            };
            if (typeof call.request.description === 'string') {
                requestPayload.description = call.request.description;
            }
            const project = await (0, project_service_1.createProject)(requestPayload);
            callback(null, { project: mapProject(project) });
        }
        catch (error) {
            console.error('[CreateProject] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    ListProjects: async (call, callback) => {
        try {
            const requestPayload = {
                requesterId: call.request.requester_id ?? '',
            };
            if (typeof call.request.page === 'number') {
                requestPayload.page = call.request.page;
            }
            if (typeof call.request.limit === 'number') {
                requestPayload.limit = call.request.limit;
            }
            const result = await (0, project_service_1.listProjects)(requestPayload);
            callback(null, {
                projects: result.projects.map(mapProject),
                total: result.total,
                page: result.page,
                limit: result.limit,
            });
        }
        catch (error) {
            console.error('[ListProjects] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    GetProject: async (call, callback) => {
        try {
            const project = await (0, project_service_1.getProject)({
                requesterId: call.request.requester_id ?? '',
                projectId: call.request.project_id ?? '',
            });
            callback(null, { project: mapProject(project) });
        }
        catch (error) {
            console.error('[GetProject] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    UpdateProject: async (call, callback) => {
        try {
            const requestPayload = {
                requesterId: call.request.requester_id ?? '',
                projectId: call.request.project_id ?? '',
            };
            if (typeof call.request.name === 'string') {
                requestPayload.name = call.request.name;
            }
            if (typeof call.request.description === 'string') {
                requestPayload.description = call.request.description;
            }
            const project = await (0, project_service_1.updateProject)(requestPayload);
            callback(null, { project: mapProject(project) });
        }
        catch (error) {
            console.error('[UpdateProject] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    DeleteProject: async (call, callback) => {
        try {
            const result = await (0, project_service_1.deleteProject)({
                requesterId: call.request.requester_id ?? '',
                projectId: call.request.project_id ?? '',
            });
            callback(null, { deleted: result.deleted });
        }
        catch (error) {
            console.error('[DeleteProject] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    AddProjectMember: async (call, callback) => {
        try {
            const requestPayload = {
                requesterId: call.request.requester_id ?? '',
                projectId: call.request.project_id ?? '',
                userId: call.request.user_id ?? '',
            };
            if (typeof call.request.role === 'string') {
                requestPayload.role = call.request.role;
            }
            const member = await (0, project_service_1.addProjectMember)(requestPayload);
            callback(null, { member: mapMember(member) });
        }
        catch (error) {
            console.error('[AddProjectMember] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    ListProjectMembers: async (call, callback) => {
        try {
            const members = await (0, project_service_1.listProjectMembers)({
                requesterId: call.request.requester_id ?? '',
                projectId: call.request.project_id ?? '',
            });
            callback(null, { members: members.map(mapMember) });
        }
        catch (error) {
            console.error('[ListProjectMembers] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    UpdateProjectMemberRole: async (call, callback) => {
        try {
            const member = await (0, project_service_1.updateProjectMemberRole)({
                requesterId: call.request.requester_id ?? '',
                projectId: call.request.project_id ?? '',
                userId: call.request.user_id ?? '',
                role: call.request.role ?? '',
            });
            callback(null, { member: mapMember(member) });
        }
        catch (error) {
            console.error('[UpdateProjectMemberRole] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
    RemoveProjectMember: async (call, callback) => {
        try {
            const result = await (0, project_service_1.removeProjectMember)({
                requesterId: call.request.requester_id ?? '',
                projectId: call.request.project_id ?? '',
                userId: call.request.user_id ?? '',
            });
            callback(null, { removed: result.removed });
        }
        catch (error) {
            console.error('[RemoveProjectMember] Internal error:', error);
            callback(toGrpcServiceError(error));
        }
    },
};
//# sourceMappingURL=project.controller.js.map