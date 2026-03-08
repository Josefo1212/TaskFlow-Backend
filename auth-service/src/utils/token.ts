import { randomBytes } from 'crypto';
import jwt, { SignOptions } from 'jsonwebtoken';
import { AuthServiceError } from './auth-errors';

type JwtExpiresIn = NonNullable<SignOptions['expiresIn']>;

export interface AuthRuntimeConfig {
	jwtSecret: string;
	jwtAccessExpiresIn: JwtExpiresIn;
	refreshTokenTtlDays: number;
}

export interface AccessTokenPayload {
	sub: string;
	email: string;
	name: string;
}

export function getAuthRuntimeConfig(): AuthRuntimeConfig {
	const jwtSecret = process.env.JWT_SECRET;
	if (!jwtSecret) {
		throw new AuthServiceError('JWT_SECRET is not configured', 500);
	}

	const refreshTokenTtlDays = Number(process.env.REFRESH_TOKEN_TTL_DAYS ?? 7);

	return {
		jwtSecret,
		jwtAccessExpiresIn: (process.env.JWT_ACCESS_EXPIRES_IN ?? '15m') as JwtExpiresIn,
		refreshTokenTtlDays,
	};
}

export function generateAccessToken(
	payload: AccessTokenPayload,
	jwtSecret: string,
	expiresIn: JwtExpiresIn,
): string {
	const options: SignOptions = { expiresIn };

	return jwt.sign(payload, jwtSecret, options);
}

export function generateRefreshToken(): string {
	return randomBytes(48).toString('hex');
}

export function calculateRefreshExpiration(ttlDays: number): Date {
	return new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1000);
}