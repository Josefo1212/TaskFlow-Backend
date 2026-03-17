import {
	addTagToTaskRow,
	countTagsForOwner,
	createTagRow,
	deleteTagForOwnerRow,
	findTagByIdForOwnerRow,
	listTagsForOwnerRows,
	listTagsForTaskAndOwnerRows,
	removeTagFromTaskRow,
	updateTagForOwnerRow,
} from '../queries/tag.queries';
import { TagServiceError } from '../utils/tag-errors';

export interface Tag {
	id: string;
	ownerId: string;
	name: string;
	color: string;
	createdAt: string;
}

function formatTimestamp(value: string | Date): string {
	const date = value instanceof Date ? value : new Date(value);
	return date.toISOString();
}

function mapTagRow(row: { id: string; owner_id: string; name: string; color: string; created_at: string | Date }): Tag {
	return {
		id: row.id,
		ownerId: row.owner_id,
		name: row.name,
		color: row.color,
		createdAt: formatTimestamp(row.created_at),
	};
}

function normalizeRequiredId(value: string, field: string): string {
	const normalized = value.trim();
	if (!normalized) {
		throw new TagServiceError(`${field} is required`, 400);
	}
	return normalized;
}

function normalizeRequiredName(value: string): string {
	const normalized = value.trim();
	if (!normalized) {
		throw new TagServiceError('name is required', 400);
	}
	if (normalized.length > 255) {
		throw new TagServiceError('name is too long', 400);
	}
	return normalized;
}

function normalizeOptionalName(value?: string): string | undefined {
	if (value === undefined) {
		return undefined;
	}
	const trimmed = value.trim();
	if (!trimmed) {
		return undefined;
	}
	if (trimmed.length > 255) {
		throw new TagServiceError('name is too long', 400);
	}
	return trimmed;
}

function normalizeColor(value?: string): string {
	const trimmed = (value ?? '').trim();
	if (!trimmed) {
		return '#808080';
	}
	if (trimmed.length > 20) {
		throw new TagServiceError('color is too long', 400);
	}
	// Accept common formats: hex (#RGB/#RRGGBB), rgb/rgba strings, or named.
	return trimmed;
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

function isUniqueViolation(error: unknown): boolean {
	const anyErr = error as { code?: string };
	return anyErr?.code === '23505';
}

export async function createTag(input: { requesterId: string; name: string; color?: string }): Promise<Tag> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const name = normalizeRequiredName(input.name);
	const color = normalizeColor(input.color);

	try {
		const row = await createTagRow({ ownerId: requesterId, name, color });
		return mapTagRow(row);
	} catch (error) {
		if (isUniqueViolation(error)) {
			throw new TagServiceError('Tag name already exists', 409);
		}
		throw error;
	}
}

export async function getTag(input: { requesterId: string; tagId: string }): Promise<Tag> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const tagId = normalizeRequiredId(input.tagId, 'tag_id');
	const row = await findTagByIdForOwnerRow(tagId, requesterId);
	if (!row) {
		throw new TagServiceError('Tag not found', 404);
	}
	return mapTagRow(row);
}

export async function updateTag(input: {
	requesterId: string;
	tagId: string;
	name?: string;
	color?: string;
}): Promise<Tag> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const tagId = normalizeRequiredId(input.tagId, 'tag_id');
	const name = normalizeOptionalName(input.name);
	const color = input.color !== undefined ? normalizeColor(input.color) : undefined;

	if (name === undefined && color === undefined) {
		throw new TagServiceError('No fields to update', 400);
	}

	try {
		const updated = await updateTagForOwnerRow(tagId, requesterId, {
			name: name ?? null,
			color: color ?? null,
		});
		if (!updated) {
			throw new TagServiceError('Tag not found', 404);
		}
		return mapTagRow(updated);
	} catch (error) {
		if (isUniqueViolation(error)) {
			throw new TagServiceError('Tag name already exists', 409);
		}
		throw error;
	}
}

export async function deleteTag(input: { requesterId: string; tagId: string }): Promise<{ deleted: boolean }> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const tagId = normalizeRequiredId(input.tagId, 'tag_id');
	const deleted = await deleteTagForOwnerRow(tagId, requesterId);
	if (!deleted) {
		throw new TagServiceError('Tag not found', 404);
	}
	return { deleted: true };
}

export async function listTags(input: {
	requesterId: string;
	page?: number;
	limit?: number;
}): Promise<{ tags: Tag[]; total: number; page: number; limit: number }> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const page = normalizePage(input.page);
	const limit = normalizeLimit(input.limit, 200, 50);
	const offset = (page - 1) * limit;

	const [rows, total] = await Promise.all([
		listTagsForOwnerRows(requesterId, limit, offset),
		countTagsForOwner(requesterId),
	]);

	return {
		tags: rows.map(mapTagRow),
		total,
		page,
		limit,
	};
}

export async function addTagToTask(input: {
	requesterId: string;
	taskId: string;
	tagId: string;
}): Promise<{ added: boolean }> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const taskId = normalizeRequiredId(input.taskId, 'task_id');
	const tagId = normalizeRequiredId(input.tagId, 'tag_id');

	// Ensure the tag belongs to requester
	const tag = await findTagByIdForOwnerRow(tagId, requesterId);
	if (!tag) {
		throw new TagServiceError('Tag not found', 404);
	}

	try {
		const added = await addTagToTaskRow(taskId, tagId);
		return { added };
	} catch (error) {
		// Foreign key violations: task or tag not found
		const anyErr = error as { code?: string };
		if (anyErr?.code === '23503') {
			throw new TagServiceError('Task or tag not found', 404);
		}
		throw error;
	}
}

export async function removeTagFromTask(input: {
	requesterId: string;
	taskId: string;
	tagId: string;
}): Promise<{ removed: boolean }> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const taskId = normalizeRequiredId(input.taskId, 'task_id');
	const tagId = normalizeRequiredId(input.tagId, 'tag_id');

	// Ensure the tag belongs to requester
	const tag = await findTagByIdForOwnerRow(tagId, requesterId);
	if (!tag) {
		throw new TagServiceError('Tag not found', 404);
	}

	const removed = await removeTagFromTaskRow(taskId, tagId);
	return { removed };
}

export async function listTagsForTask(input: { requesterId: string; taskId: string }): Promise<{ tags: Tag[] }> {
	const requesterId = normalizeRequiredId(input.requesterId, 'requester_id');
	const taskId = normalizeRequiredId(input.taskId, 'task_id');
	const rows = await listTagsForTaskAndOwnerRows(taskId, requesterId);
	return { tags: rows.map(mapTagRow) };
}
