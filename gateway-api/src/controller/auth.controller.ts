import { Request, Response } from 'express';
import { z } from 'zod';
import {
	loginWithAuthService,
	logoutWithAuthService,
	refreshWithAuthService,
	registerWithAuthService,
} from '../services/auth.service';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
import {
	clearRefreshTokenCookie,
	readRefreshTokenCookie,
	setRefreshTokenCookie,
} from '../utils/auth-cookie';
import { GatewayError } from '../utils/grpc-error-mapper';

const registerSchema = z.object({
	name: z.string().min(1, 'name is required'),
	email: z.email('email must be valid'),
	password: z.string().min(6, 'password must have at least 6 characters'),
});

const loginSchema = z.object({
	name: z.string().min(1, 'name is required'),
	password: z.string().min(1, 'password is required'),
});

const refreshSchema = z.object({
	refresh_token: z.string().min(1, 'refresh_token is required').optional(),
});

function getRefreshTokenFromRequest(req: Request): string {
	const cookieToken = readRefreshTokenCookie(req.cookies as Record<string, unknown> | undefined);
	if (cookieToken) {
		return cookieToken;
	}

	const parsedBody = refreshSchema.safeParse(req.body ?? {});
	const bodyToken = parsedBody.success ? parsedBody.data.refresh_token?.trim() : '';

	if (bodyToken) {
		return bodyToken;
	}

	throw new GatewayError('refresh_token is required', 400);
}

function buildAuthResponse(response: Awaited<ReturnType<typeof loginWithAuthService>>) {
	return {
		user_id: response.user_id,
		email: response.email,
		name: response.name,
		access_token: response.access_token,
	};
}

export async function registerController(req: Request, res: Response) {
	const payload = registerSchema.parse(req.body);
	const response = await registerWithAuthService(payload);
	setRefreshTokenCookie(res, response.refresh_token, response.refresh_expires_at);

	res.status(201).json(buildAuthResponse(response));
}

export async function loginController(req: Request, res: Response) {
	const payload = loginSchema.parse(req.body);
	const response = await loginWithAuthService(payload);
	setRefreshTokenCookie(res, response.refresh_token, response.refresh_expires_at);

	res.status(200).json(buildAuthResponse(response));
}

export async function refreshController(req: Request, res: Response) {
	const refreshToken = getRefreshTokenFromRequest(req);

	try {
		const response = await refreshWithAuthService({ refresh_token: refreshToken });

		res.status(200).json(response);
	} catch (error) {
		clearRefreshTokenCookie(res);
		throw error;
	}
}

export async function logoutController(req: Request, res: Response) {
	const refreshToken = getRefreshTokenFromRequest(req);
	const response = await logoutWithAuthService({ refresh_token: refreshToken });
	clearRefreshTokenCookie(res);

	res.status(200).json(response);
}

export async function meController(req: AuthenticatedRequest, res: Response) {
	res.status(200).json({
		user: req.user,
	});
}