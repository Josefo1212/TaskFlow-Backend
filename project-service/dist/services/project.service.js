"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = createProject;
exports.listProjects = listProjects;
exports.getProject = getProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
exports.addProjectMember = addProjectMember;
exports.listProjectMembers = listProjectMembers;
exports.updateProjectMemberRole = updateProjectMemberRole;
exports.removeProjectMember = removeProjectMember;
const project_queries_1 = require("../queries/project.queries");
const project_errors_1 = require("../utils/project-errors");
const ALLOWED_ROLES = ['admin', 'member', 'viewer'];
function formatTimestamp(value) {
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString();
}
function mapProjectRow(row) {
    const project = {
        id: row.id,
        name: row.name,
        createdAt: formatTimestamp(row.created_at),
        updatedAt: formatTimestamp(row.updated_at),
    };
    if (row.owner_id) {
        project.ownerId = row.owner_id;
    }
    if (row.description) {
        project.description = row.description;
    }
    return project;
}
function mapProjectMemberRow(row) {
    return {
        id: row.id,
        projectId: row.project_id,
        userId: row.user_id,
        role: row.role,
        createdAt: formatTimestamp(row.created_at),
    };
}
function normalizeRequiredId(value, field) {
    const normalized = value.trim();
    if (!normalized) {
        throw new project_errors_1.ProjectServiceError(`${field} is required`, 400);
    }
    return normalized;
}
function normalizeRequiredName(value) {
    const normalized = value.trim();
    if (!normalized) {
        throw new project_errors_1.ProjectServiceError('name is required', 400);
    }
    if (normalized.length > 255) {
        throw new project_errors_1.ProjectServiceError('name is too long', 400);
    }
    return normalized;
}
function normalizeOptionalText(value) {
    if (value === undefined) {
        return undefined;
    }
    const trimmed = value.trim();
    return trimmed ? trimmed : undefined;
}
function normalizeRole(value) {
    const normalized = value.trim();
    if (!ALLOWED_ROLES.includes(normalized)) {
        throw new project_errors_1.ProjectServiceError('Invalid role', 400);
    }
    return normalized;
}
function normalizePage(value) {
    if (!value || value < 1) {
        return 1;
    }
    return Math.floor(value);
}
function normalizeLimit(value, max, fallback) {
    if (!value || value < 1) {
        return fallback;
    }
    return Math.min(Math.floor(value), max);
}
function canReadProject(access, requesterId) {
    if (!access) {
        return false;
    }
    if (access.owner_id === requesterId) {
        return true;
    }
    return access.role !== null;
}
function canManageMembers(access, requesterId) {
    if (!access) {
        return false;
    }
    if (access.owner_id === requesterId) {
        return true;
    }
    return access.role === 'admin';
}
function canUpdateProject(access, requesterId) {
    return canManageMembers(access, requesterId);
}
function canDeleteProject(access, requesterId) {
    if (!access) {
        return false;
    }
    return access.owner_id === requesterId;
}
async function createProject(input) {
    const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
    const name = normalizeRequiredName(input.name);
    const description = normalizeOptionalText(input.description);
    const projectRow = await (0, project_queries_1.createProjectRow)({ ownerId: requesterId, name, description: description ?? null });
    // Ensure the owner is also a member with admin role (makes list/permissions consistent)
    await (0, project_queries_1.addProjectMemberRow)({ projectId: projectRow.id, userId: requesterId, role: 'admin' });
    return mapProjectRow(projectRow);
}
async function listProjects(input) {
    const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
    const page = normalizePage(input.page);
    const limit = normalizeLimit(input.limit, 200, 20);
    const offset = (page - 1) * limit;
    const [rows, total] = await Promise.all([
        (0, project_queries_1.listProjectsForUserRows)(requesterId, limit, offset),
        (0, project_queries_1.countProjectsForUser)(requesterId),
    ]);
    return {
        projects: rows.map(mapProjectRow),
        total,
        page,
        limit,
    };
}
async function getProject(input) {
    const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
    const projectId = normalizeRequiredId(input.projectId, 'project_id');
    const project = await (0, project_queries_1.getProjectByIdForUserRow)(projectId, requesterId);
    if (!project) {
        throw new project_errors_1.ProjectServiceError('Project not found', 404);
    }
    return mapProjectRow(project);
}
async function updateProject(input) {
    const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
    const projectId = normalizeRequiredId(input.projectId, 'project_id');
    const access = await (0, project_queries_1.getProjectAccessRow)(projectId, requesterId);
    if (!access || !canReadProject(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Project not found', 404);
    }
    if (!canUpdateProject(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Forbidden', 403);
    }
    const name = input.name !== undefined ? normalizeRequiredName(input.name) : undefined;
    const description = normalizeOptionalText(input.description);
    if (name === undefined && description === undefined) {
        throw new project_errors_1.ProjectServiceError('No fields to update', 400);
    }
    const updated = await (0, project_queries_1.updateProjectRow)(projectId, {
        name: name ?? null,
        description: description ?? null,
    });
    return mapProjectRow(updated);
}
async function deleteProject(input) {
    const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
    const projectId = normalizeRequiredId(input.projectId, 'project_id');
    const access = await (0, project_queries_1.getProjectAccessRow)(projectId, requesterId);
    if (!access || !canReadProject(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Project not found', 404);
    }
    if (!canDeleteProject(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Forbidden', 403);
    }
    const deleted = await (0, project_queries_1.deleteProjectRow)(projectId);
    if (!deleted) {
        throw new project_errors_1.ProjectServiceError('Project not found', 404);
    }
    return { deleted: true };
}
async function addProjectMember(input) {
    const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
    const projectId = normalizeRequiredId(input.projectId, 'project_id');
    const userId = normalizeRequiredId(input.userId, 'user_id');
    const role = input.role ? normalizeRole(input.role) : 'member';
    const access = await (0, project_queries_1.getProjectAccessRow)(projectId, requesterId);
    if (!access || !canReadProject(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Project not found', 404);
    }
    if (!canManageMembers(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Forbidden', 403);
    }
    if (access.owner_id === userId) {
        throw new project_errors_1.ProjectServiceError('Owner is already a project member', 409);
    }
    const inserted = await (0, project_queries_1.addProjectMemberRow)({ projectId, userId, role });
    if (!inserted) {
        throw new project_errors_1.ProjectServiceError('Member already exists', 409);
    }
    return mapProjectMemberRow(inserted);
}
async function listProjectMembers(input) {
    const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
    const projectId = normalizeRequiredId(input.projectId, 'project_id');
    const access = await (0, project_queries_1.getProjectAccessRow)(projectId, requesterId);
    if (!access || !canReadProject(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Project not found', 404);
    }
    const members = await (0, project_queries_1.listProjectMembersRows)(projectId);
    return members.map(mapProjectMemberRow);
}
async function updateProjectMemberRole(input) {
    const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
    const projectId = normalizeRequiredId(input.projectId, 'project_id');
    const userId = normalizeRequiredId(input.userId, 'user_id');
    const role = normalizeRole(input.role);
    const access = await (0, project_queries_1.getProjectAccessRow)(projectId, requesterId);
    if (!access || !canReadProject(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Project not found', 404);
    }
    if (!canManageMembers(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Forbidden', 403);
    }
    if (access.owner_id === userId) {
        throw new project_errors_1.ProjectServiceError('Cannot change owner role', 400);
    }
    const updated = await (0, project_queries_1.updateProjectMemberRoleRow)({ projectId, userId, role });
    if (!updated) {
        throw new project_errors_1.ProjectServiceError('Member not found', 404);
    }
    return mapProjectMemberRow(updated);
}
async function removeProjectMember(input) {
    const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
    const projectId = normalizeRequiredId(input.projectId, 'project_id');
    const userId = normalizeRequiredId(input.userId, 'user_id');
    const access = await (0, project_queries_1.getProjectAccessRow)(projectId, requesterId);
    if (!access || !canReadProject(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Project not found', 404);
    }
    if (!canManageMembers(access, requesterId)) {
        throw new project_errors_1.ProjectServiceError('Forbidden', 403);
    }
    if (access.owner_id === userId) {
        throw new project_errors_1.ProjectServiceError('Cannot remove owner from project', 400);
    }
    const removed = await (0, project_queries_1.removeProjectMemberRow)(projectId, userId);
    if (!removed) {
        throw new project_errors_1.ProjectServiceError('Member not found', 404);
    }
    return { removed: true };
}
//# sourceMappingURL=project.service.js.map