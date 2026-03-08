import { Request, Response } from 'express';
import { z } from 'zod';
import {
	loginWithAuthService,
	logoutWithAuthService,
	refreshWithAuthService,
	registerWithAuthService,
} from '../services/auth.service';

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
	refresh_token: z.string().min(1, 'refresh_token is required'),
});

export async function registerController(req: Request, res: Response) {
	const payload = registerSchema.parse(req.body);
	const response = await registerWithAuthService(payload);

	res.status(201).json(response);
}

export async function loginController(req: Request, res: Response) {
	const payload = loginSchema.parse(req.body);
	const response = await loginWithAuthService(payload);

	res.status(200).json(response);
}

export async function refreshController(req: Request, res: Response) {
	const payload = refreshSchema.parse(req.body);
	const response = await refreshWithAuthService(payload);

	res.status(200).json(response);
}

export async function logoutController(req: Request, res: Response) {
	const payload = refreshSchema.parse(req.body);
	const response = await logoutWithAuthService(payload);

	res.status(200).json(response);
}