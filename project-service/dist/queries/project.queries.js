"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectRow = createProjectRow;
exports.getProjectAccessRow = getProjectAccessRow;
exports.getProjectByIdForUserRow = getProjectByIdForUserRow;
exports.listProjectsForUserRows = listProjectsForUserRows;
exports.countProjectsForUser = countProjectsForUser;
exports.updateProjectRow = updateProjectRow;
exports.deleteProjectRow = deleteProjectRow;
exports.addProjectMemberRow = addProjectMemberRow;
exports.listProjectMembersRows = listProjectMembersRows;
exports.updateProjectMemberRoleRow = updateProjectMemberRoleRow;
exports.removeProjectMemberRow = removeProjectMemberRow;
const database_1 = __importDefault(require("../config/database"));
const queries_json_1 = __importDefault(require("./queries.json"));
const queries = queries_json_1.default;
function getQuery(key) {
    const sql = queries[key];
    if (!sql) {
        throw new Error(`SQL query not found for key: ${key}`);
    }
    return sql;
}
async function createProjectRow(input) {
    const { rows } = await database_1.default.query(getQuery('project.create'), [
        input.ownerId,
        input.name,
        input.description ?? null,
    ]);
    const project = rows[0];
    if (!project) {
        throw new Error('Failed to create project');
    }
    return project;
}
async function getProjectAccessRow(projectId, requesterId) {
    const { rows } = await database_1.default.query(getQuery('project.getAccess'), [projectId, requesterId]);
    return rows[0] ?? null;
}
async function getProjectByIdForUserRow(projectId, requesterId) {
    const { rows } = await database_1.default.query(getQuery('project.getByIdForUser'), [projectId, requesterId]);
    return rows[0] ?? null;
}
async function listProjectsForUserRows(requesterId, limit, offset) {
    const { rows } = await database_1.default.query(getQuery('project.listForUser'), [requesterId, limit, offset]);
    return rows;
}
async function countProjectsForUser(requesterId) {
    const { rows } = await database_1.default.query(getQuery('project.countForUser'), [requesterId]);
    return rows[0]?.total ?? 0;
}
async function updateProjectRow(projectId, patch) {
    const { rows } = await database_1.default.query(getQuery('project.update'), [
        projectId,
        patch.name ?? null,
        patch.description ?? null,
    ]);
    const project = rows[0];
    if (!project) {
        throw new Error('Project not found');
    }
    return project;
}
async function deleteProjectRow(projectId) {
    const { rowCount } = await database_1.default.query(getQuery('project.delete'), [projectId]);
    return (rowCount ?? 0) > 0;
}
async function addProjectMemberRow(input) {
    const { rows } = await database_1.default.query(getQuery('member.add'), [
        input.projectId,
        input.userId,
        input.role,
    ]);
    return rows[0] ?? null;
}
async function listProjectMembersRows(projectId) {
    const { rows } = await database_1.default.query(getQuery('member.list'), [projectId]);
    return rows;
}
async function updateProjectMemberRoleRow(input) {
    const { rows } = await database_1.default.query(getQuery('member.updateRole'), [
        input.projectId,
        input.userId,
        input.role,
    ]);
    return rows[0] ?? null;
}
async function removeProjectMemberRow(projectId, userId) {
    const { rowCount } = await database_1.default.query(getQuery('member.remove'), [projectId, userId]);
    return (rowCount ?? 0) > 0;
}
//# sourceMappingURL=project.queries.js.map