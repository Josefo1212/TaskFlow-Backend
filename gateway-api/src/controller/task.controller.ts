import { Request, Response } from 'express';
import { z } from 'zod';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
import { GatewayError } from '../utils/grpc-error-mapper';
import {
	assignTaskWithTaskService,
	changeTaskPriorityWithTaskService,
	changeTaskStatusWithTaskService,
	createTaskWithTaskService,
	deleteTaskWithTaskService,
	getTaskWithTaskService,
	listTasksWithTaskService,
	updateTaskWithTaskService,
} from '../services/task.service';

const createTaskSchema = z.object({
	project_id: z.string().min(1, 'El campo "project_id" es requerido.'),
	assignee_id: z.string().min(1).optional(),
	title: z.string().trim().min(1, 'El campo "title" es requerido.').max(200, 'El campo "title" debe tener como máximo 200 caracteres.'),
	description: z
		.string()
		.trim()
		.max(600, 'El campo "description" debe tener como máximo 600 caracteres.')
		.optional(),
	status: z.string().optional(),
	priority: z.string().optional(),
	due_date: z.string().optional(),
});

const updateTaskSchema = z
	.object({
		title: z
			.string()
			.trim()
			.min(1)
			.max(200, 'El campo "title" debe tener como máximo 200 caracteres.')
			.optional(),
		description: z
			.string()
			.trim()
			.max(600, 'El campo "description" debe tener como máximo 600 caracteres.')
			.optional(),
		due_date: z.string().optional(),
	})
	.refine((data) => data.title !== undefined || data.description !== undefined || data.due_date !== undefined, {
		message: 'Debes enviar al menos "title", "description" o "due_date".',
	});

const listTasksSchema = z.object({
	page: z.coerce.number().int().positive().optional(),
	limit: z.coerce.number().int().positive().optional(),
	project_id: z.string().optional(),
	assignee_id: z.string().optional(),
	status: z.string().optional(),
	priority: z.string().optional(),
	due_date_from: z.string().optional(),
	due_date_to: z.string().optional(),
});

const changeStatusSchema = z.object({
	status: z.string().min(1, 'El campo "status" es requerido.'),
});

const changePrioritySchema = z.object({
	priority: z.string().min(1, 'El campo "priority" es requerido.'),
});

const assignSchema = z.object({
	assignee_id: z.string().min(1).optional(),
});

function requireAuthenticatedUserId(req: AuthenticatedRequest): string {
	const userId = req.user?.sub;
	if (!userId) {
		throw new GatewayError('No autorizado.', 401);
	}
	return userId;
}

function requireTaskId(req: Request): string {
	const { taskId } = req.params as { taskId?: string };
	if (typeof taskId !== 'string' || !taskId.trim()) {
		throw new GatewayError('Se requiere el parámetro "taskId".', 400);
	}
	return taskId;
}

export async function createTaskController(req: AuthenticatedRequest, res: Response) {
	const payload = createTaskSchema.parse(req.body ?? {});

	const requestPayload: {
		project_id: string;
		creator_id: string;
		assignee_id?: string;
		title: string;
		description?: string;
		status?: string;
		priority?: string;
		due_date?: string;
	} = {
		project_id: payload.project_id,
		creator_id: requireAuthenticatedUserId(req),
		title: payload.title,
	};

	if (payload.assignee_id !== undefined) {
		requestPayload.assignee_id = payload.assignee_id;
	}

	if (payload.description !== undefined) {
		requestPayload.description = payload.description;
	}

	if (payload.status !== undefined) {
		requestPayload.status = payload.status;
	}

	if (payload.priority !== undefined) {
		requestPayload.priority = payload.priority;
	}

	if (payload.due_date !== undefined) {
		requestPayload.due_date = payload.due_date;
	}

	const response = await createTaskWithTaskService(requestPayload);
	res.status(201).json(response);
}

export async function listTasksController(req: Request, res: Response) {
	const payload = listTasksSchema.parse(req.query);
	const requestPayload: {
		page?: number;
		limit?: number;
		project_id?: string;
		assignee_id?: string;
		status?: string;
		priority?: string;
		due_date_from?: string;
		due_date_to?: string;
	} = {};

	if (payload.page !== undefined) requestPayload.page = payload.page;
	if (payload.limit !== undefined) requestPayload.limit = payload.limit;
	if (payload.project_id !== undefined) requestPayload.project_id = payload.project_id;
	if (payload.assignee_id !== undefined) requestPayload.assignee_id = payload.assignee_id;
	if (payload.status !== undefined) requestPayload.status = payload.status;
	if (payload.priority !== undefined) requestPayload.priority = payload.priority;
	if (payload.due_date_from !== undefined) requestPayload.due_date_from = payload.due_date_from;
	if (payload.due_date_to !== undefined) requestPayload.due_date_to = payload.due_date_to;

	const response = await listTasksWithTaskService(requestPayload);
	res.status(200).json(response);
}

export async function getTaskController(req: Request, res: Response) {
	const response = await getTaskWithTaskService({ task_id: requireTaskId(req) });
	res.status(200).json(response);
}

export async function updateTaskController(req: Request, res: Response) {
	const payload = updateTaskSchema.parse(req.body ?? {});
	const requestPayload: {
		task_id: string;
		title?: string;
		description?: string;
		due_date?: string;
	} = {
		task_id: requireTaskId(req),
	};

	if (payload.title !== undefined) requestPayload.title = payload.title;
	if (payload.description !== undefined) requestPayload.description = payload.description;
	if (payload.due_date !== undefined) requestPayload.due_date = payload.due_date;

	const response = await updateTaskWithTaskService(requestPayload);
	res.status(200).json(response);
}

export async function deleteTaskController(req: Request, res: Response) {
	const response = await deleteTaskWithTaskService({ task_id: requireTaskId(req) });
	res.status(200).json(response);
}

export async function changeTaskStatusController(req: Request, res: Response) {
	const payload = changeStatusSchema.parse(req.body ?? {});
	const response = await changeTaskStatusWithTaskService({
		task_id: requireTaskId(req),
		status: payload.status,
	});
	res.status(200).json(response);
}

export async function changeTaskPriorityController(req: Request, res: Response) {
	const payload = changePrioritySchema.parse(req.body ?? {});
	const response = await changeTaskPriorityWithTaskService({
		task_id: requireTaskId(req),
		priority: payload.priority,
	});
	res.status(200).json(response);
}

export async function assignTaskController(req: Request, res: Response) {
	const payload = assignSchema.parse(req.body ?? {});
	const requestPayload: {
		task_id: string;
		assignee_id?: string;
	} = {
		task_id: requireTaskId(req),
	};

	if (payload.assignee_id !== undefined) {
		requestPayload.assignee_id = payload.assignee_id;
	}

	const response = await assignTaskWithTaskService(requestPayload);
	res.status(200).json(response);
}
