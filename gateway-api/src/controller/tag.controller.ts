import { Request, Response } from 'express';
import { z } from 'zod';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
import {
	addTagToTaskWithTagService,
	createTagWithTagService,
	deleteTagWithTagService,
	getTagWithTagService,
	listTagsForTaskWithTagService,
	listTagsWithTagService,
	removeTagFromTaskWithTagService,
	updateTagWithTagService,
} from '../services/tag.service';

const createTagSchema = z.object({
	name: z.string().min(1, 'name is required'),
	color: z.string().min(1).optional(),
});

const updateTagSchema = z
	.object({
		name: z.string().min(1).optional(),
		color: z.string().min(1).optional(),
	})
	.refine((data) => data.name !== undefined || data.color !== undefined, {
		message: 'name or color is required',
	});

const listTagsSchema = z.object({
	page: z.coerce.number().int().positive().optional(),
	limit: z.coerce.number().int().positive().optional(),
});

const addTagToTaskSchema = z.object({
	tag_id: z.string().min(1, 'tag_id is required'),
});

function requireAuthenticatedUserId(req: AuthenticatedRequest): string {
	return req.user?.sub ?? '';
}

function requireTagId(req: Request): string {
	const { tagId } = req.params as { tagId?: string };
	return typeof tagId === 'string' ? tagId : '';
}

function requireTaskId(req: Request): string {
	const { taskId } = req.params as { taskId?: string };
	return typeof taskId === 'string' ? taskId : '';
}

export async function createTagController(req: AuthenticatedRequest, res: Response) {
	const payload = createTagSchema.parse(req.body ?? {});
	const requestPayload: {
		requester_id: string;
		name: string;
		color?: string;
	} = {
		requester_id: requireAuthenticatedUserId(req),
		name: payload.name,
	};

	if (payload.color !== undefined) {
		requestPayload.color = payload.color;
	}

	const response = await createTagWithTagService(requestPayload);
	res.status(201).json(response);
}

export async function listTagsController(req: AuthenticatedRequest, res: Response) {
	const payload = listTagsSchema.parse(req.query);
	const requestPayload: {
		requester_id: string;
		page?: number;
		limit?: number;
	} = {
		requester_id: requireAuthenticatedUserId(req),
	};

	if (payload.page !== undefined) requestPayload.page = payload.page;
	if (payload.limit !== undefined) requestPayload.limit = payload.limit;

	const response = await listTagsWithTagService(requestPayload);
	res.status(200).json(response);
}

export async function getTagController(req: AuthenticatedRequest, res: Response) {
	const response = await getTagWithTagService({
		requester_id: requireAuthenticatedUserId(req),
		tag_id: requireTagId(req),
	});
	res.status(200).json(response);
}

export async function updateTagController(req: AuthenticatedRequest, res: Response) {
	const payload = updateTagSchema.parse(req.body ?? {});
	const requestPayload: {
		requester_id: string;
		tag_id: string;
		name?: string;
		color?: string;
	} = {
		requester_id: requireAuthenticatedUserId(req),
		tag_id: requireTagId(req),
	};

	if (payload.name !== undefined) requestPayload.name = payload.name;
	if (payload.color !== undefined) requestPayload.color = payload.color;

	const response = await updateTagWithTagService(requestPayload);
	res.status(200).json(response);
}

export async function deleteTagController(req: AuthenticatedRequest, res: Response) {
	const response = await deleteTagWithTagService({
		requester_id: requireAuthenticatedUserId(req),
		tag_id: requireTagId(req),
	});
	res.status(200).json(response);
}

export async function listTagsForTaskController(req: AuthenticatedRequest, res: Response) {
	const response = await listTagsForTaskWithTagService({
		requester_id: requireAuthenticatedUserId(req),
		task_id: requireTaskId(req),
	});
	res.status(200).json(response);
}

export async function addTagToTaskController(req: AuthenticatedRequest, res: Response) {
	const payload = addTagToTaskSchema.parse(req.body ?? {});
	const response = await addTagToTaskWithTagService({
		requester_id: requireAuthenticatedUserId(req),
		task_id: requireTaskId(req),
		tag_id: payload.tag_id,
	});
	res.status(200).json(response);
}

export async function removeTagFromTaskController(req: AuthenticatedRequest, res: Response) {
	const response = await removeTagFromTaskWithTagService({
		requester_id: requireAuthenticatedUserId(req),
		task_id: requireTaskId(req),
		tag_id: requireTagId(req),
	});
	res.status(200).json(response);
}
