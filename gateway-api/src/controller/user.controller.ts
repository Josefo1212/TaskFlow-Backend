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
		user: z
			.string()
			.min(1, 'El campo "user" no puede estar vacío.')
			.max(250, 'El campo "user" debe tener como máximo 250 caracteres.')
			.optional(),
		email: z
			.email('El campo "email" debe ser un correo válido.')
			.max(250, 'El campo "email" debe tener como máximo 250 caracteres.')
			.optional(),
	})
	.refine((data) => data.user !== undefined || data.email !== undefined, {
		message: 'Debes enviar al menos "user" o "email".',
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
		user?: string;
		email?: string;
	} = {
		user_id: requireAuthenticatedUserId(req),
	};

	if (payload.user !== undefined) {
		requestPayload.user = payload.user;
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