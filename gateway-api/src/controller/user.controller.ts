import { Request, Response } from 'express';
import { z } from 'zod';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
import {
	checkUserExistsWithUserService,
	getBasicInfoWithUserService,
	getProfileWithUserService,
	getUsersByIdsWithUserService,
	listUsersWithUserService,
	searchUsersWithUserService,
	updateProfileWithUserService,
} from '../services/user.service';

const updateProfileSchema = z
	.object({
		name: z.string().min(1, 'name cannot be empty').optional(),
		email: z.email('email must be valid').optional(),
	})
	.refine((data) => data.name !== undefined || data.email !== undefined, {
		message: 'name or email is required',
	});

const listUsersSchema = z.object({
	page: z.coerce.number().int().positive().optional(),
	limit: z.coerce.number().int().positive().optional(),
	search: z.string().optional(),
});

const searchUsersSchema = z.object({
	query: z.string().optional().default(''),
	limit: z.coerce.number().int().positive().optional(),
});

const getUsersByIdsSchema = z.object({
	user_ids: z.array(z.string().min(1)).default([]),
});

function requireAuthenticatedUserId(req: AuthenticatedRequest): string {
	return req.user?.sub ?? '';
}

function requireRouteUserId(req: Request): string {
	const { userId } = req.params;
	if (typeof userId !== 'string' || !userId.trim()) {
		return '';
	}

	return userId;
}

export async function getMyProfileController(req: AuthenticatedRequest, res: Response) {
	const response = await getProfileWithUserService({
		user_id: requireAuthenticatedUserId(req),
	});

	res.status(200).json(response);
}

export async function updateMyProfileController(req: AuthenticatedRequest, res: Response) {
	const payload = updateProfileSchema.parse(req.body ?? {});
	const requestPayload: {
		user_id: string;
		name?: string;
		email?: string;
	} = {
		user_id: requireAuthenticatedUserId(req),
	};

	if (payload.name !== undefined) {
		requestPayload.name = payload.name;
	}

	if (payload.email !== undefined) {
		requestPayload.email = payload.email;
	}

	const response = await updateProfileWithUserService(requestPayload);

	res.status(200).json(response);
}

export async function listUsersController(req: Request, res: Response) {
	const payload = listUsersSchema.parse(req.query);
	const requestPayload: {
		page?: number;
		limit?: number;
		search?: string;
	} = {};

	if (payload.page !== undefined) {
		requestPayload.page = payload.page;
	}

	if (payload.limit !== undefined) {
		requestPayload.limit = payload.limit;
	}

	if (payload.search !== undefined) {
		requestPayload.search = payload.search;
	}

	const response = await listUsersWithUserService(requestPayload);

	res.status(200).json(response);
}

export async function searchUsersController(req: Request, res: Response) {
	const payload = searchUsersSchema.parse(req.query);
	const requestPayload: {
		query: string;
		limit?: number;
	} = {
		query: payload.query,
	};

	if (payload.limit !== undefined) {
		requestPayload.limit = payload.limit;
	}

	const response = await searchUsersWithUserService(requestPayload);

	res.status(200).json(response);
}

export async function getUsersByIdsController(req: Request, res: Response) {
	const payload = getUsersByIdsSchema.parse(req.body ?? {});
	const response = await getUsersByIdsWithUserService(payload);

	res.status(200).json(response);
}

export async function checkUserExistsController(req: Request, res: Response) {
	const response = await checkUserExistsWithUserService({
		user_id: requireRouteUserId(req),
	});

	res.status(200).json(response);
}

export async function getBasicInfoController(req: Request, res: Response) {
	const response = await getBasicInfoWithUserService({
		user_id: requireRouteUserId(req),
	});

	res.status(200).json(response);
}