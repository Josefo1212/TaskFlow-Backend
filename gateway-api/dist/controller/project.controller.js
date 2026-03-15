"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectController = createProjectController;
exports.listProjectsController = listProjectsController;
exports.getProjectController = getProjectController;
exports.updateProjectController = updateProjectController;
exports.deleteProjectController = deleteProjectController;
exports.addProjectMemberController = addProjectMemberController;
exports.listProjectMembersController = listProjectMembersController;
exports.updateProjectMemberRoleController = updateProjectMemberRoleController;
exports.removeProjectMemberController = removeProjectMemberController;
const zod_1 = require("zod");
const project_service_1 = require("../services/project.service");
function requireAuthenticatedUserId(req) {
    return req.user?.sub ?? '';
}
function requireProjectId(req) {
    const { projectId } = req.params;
    return typeof projectId === 'string' ? projectId : '';
}
function requireUserIdParam(req) {
    const { userId } = req.params;
    return typeof userId === 'string' ? userId : '';
}
const createProjectSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'name is required'),
    description: zod_1.z.string().optional(),
});
const listProjectsSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().optional(),
    limit: zod_1.z.coerce.number().int().positive().optional(),
});
const updateProjectSchema = zod_1.z
    .object({
    name: zod_1.z.string().min(1).optional(),
    description: zod_1.z.string().optional(),
})
    .refine((data) => data.name !== undefined || data.description !== undefined, {
    message: 'name or description is required',
});
const addMemberSchema = zod_1.z.preprocess((input) => {
    if (!input || typeof input !== 'object')
        return input;
    const body = input;
    return {
        user_id: body.user_id ?? body.userId,
        role: body.role,
    };
}, zod_1.z.object({
    user_id: zod_1.z.string().min(1, 'user_id is required'),
    role: zod_1.z.string().optional(),
}));
const updateMemberRoleSchema = zod_1.z.object({
    role: zod_1.z.string().min(1, 'role is required'),
});
async function createProjectController(req, res) {
    const payload = createProjectSchema.parse(req.body ?? {});
    const requestPayload = {
        requester_id: requireAuthenticatedUserId(req),
        name: payload.name,
    };
    if (payload.description !== undefined) {
        requestPayload.description = payload.description;
    }
    const response = await (0, project_service_1.createProjectWithProjectService)(requestPayload);
    res.status(201).json(response);
}
async function listProjectsController(req, res) {
    const payload = listProjectsSchema.parse(req.query);
    const requestPayload = {
        requester_id: requireAuthenticatedUserId(req),
    };
    if (payload.page !== undefined) {
        requestPayload.page = payload.page;
    }
    if (payload.limit !== undefined) {
        requestPayload.limit = payload.limit;
    }
    const response = await (0, project_service_1.listProjectsWithProjectService)(requestPayload);
    res.status(200).json(response);
}
async function getProjectController(req, res) {
    const response = await (0, project_service_1.getProjectWithProjectService)({
        requester_id: requireAuthenticatedUserId(req),
        project_id: requireProjectId(req),
    });
    res.status(200).json(response);
}
async function updateProjectController(req, res) {
    const payload = updateProjectSchema.parse(req.body ?? {});
    const requestPayload = {
        requester_id: requireAuthenticatedUserId(req),
        project_id: requireProjectId(req),
    };
    if (payload.name !== undefined) {
        requestPayload.name = payload.name;
    }
    if (payload.description !== undefined) {
        requestPayload.description = payload.description;
    }
    const response = await (0, project_service_1.updateProjectWithProjectService)(requestPayload);
    res.status(200).json(response);
}
async function deleteProjectController(req, res) {
    const response = await (0, project_service_1.deleteProjectWithProjectService)({
        requester_id: requireAuthenticatedUserId(req),
        project_id: requireProjectId(req),
    });
    res.status(200).json(response);
}
async function addProjectMemberController(req, res) {
    const payload = addMemberSchema.parse(req.body ?? {});
    const requestPayload = {
        requester_id: requireAuthenticatedUserId(req),
        project_id: requireProjectId(req),
        user_id: payload.user_id,
    };
    if (payload.role !== undefined) {
        requestPayload.role = payload.role;
    }
    const response = await (0, project_service_1.addProjectMemberWithProjectService)(requestPayload);
    res.status(201).json(response);
}
async function listProjectMembersController(req, res) {
    const response = await (0, project_service_1.listProjectMembersWithProjectService)({
        requester_id: requireAuthenticatedUserId(req),
        project_id: requireProjectId(req),
    });
    res.status(200).json(response);
}
async function updateProjectMemberRoleController(req, res) {
    const payload = updateMemberRoleSchema.parse(req.body ?? {});
    const response = await (0, project_service_1.updateProjectMemberRoleWithProjectService)({
        requester_id: requireAuthenticatedUserId(req),
        project_id: requireProjectId(req),
        user_id: requireUserIdParam(req),
        role: payload.role,
    });
    res.status(200).json(response);
}
async function removeProjectMemberController(req, res) {
    const response = await (0, project_service_1.removeProjectMemberWithProjectService)({
        requester_id: requireAuthenticatedUserId(req),
        project_id: requireProjectId(req),
        user_id: requireUserIdParam(req),
    });
    res.status(200).json(response);
}
//# sourceMappingURL=project.controller.js.map