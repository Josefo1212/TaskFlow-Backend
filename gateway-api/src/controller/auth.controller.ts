import { Request, Response } from 'express';
import { z } from 'zod';
import {
	forgotPasswordWithAuthService,
	loginWithAuthService,
	logoutWithAuthService,
	refreshWithAuthService,
	registerWithAuthService,
	resetPasswordWithAuthService,
} from '../services/auth.service';
import { AuthenticatedRequest } from '../middleware/auth.middleware';
import {
	clearRefreshTokenCookie,
	readRefreshTokenCookie,
	setRefreshTokenCookie,
} from '../utils/auth-cookie';
import { GatewayError } from '../utils/grpc-error-mapper';

const registerSchema = z.object({
	user: z.string().min(1, 'user is required').max(250, 'user must be at most 250 characters'),
	email: z.email('email must be valid').max(250, 'email must be at most 250 characters'),
	password: z
		.string()
		.min(8, 'password must have at least 8 characters')
		.max(15, 'password must be at most 15 characters'),
});

const loginSchema = z.object({
	user: z.string().min(1, 'user is required'),
	password: z.string().min(1, 'password is required'),
});

const refreshSchema = z.object({
	refresh_token: z.string().min(1, 'refresh_token is required').optional(),
});

const forgotPasswordSchema = z.object({
	user: z.string().min(1, 'user is required'),
});

const resetPasswordSchema = z.object({
	token: z.string().min(1, 'token is required'),
	password: z
		.string()
		.min(8, 'password must have at least 8 characters')
		.max(15, 'password must be at most 15 characters'),
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
		user: response.user,
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

export async function forgotPasswordController(req: Request, res: Response) {
	const payload = forgotPasswordSchema.parse(req.body);
	const response = await forgotPasswordWithAuthService({ user: payload.user });
	res.status(200).json(response);
}

export async function resetPasswordController(req: Request, res: Response) {
	const payload = resetPasswordSchema.parse(req.body);
	const response = await resetPasswordWithAuthService(payload);
	res.status(200).json(response);
}