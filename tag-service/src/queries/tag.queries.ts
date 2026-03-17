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

export interface TagRow {
	id: string;
	owner_id: string;
	name: string;
	color: string;
	created_at: string | Date;
}

export async function createTagRow(input: {
	ownerId: string;
	name: string;
	color: string;
}): Promise<TagRow> {
	const { rows } = await pool.query<TagRow>(getQuery('tag.create'), [input.ownerId, input.name, input.color]);
	const tag = rows[0];
	if (!tag) {
		throw new Error('Failed to create tag');
	}
	return tag;
}

export async function findTagByIdForOwnerRow(tagId: string, ownerId: string): Promise<TagRow | null> {
	const { rows } = await pool.query<TagRow>(getQuery('tag.getByIdForOwner'), [tagId, ownerId]);
	return rows[0] ?? null;
}

export async function findTagByIdRow(tagId: string): Promise<TagRow | null> {
	const { rows } = await pool.query<TagRow>(getQuery('tag.getById'), [tagId]);
	return rows[0] ?? null;
}

export async function listTagsForOwnerRows(ownerId: string, limit: number, offset: number): Promise<TagRow[]> {
	const { rows } = await pool.query<TagRow>(getQuery('tag.listForOwner'), [ownerId, limit, offset]);
	return rows;
}

export async function countTagsForOwner(ownerId: string): Promise<number> {
	const { rows } = await pool.query<{ total: number }>(getQuery('tag.countForOwner'), [ownerId]);
	return rows[0]?.total ?? 0;
}

export async function updateTagForOwnerRow(
	tagId: string,
	ownerId: string,
	patch: { name?: string | null; color?: string | null },
): Promise<TagRow | null> {
	const { rows } = await pool.query<TagRow>(getQuery('tag.updateForOwner'), [
		tagId,
		ownerId,
		patch.name ?? null,
		patch.color ?? null,
	]);
	return rows[0] ?? null;
}

export async function deleteTagForOwnerRow(tagId: string, ownerId: string): Promise<boolean> {
	const { rowCount } = await pool.query(getQuery('tag.deleteForOwner'), [tagId, ownerId]);
	return (rowCount ?? 0) > 0;
}

export async function addTagToTaskRow(taskId: string, tagId: string): Promise<boolean> {
	const before = await taskTagExistsRow(taskId, tagId);
	await pool.query(getQuery('taskTag.add'), [taskId, tagId]);
	const after = await taskTagExistsRow(taskId, tagId);
	return !before && after;
}

export async function removeTagFromTaskRow(taskId: string, tagId: string): Promise<boolean> {
	const { rowCount } = await pool.query(getQuery('taskTag.remove'), [taskId, tagId]);
	return (rowCount ?? 0) > 0;
}

export async function taskTagExistsRow(taskId: string, tagId: string): Promise<boolean> {
	const { rowCount } = await pool.query(getQuery('taskTag.exists'), [taskId, tagId]);
	return (rowCount ?? 0) > 0;
}

export async function listTagsForTaskAndOwnerRows(taskId: string, ownerId: string): Promise<TagRow[]> {
	const { rows } = await pool.query<TagRow>(getQuery('taskTag.listTagsForTaskAndOwner'), [taskId, ownerId]);
	return rows;
}
