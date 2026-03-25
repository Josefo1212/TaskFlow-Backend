import { Request, Response } from 'express';
import { z } from 'zod';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
import { GatewayError } from '../utils/grpc-error-mapper';
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
		phone: z
			.string()
			.trim()
			.min(7, 'El campo "phone" debe tener al menos 7 dígitos.')
			.max(30, 'El campo "phone" debe tener como máximo 30 caracteres.')
			.optional(),
		bio: z
			.string()
			.max(1000, 'El campo "bio" debe tener como máximo 1000 caracteres.')
			.nullable()
			.optional(),
	})
	.refine((data) => data.phone !== undefined || data.bio !== undefined, {
		message: 'Debes enviar al menos "phone" o "bio".',
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
	const userId = req.user?.sub;
	if (!userId) {
		throw new GatewayError('No autorizado.', 401);
	}
	return userId;
}

function requireRouteUserId(req: Request): string {
	const { userId } = req.params;
	if (typeof userId !== 'string' || !userId.trim()) {
		throw new GatewayError('Se requiere el parámetro "userId".', 400);
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
		phone?: string;
		bio?: string;
	} = {
		user_id: requireAuthenticatedUserId(req),
	};

	if (payload.phone !== undefined) {
		requestPayload.phone = payload.phone;
	}

	if (payload.bio !== undefined) {
		requestPayload.bio = payload.bio ?? '';
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