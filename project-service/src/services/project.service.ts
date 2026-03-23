import {
	addProjectMemberRow,
	countProjectsForUser,
	createProjectRow,
	deleteProjectRow,
	getProjectAccessRow,
	getProjectByIdForUserRow,
	listProjectMembersRows,
	listProjectsForUserRows,
	ProjectAccessRow,
	ProjectMemberRole,
	ProjectMemberRow,
	ProjectRow,
	removeProjectMemberRow,
	updateProjectMemberRoleRow,
	updateProjectRow,
} from '../queries/project.queries';
import { ProjectServiceError } from '../utils/project-errors';
import { z } from 'zod';

export interface Project {
	id: string;
	ownerId?: string;
	name: string;
	description?: string;
	createdAt: string;
	updatedAt: string;
}

export interface ProjectMember {
	id: string;
	projectId: string;
	userId: string;
	role: ProjectMemberRole;
	createdAt: string;
}

const ALLOWED_ROLES: readonly ProjectMemberRole[] = ['admin', 'member', 'viewer'];
const projectNameSchema = z
	.string()
	.trim()
	.min(1, 'name is required')
	.max(200, 'name must be at most 200 characters');
const projectDescriptionSchema = z
	.string()
	.trim()
	.max(600, 'description must be at most 600 characters');

function formatTimestamp(value: string | Date): string {
	const date = value instanceof Date ? value : new Date(value);
	return date.toISOString();
}

function mapProjectRow(row: ProjectRow): Project {
	const project: Project = {
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

function mapProjectMemberRow(row: ProjectMemberRow): ProjectMember {
	return {
		id: row.id,
		projectId: row.project_id,
		userId: row.user_id,
		role: row.role,
		createdAt: formatTimestamp(row.created_at),
	};
}

function normalizeRequiredId(value: string, field: string): string {
	const normalized = value.trim();
	if (!normalized) {
		throw new ProjectServiceError(`${field} is required`, 400);
	}
	return normalized;
}

function normalizeRequiredName(value: string): string {
	const result = projectNameSchema.safeParse(value);
	if (!result.success) {
		throw new ProjectServiceError(result.error.issues[0]?.message ?? 'Invalid name', 400);
	}
	return result.data;
}

function normalizeOptionalText(value?: string): string | undefined {
	if (value === undefined) {
		return undefined;
	}
	const result = projectDescriptionSchema.safeParse(value);
	if (!result.success) {
		throw new ProjectServiceError(result.error.issues[0]?.message ?? 'Invalid description', 400);
	}
	const trimmed = result.data;
	return trimmed ? trimmed : undefined;
}

function normalizeRole(value: string): ProjectMemberRole {
	const normalized = value.trim() as ProjectMemberRole;
	if (!ALLOWED_ROLES.includes(normalized)) {
		throw new ProjectServiceError('Invalid role', 400);
	}
	return normalized;
}

function normalizePage(value?: number): number {
	if (!value || value < 1) {
		return 1;
	}
	return Math.floor(value);
}

function normalizeLimit(value: number | undefined, max: number, fallback: number): number {
	if (!value || value < 1) {
		return fallback;
	}
	return Math.min(Math.floor(value), max);
}

function canReadProject(access: ProjectAccessRow | null, requesterId: string): boolean {
	if (!access) {
		return false;
	}
	if (access.owner_id === requesterId) {
		return true;
	}
	return access.role !== null;
}

function canManageMembers(access: ProjectAccessRow | null, requesterId: string): boolean {
	if (!access) {
		return false;
	}
	if (access.owner_id === requesterId) {
		return true;
	}
	return access.role === 'admin';
}

function canUpdateProject(access: ProjectAccessRow | null, requesterId: string): boolean {
	return canManageMembers(access, requesterId);
}

function canDeleteProject(access: ProjectAccessRow | null, requesterId: string): boolean {
	if (!access) {
		return false;
	}
	return access.owner_id === requesterId;
}

export async function createProject(input: {
	requesterId: string;
	name: string;
	description?: string;
}): Promise<Project> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const name = normalizeRequiredName(input.name);
	const description = normalizeOptionalText(input.description);

	const projectRow = await createProjectRow({ ownerId: requesterId, name, description: description ?? null });

	// Ensure the owner is also a member with admin role (makes list/permissions consistent)
	await addProjectMemberRow({ projectId: projectRow.id, userId: requesterId, role: 'admin' });

	return mapProjectRow(projectRow);
}

export async function listProjects(input: {
	requesterId: string;
	page?: number;
	limit?: number;
}): Promise<{ projects: Project[]; total: number; page: number; limit: number }> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const page = normalizePage(input.page);
	const limit = normalizeLimit(input.limit, 200, 20);
	const offset = (page - 1) * limit;

	const [rows, total] = await Promise.all([
		listProjectsForUserRows(requesterId, limit, offset),
		countProjectsForUser(requesterId),
	]);

	return {
		projects: rows.map(mapProjectRow),
		total,
		page,
		limit,
	};
}

export async function getProject(input: { requesterId: string; projectId: string }): Promise<Project> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const projectId = normalizeRequiredId(input.projectId, 'project_id');

	const project = await getProjectByIdForUserRow(projectId, requesterId);
	if (!project) {
		throw new ProjectServiceError('Project not found', 404);
	}

	return mapProjectRow(project);
}

export async function updateProject(input: {
	requesterId: string;
	projectId: string;
	name?: string;
	description?: string;
}): Promise<Project> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const projectId = normalizeRequiredId(input.projectId, 'project_id');

	const access = await getProjectAccessRow(projectId, requesterId);
	if (!access || !canReadProject(access, requesterId)) {
		throw new ProjectServiceError('Project not found', 404);
	}

	if (!canUpdateProject(access, requesterId)) {
		throw new ProjectServiceError('Forbidden', 403);
	}

	const name = input.name !== undefined ? normalizeRequiredName(input.name) : undefined;
	const description = normalizeOptionalText(input.description);

	if (name === undefined && description === undefined) {
		throw new ProjectServiceError('No fields to update', 400);
	}

	const updated = await updateProjectRow(projectId, {
		name: name ?? null,
		description: description ?? null,
	});

	return mapProjectRow(updated);
}

export async function deleteProject(input: { requesterId: string; projectId: string }): Promise<{ deleted: boolean }> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const projectId = normalizeRequiredId(input.projectId, 'project_id');

	const access = await getProjectAccessRow(projectId, requesterId);
	if (!access || !canReadProject(access, requesterId)) {
		throw new ProjectServiceError('Project not found', 404);
	}

	if (!canDeleteProject(access, requesterId)) {
		throw new ProjectServiceError('Forbidden', 403);
	}

	const deleted = await deleteProjectRow(projectId);
	if (!deleted) {
		throw new ProjectServiceError('Project not found', 404);
	}

	return { deleted: true };
}

export async function addProjectMember(input: {
	requesterId: string;
	projectId: string;
	userId: string;
	role?: string;
}): Promise<ProjectMember> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const projectId = normalizeRequiredId(input.projectId, 'project_id');
	const userId = normalizeRequiredId(input.userId, 'user_id');
	const role = input.role ? normalizeRole(input.role) : 'member';

	const access = await getProjectAccessRow(projectId, requesterId);
	if (!access || !canReadProject(access, requesterId)) {
		throw new ProjectServiceError('Project not found', 404);
	}

	if (!canManageMembers(access, requesterId)) {
		throw new ProjectServiceError('Forbidden', 403);
	}

	if (access.owner_id === userId) {
		throw new ProjectServiceError('Owner is already a project member', 409);
	}

	const inserted = await addProjectMemberRow({ projectId, userId, role });
	if (!inserted) {
		throw new ProjectServiceError('Member already exists', 409);
	}

	return mapProjectMemberRow(inserted);
}

export async function listProjectMembers(input: {
	requesterId: string;
	projectId: string;
}): Promise<ProjectMember[]> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const projectId = normalizeRequiredId(input.projectId, 'project_id');

	const access = await getProjectAccessRow(projectId, requesterId);
	if (!access || !canReadProject(access, requesterId)) {
		throw new ProjectServiceError('Project not found', 404);
	}

	const members = await listProjectMembersRows(projectId);
	return members.map(mapProjectMemberRow);
}

export async function updateProjectMemberRole(input: {
	requesterId: string;
	projectId: string;
	userId: string;
	role: string;
}): Promise<ProjectMember> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const projectId = normalizeRequiredId(input.projectId, 'project_id');
	const userId = normalizeRequiredId(input.userId, 'user_id');
	const role = normalizeRole(input.role);

	const access = await getProjectAccessRow(projectId, requesterId);
	if (!access || !canReadProject(access, requesterId)) {
		throw new ProjectServiceError('Project not found', 404);
	}

	if (!canManageMembers(access, requesterId)) {
		throw new ProjectServiceError('Forbidden', 403);
	}

	if (access.owner_id === userId) {
		throw new ProjectServiceError('Cannot change owner role', 400);
	}

	const updated = await updateProjectMemberRoleRow({ projectId, userId, role });
	if (!updated) {
		throw new ProjectServiceError('Member not found', 404);
	}

	return mapProjectMemberRow(updated);
}

export async function removeProjectMember(input: {
	requesterId: string;
	projectId: string;
	userId: string;
}): Promise<{ removed: boolean }> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const projectId = normalizeRequiredId(input.projectId, 'project_id');
	const userId = normalizeRequiredId(input.userId, 'user_id');

	const access = await getProjectAccessRow(projectId, requesterId);
	if (!access || !canReadProject(access, requesterId)) {
		throw new ProjectServiceError('Project not found', 404);
	}

	if (!canManageMembers(access, requesterId)) {
		throw new ProjectServiceError('Forbidden', 403);
	}

	if (access.owner_id === userId) {
		throw new ProjectServiceError('Cannot remove owner from project', 400);
	}

	const removed = await removeProjectMemberRow(projectId, userId);
	if (!removed) {
		throw new ProjectServiceError('Member not found', 404);
	}

	return { removed: true };
}
