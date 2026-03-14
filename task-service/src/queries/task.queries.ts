import pool from '../config/database';
import rawQueries from './queries.json';

type SqlMap = Record<string, string>;

export type TaskStatus = 'pendiente' | 'en_progreso' | 'completada' | 'bloqueada';
export type TaskPriority = 'baja' | 'media' | 'alta' | 'critica';

export interface TaskRow {
	id: string;
	project_id: string;
	creator_id: string | null;
	assignee_id: string | null;
	title: string;
	description: string | null;
	status: TaskStatus;
	priority: TaskPriority;
	due_date: string | Date | null;
	created_at: string | Date;
	updated_at: string | Date;
}

export interface ListTasksFilters {
	projectId?: string;
	assigneeId?: string;
	status?: TaskStatus;
	priority?: TaskPriority;
	dueDateFrom?: string;
	dueDateTo?: string;
}

const queries: SqlMap = rawQueries;

function getQuery(key: string): string {
	const sql = queries[key];
	if (!sql) {
		throw new Error(`SQL query not found for key: ${key}`);
	}
	return sql;
}

export async function createTaskRow(input: {
	projectId: string;
	creatorId?: string | null;
	assigneeId?: string | null;
	title: string;
	description?: string | null;
	status?: TaskStatus;
	priority?: TaskPriority;
	dueDate?: string | null;
}): Promise<TaskRow> {
	const { rows } = await pool.query<TaskRow>(getQuery('task.create'), [
		input.projectId,
		input.creatorId ?? null,
		input.assigneeId ?? null,
		input.title,
		input.description ?? null,
		input.status ?? 'pendiente',
		input.priority ?? 'media',
		input.dueDate ?? null,
	]);

	const task = rows[0];
	if (!task) {
		throw new Error('Failed to create task');
	}

	return task;
}

export async function findTaskByIdRow(taskId: string): Promise<TaskRow | null> {
	const { rows } = await pool.query<TaskRow>(getQuery('task.getById'), [taskId]);
	return rows[0] ?? null;
}

export async function updateTaskRow(
	taskId: string,
	patch: {
		title?: string | null;
		description?: string | null;
		dueDate?: string | null;
	},
): Promise<TaskRow> {
	const { rows } = await pool.query<TaskRow>(getQuery('task.update'), [
		taskId,
		patch.title ?? null,
		patch.description ?? null,
		patch.dueDate ?? null,
	]);

	const task = rows[0];
	if (!task) {
		throw new Error('Task not found');
	}

	return task;
}

export async function deleteTaskRow(taskId: string): Promise<boolean> {
	const { rowCount } = await pool.query(getQuery('task.delete'), [taskId]);
	return (rowCount ?? 0) > 0;
}

export async function updateTaskStatusRow(taskId: string, status: TaskStatus): Promise<TaskRow> {
	const { rows } = await pool.query<TaskRow>(getQuery('task.updateStatus'), [taskId, status]);
	const task = rows[0];
	if (!task) {
		throw new Error('Task not found');
	}
	return task;
}

export async function updateTaskPriorityRow(taskId: string, priority: TaskPriority): Promise<TaskRow> {
	const { rows } = await pool.query<TaskRow>(getQuery('task.updatePriority'), [taskId, priority]);
	const task = rows[0];
	if (!task) {
		throw new Error('Task not found');
	}
	return task;
}

export async function assignTaskRow(taskId: string, assigneeId: string | null): Promise<TaskRow> {
	const { rows } = await pool.query<TaskRow>(getQuery('task.assign'), [taskId, assigneeId]);
	const task = rows[0];
	if (!task) {
		throw new Error('Task not found');
	}
	return task;
}

export async function listTasksRows(
	filters: ListTasksFilters,
	limit: number,
	offset: number,
): Promise<TaskRow[]> {
	const { rows } = await pool.query<TaskRow>(getQuery('task.list'), [
		filters.projectId ?? null,
		filters.assigneeId ?? null,
		filters.status ?? null,
		filters.priority ?? null,
		filters.dueDateFrom ?? null,
		filters.dueDateTo ?? null,
		limit,
		offset,
	]);
	return rows;
}

export async function countTasks(filters: ListTasksFilters): Promise<number> {
	const { rows } = await pool.query<{ total: number }>(getQuery('task.count'), [
		filters.projectId ?? null,
		filters.assigneeId ?? null,
		filters.status ?? null,
		filters.priority ?? null,
		filters.dueDateFrom ?? null,
		filters.dueDateTo ?? null,
	]);
	return rows[0]?.total ?? 0;
}
