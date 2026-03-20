import {
	assignTaskRow,
	countTasks,
	createTaskRow,
	findTaskByIdRow,
	listTasksRows,
	TaskPriority,
	TaskRow,
	TaskStatus,
	updateTaskPriorityRow,
	updateTaskRow,
	updateTaskStatusRow,
	deleteTaskRow,
	ListTasksFilters,
} from '../queries/task.queries';
import { TaskServiceError } from '../utils/task-errors';

export interface Task {
	id: string;
	projectId: string;
	creatorId?: string;
	assigneeId?: string;
	title: string;
	description?: string;
	status: TaskStatus;
	priority: TaskPriority;
	dueDate?: string;
	createdAt: string;
	updatedAt: string;
}

const ALLOWED_STATUS: readonly TaskStatus[] = ['pendiente', 'en_progreso', 'completada', 'bloqueada'];
const ALLOWED_PRIORITY: readonly TaskPriority[] = ['baja', 'media', 'alta', 'critica'];

function normalizeToken(value: string): string {
	return value
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '_');
}

function formatTimestamp(value: string | Date): string {
	const date = value instanceof Date ? value : new Date(value);
	return date.toISOString();
}

function formatDateOnly(value: string | Date): string {
	const date = value instanceof Date ? value : new Date(value);
	const yyyy = date.getUTCFullYear();
	const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
	const dd = String(date.getUTCDate()).padStart(2, '0');
	return `${yyyy}-${mm}-${dd}`;
}

function mapTaskRow(row: TaskRow): Task {
	const task: Task = {
		id: row.id,
		projectId: row.project_id,
		title: row.title,
		status: row.status,
		priority: row.priority,
		createdAt: formatTimestamp(row.created_at),
		updatedAt: formatTimestamp(row.updated_at),
	};

	if (row.creator_id) {
		task.creatorId = row.creator_id;
	}

	if (row.assignee_id) {
		task.assigneeId = row.assignee_id;
	}

	if (row.description) {
		task.description = row.description;
	}

	if (row.due_date) {
		task.dueDate = formatDateOnly(row.due_date);
	}

	return task;
}

function normalizeRequiredId(value: string, field: string): string {
	const normalized = value.trim();
	if (!normalized) {
		throw new TaskServiceError(`${field} is required`, 400);
	}
	return normalized;
}

function normalizeOptionalId(value?: string): string | undefined {
	const normalized = value?.trim();
	return normalized ? normalized : undefined;
}

function normalizeRequiredTitle(value: string): string {
	const normalized = value.trim();
	if (!normalized) {
		throw new TaskServiceError('title is required', 400);
	}
	if (normalized.length > 255) {
		throw new TaskServiceError('title is too long', 400);
	}
	return normalized;
}

function normalizeOptionalText(value?: string): string | undefined {
	if (value === undefined) {
		return undefined;
	}
	const trimmed = value.trim();
	if (!trimmed) {
		return undefined;
	}
	return trimmed;
}

function normalizeOptionalDateOnly(value?: string): string | undefined {
	if (value === undefined) {
		return undefined;
	}
	const trimmed = value.trim();
	if (!trimmed) {
		return undefined;
	}
	if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
		throw new TaskServiceError('date must be YYYY-MM-DD', 400);
	}
	return trimmed;
}

function normalizeStatus(value: string): TaskStatus {
	const token = normalizeToken(value);

	const mapped: Record<string, TaskStatus> = {
		pendiente: 'pendiente',
		en_progreso: 'en_progreso',
		completada: 'completada',
		bloqueada: 'bloqueada',

		// Common English variants
		pending: 'pendiente',
		in_progress: 'en_progreso',
		inprogress: 'en_progreso',
		completed: 'completada',
		done: 'completada',
		blocked: 'bloqueada',
		block: 'bloqueada',
	};

	const normalized = (mapped[token] ?? token) as TaskStatus;
	if (!ALLOWED_STATUS.includes(normalized)) {
		throw new TaskServiceError(`Invalid status. Allowed: ${ALLOWED_STATUS.join(', ')}`, 400);
	}
	return normalized;
}

function normalizePriority(value: string): TaskPriority {
	const token = normalizeToken(value);

	const mapped: Record<string, TaskPriority> = {
		baja: 'baja',
		media: 'media',
		alta: 'alta',
		critica: 'critica',

		// Common English variants
		low: 'baja',
		medium: 'media',
		high: 'alta',
		critical: 'critica',
	};

	const normalized = (mapped[token] ?? token) as TaskPriority;
	if (!ALLOWED_PRIORITY.includes(normalized)) {
		throw new TaskServiceError(`Invalid priority. Allowed: ${ALLOWED_PRIORITY.join(', ')}`, 400);
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

export async function createTask(input: {
	projectId: string;
	creatorId?: string;
	assigneeId?: string;
	title: string;
	description?: string;
	status?: string;
	priority?: string;
	dueDate?: string;
}): Promise<Task> {
	const projectId = normalizeRequiredId(input.projectId, 'project_id');
	const creatorId = normalizeOptionalId(input.creatorId);
	const assigneeId = normalizeOptionalId(input.assigneeId);
	const title = normalizeRequiredTitle(input.title);
	const description = normalizeOptionalText(input.description);
	const dueDate = normalizeOptionalDateOnly(input.dueDate);

	const status = input.status ? normalizeStatus(input.status) : undefined;
	const priority = input.priority ? normalizePriority(input.priority) : undefined;

	const payload: Parameters<typeof createTaskRow>[0] = {
		projectId,
		creatorId: creatorId ?? null,
		assigneeId: assigneeId ?? null,
		title,
		description: description ?? null,
		dueDate: dueDate ?? null,
	};

	if (status) {
		payload.status = status;
	}

	if (priority) {
		payload.priority = priority;
	}

	const task = await createTaskRow(payload);

	return mapTaskRow(task);
}

export async function getTask(input: { taskId: string }): Promise<Task> {
	const taskId = normalizeRequiredId(input.taskId, 'task_id');
	const task = await findTaskByIdRow(taskId);
	if (!task) {
		throw new TaskServiceError('Task not found', 404);
	}
	return mapTaskRow(task);
}

export async function updateTask(input: {
	taskId: string;
	title?: string;
	description?: string;
	dueDate?: string;
}): Promise<Task> {
	const taskId = normalizeRequiredId(input.taskId, 'task_id');
	const title = input.title !== undefined ? normalizeRequiredTitle(input.title) : undefined;
	const description = normalizeOptionalText(input.description);
	const dueDate = normalizeOptionalDateOnly(input.dueDate);

	if (title === undefined && description === undefined && dueDate === undefined) {
		throw new TaskServiceError('No fields to update', 400);
	}

	const updated = await updateTaskRow(taskId, {
		title: title ?? null,
		description: description ?? null,
		dueDate: dueDate ?? null,
	});

	return mapTaskRow(updated);
}

export async function deleteTask(input: { taskId: string }): Promise<{ deleted: boolean }> {
	const taskId = normalizeRequiredId(input.taskId, 'task_id');
	const deleted = await deleteTaskRow(taskId);
	if (!deleted) {
		throw new TaskServiceError('Task not found', 404);
	}
	return { deleted: true };
}

export async function changeTaskStatus(input: { taskId: string; status: string }): Promise<Task> {
	const taskId = normalizeRequiredId(input.taskId, 'task_id');
	const status = normalizeStatus(input.status);
	const updated = await updateTaskStatusRow(taskId, status);
	return mapTaskRow(updated);
}

export async function changeTaskPriority(input: { taskId: string; priority: string }): Promise<Task> {
	const taskId = normalizeRequiredId(input.taskId, 'task_id');
	const priority = normalizePriority(input.priority);
	const updated = await updateTaskPriorityRow(taskId, priority);
	return mapTaskRow(updated);
}

export async function assignTask(input: { taskId: string; assigneeId?: string }): Promise<Task> {
	const taskId = normalizeRequiredId(input.taskId, 'task_id');
	const assigneeId = normalizeOptionalId(input.assigneeId);
	const updated = await assignTaskRow(taskId, assigneeId ?? null);
	return mapTaskRow(updated);
}

export async function listTasks(input: {
	page?: number;
	limit?: number;
	projectId?: string;
	assigneeId?: string;
	status?: string;
	priority?: string;
	dueDateFrom?: string;
	dueDateTo?: string;
}): Promise<{ tasks: Task[]; total: number; page: number; limit: number }> {
	const page = normalizePage(input.page);
	const limit = normalizeLimit(input.limit, 200, 20);
	const offset = (page - 1) * limit;

	const filters: ListTasksFilters = {};

	const projectId = normalizeOptionalId(input.projectId);
	if (projectId) {
		filters.projectId = projectId;
	}

	const assigneeId = normalizeOptionalId(input.assigneeId);
	if (assigneeId) {
		filters.assigneeId = assigneeId;
	}

	const dueDateFrom = normalizeOptionalDateOnly(input.dueDateFrom);
	if (dueDateFrom) {
		filters.dueDateFrom = dueDateFrom;
	}

	const dueDateTo = normalizeOptionalDateOnly(input.dueDateTo);
	if (dueDateTo) {
		filters.dueDateTo = dueDateTo;
	}

	if (input.status?.trim()) {
		filters.status = normalizeStatus(input.status);
	}
	if (input.priority?.trim()) {
		filters.priority = normalizePriority(input.priority);
	}

	const [rows, total] = await Promise.all([
		listTasksRows(filters, limit, offset),
		countTasks(filters),
	]);

	return {
		tasks: rows.map(mapTaskRow),
		total,
		page,
		limit,
	};
}
