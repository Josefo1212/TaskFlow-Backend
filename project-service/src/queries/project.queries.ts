import pool from '../config/database';
import rawQueries from './queries.json';

type SqlMap = Record<string, string>;
const queries: SqlMap = rawQueries;

function getQuery(key: string): string {
	const sql = queries[key];
	if (!sql) {
		throw new Error(`SQL query not found for key: ${key}`);
	}
	return sql;
}

export type ProjectMemberRole = 'admin' | 'member' | 'viewer';

export interface ProjectRow {
	id: string;
	owner_id: string | null;
	name: string;
	description: string | null;
	created_at: string | Date;
	updated_at: string | Date;
}

export interface ProjectAccessRow {
	owner_id: string | null;
	role: ProjectMemberRole | null;
}

export interface ProjectMemberRow {
	id: string;
	project_id: string;
	user_id: string;
	role: ProjectMemberRole;
	created_at: string | Date;
}

export async function createProjectRow(input: {
	ownerId: string;
	name: string;
	description?: string | null;
}): Promise<ProjectRow> {
	const { rows } = await pool.query<ProjectRow>(getQuery('project.create'), [
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

export async function getProjectAccessRow(projectId: string, requesterId: string): Promise<ProjectAccessRow | null> {
	const { rows } = await pool.query<ProjectAccessRow>(getQuery('project.getAccess'), [projectId, requesterId]);
	return rows[0] ?? null;
}

export async function getProjectByIdForUserRow(
	projectId: string,
	requesterId: string,
): Promise<ProjectRow | null> {
	const { rows } = await pool.query<ProjectRow>(getQuery('project.getByIdForUser'), [projectId, requesterId]);
	return rows[0] ?? null;
}

export async function listProjectsForUserRows(
	requesterId: string,
	limit: number,
	offset: number,
): Promise<ProjectRow[]> {
	const { rows } = await pool.query<ProjectRow>(getQuery('project.listForUser'), [requesterId, limit, offset]);
	return rows;
}

export async function countProjectsForUser(requesterId: string): Promise<number> {
	const { rows } = await pool.query<{ total: number }>(getQuery('project.countForUser'), [requesterId]);
	return rows[0]?.total ?? 0;
}

export async function updateProjectRow(
	projectId: string,
	patch: { name?: string | null; description?: string | null },
): Promise<ProjectRow> {
	const { rows } = await pool.query<ProjectRow>(getQuery('project.update'), [
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

export async function deleteProjectRow(projectId: string): Promise<boolean> {
	const { rowCount } = await pool.query(getQuery('project.delete'), [projectId]);
	return (rowCount ?? 0) > 0;
}

export async function addProjectMemberRow(input: {
	projectId: string;
	userId: string;
	role: ProjectMemberRole;
}): Promise<ProjectMemberRow | null> {
	const { rows } = await pool.query<ProjectMemberRow>(getQuery('member.add'), [
		input.projectId,
		input.userId,
		input.role,
	]);
	return rows[0] ?? null;
}

export async function listProjectMembersRows(projectId: string): Promise<ProjectMemberRow[]> {
	const { rows } = await pool.query<ProjectMemberRow>(getQuery('member.list'), [projectId]);
	return rows;
}

export async function updateProjectMemberRoleRow(input: {
	projectId: string;
	userId: string;
	role: ProjectMemberRole;
}): Promise<ProjectMemberRow | null> {
	const { rows } = await pool.query<ProjectMemberRow>(getQuery('member.updateRole'), [
		input.projectId,
		input.userId,
		input.role,
	]);
	return rows[0] ?? null;
}

export async function removeProjectMemberRow(projectId: string, userId: string): Promise<boolean> {
	const { rowCount } = await pool.query(getQuery('member.remove'), [projectId, userId]);
	return (rowCount ?? 0) > 0;
}
