import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { env } from '../config/env';
import { GatewayError } from '../utils/grpc-error-mapper';

export interface AuthenticatedUserPayload extends JwtPayload {
	sub: string;
	email: string;
	user: string;
}

export interface AuthenticatedRequest extends Request {
	user?: AuthenticatedUserPayload;
}

function extractAccessToken(req: Request): string | null {
	const authorizationHeader = req.headers.authorization;

	if (authorizationHeader?.startsWith('Bearer ')) {
		return authorizationHeader.slice('Bearer '.length).trim();
	}

	const cookieToken = req.cookies?.access_token;
	if (typeof cookieToken === 'string' && cookieToken.trim()) {
		return cookieToken.trim();
	}

	return null;
}

export function authenticateRequest(req: AuthenticatedRequest, _res: Response, next: NextFunction) {
	const token = extractAccessToken(req);

	if (!token) {
		next(new GatewayError('Se requiere el access token.', 401));
		return;
	}

	try {
		const decoded = jwt.verify(token, env.JWT_SECRET);

		if (
			typeof decoded !== 'object' ||
			decoded === null ||
			typeof decoded.sub !== 'string' ||
			typeof decoded.email !== 'string' ||
			typeof decoded.user !== 'string'
		) {
			throw new GatewayError('El access token tiene un contenido inválido.', 401);
		}

		req.user = decoded as AuthenticatedUserPayload;
		next();
	} catch (error) {
		if (error instanceof GatewayError) {
			next(error);
			return;
		}

		next(new GatewayError('Access token inválido o expirado.', 401));
	}
}