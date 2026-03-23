import { Request, Response } from 'express';
import { z } from 'zod';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
import {
	addProjectMemberWithProjectService,
	createProjectWithProjectService,
	deleteProjectWithProjectService,
	getProjectWithProjectService,
	listProjectMembersWithProjectService,
	listProjectsWithProjectService,
	removeProjectMemberWithProjectService,
	updateProjectMemberRoleWithProjectService,
	updateProjectWithProjectService,
} from '../services/project.service';

function requireAuthenticatedUserId(req: AuthenticatedRequest): string {
	return req.user?.sub ?? '';
}

function requireProjectId(req: Request): string {
	const { projectId } = req.params as { projectId?: string };
	return typeof projectId === 'string' ? projectId : '';
}

function requireUserIdParam(req: Request): string {
	const { userId } = req.params as { userId?: string };
	return typeof userId === 'string' ? userId : '';
}

const createProjectSchema = z.object({
	name: z.string().trim().min(1, 'name is required').max(200, 'name must be at most 200 characters'),
	description: z.string().trim().max(600, 'description must be at most 600 characters').optional(),
});

const listProjectsSchema = z.object({
	page: z.coerce.number().int().positive().optional(),
	limit: z.coerce.number().int().positive().optional(),
});

const updateProjectSchema = z
	.object({
		name: z.string().trim().min(1).max(200, 'name must be at most 200 characters').optional(),
		description: z.string().trim().max(600, 'description must be at most 600 characters').optional(),
	})
	.refine((data) => data.name !== undefined || data.description !== undefined, {
		message: 'name or description is required',
	});

const addMemberSchema = z.preprocess((input) => {
	if (!input || typeof input !== 'object') return input;
	const body = input as Record<string, unknown>;
	return {
		user_id: body.user_id ?? body.userId,
		role: body.role,
	};
}, z.object({
	user_id: z.string().min(1, 'user_id is required'),
	role: z.string().optional(),
}));

const updateMemberRoleSchema = z.object({
	role: z.string().min(1, 'role is required'),
});

export async function createProjectController(req: AuthenticatedRequest, res: Response) {
	const payload = createProjectSchema.parse(req.body ?? {});
	const requestPayload: Parameters<typeof createProjectWithProjectService>[0] = {
		requester_id: requireAuthenticatedUserId(req),
		name: payload.name,
	};

	if (payload.description !== undefined) {
		requestPayload.description = payload.description;
	}

	const response = await createProjectWithProjectService(requestPayload);

	res.status(201).json(response);
}

export async function listProjectsController(req: AuthenticatedRequest, res: Response) {
	const payload = listProjectsSchema.parse(req.query);
	const requestPayload: Parameters<typeof listProjectsWithProjectService>[0] = {
		requester_id: requireAuthenticatedUserId(req),
	};

	if (payload.page !== undefined) {
		requestPayload.page = payload.page;
	}

	if (payload.limit !== undefined) {
		requestPayload.limit = payload.limit;
	}

	const response = await listProjectsWithProjectService(requestPayload);

	res.status(200).json(response);
}

export async function getProjectController(req: AuthenticatedRequest, res: Response) {
	const response = await getProjectWithProjectService({
		requester_id: requireAuthenticatedUserId(req),
		project_id: requireProjectId(req),
	});

	res.status(200).json(response);
}

export async function updateProjectController(req: AuthenticatedRequest, res: Response) {
	const payload = updateProjectSchema.parse(req.body ?? {});
	const requestPayload: Parameters<typeof updateProjectWithProjectService>[0] = {
		requester_id: requireAuthenticatedUserId(req),
		project_id: requireProjectId(req),
	};

	if (payload.name !== undefined) {
		requestPayload.name = payload.name;
	}

	if (payload.description !== undefined) {
		requestPayload.description = payload.description;
	}

	const response = await updateProjectWithProjectService(requestPayload);

	res.status(200).json(response);
}

export async function deleteProjectController(req: AuthenticatedRequest, res: Response) {
	const response = await deleteProjectWithProjectService({
		requester_id: requireAuthenticatedUserId(req),
		project_id: requireProjectId(req),
	});

	res.status(200).json(response);
}

export async function addProjectMemberController(req: AuthenticatedRequest, res: Response) {
	const payload = addMemberSchema.parse(req.body ?? {});
	const requestPayload: Parameters<typeof addProjectMemberWithProjectService>[0] = {
		requester_id: requireAuthenticatedUserId(req),
		project_id: requireProjectId(req),
		user_id: payload.user_id,
	};

	if (payload.role !== undefined) {
		requestPayload.role = payload.role;
	}

	const response = await addProjectMemberWithProjectService(requestPayload);

	res.status(201).json(response);
}

export async function listProjectMembersController(req: AuthenticatedRequest, res: Response) {
	const response = await listProjectMembersWithProjectService({
		requester_id: requireAuthenticatedUserId(req),
		project_id: requireProjectId(req),
	});

	res.status(200).json(response);
}

export async function updateProjectMemberRoleController(req: AuthenticatedRequest, res: Response) {
	const payload = updateMemberRoleSchema.parse(req.body ?? {});

	const response = await updateProjectMemberRoleWithProjectService({
		requester_id: requireAuthenticatedUserId(req),
		project_id: requireProjectId(req),
		user_id: requireUserIdParam(req),
		role: payload.role,
	});

	res.status(200).json(response);
}

export async function removeProjectMemberController(req: AuthenticatedRequest, res: Response) {
	const response = await removeProjectMemberWithProjectService({
		requester_id: requireAuthenticatedUserId(req),
		project_id: requireProjectId(req),
		user_id: requireUserIdParam(req),
	});

	res.status(200).json(response);
}
