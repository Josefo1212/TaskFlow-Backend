import { randomBytes } from 'crypto';
import bcrypt from 'bcryptjs';
import {
	createAuthLog,
	createSession,
	createUser,
	deactivateSessionByRefreshToken,
	findActiveSessionByRefreshToken,
	findUserByEmail,
} from '../queries/auth.queries';

const jwt: any = require('jsonwebtoken');

// --- Tipos ---
export interface RegisterInput {
	name: string;
	email: string;
	password: string;
	ip: string | null;
	userAgent: string | null;
}

export interface LoginInput {
	email: string;
	password: string;
	ip: string | null;
	userAgent: string | null;
}

export interface LogoutInput {
	refreshToken: string;
	ip: string | null;
}

export interface AuthSessionResult {
	user: {
		id: string;
		email: string;
		name: string;
	};
	accessToken: string;
	refreshToken: string;
	refreshExpiresAt: Date;
	sessionId: string;
}

export type RegisterResult = AuthSessionResult;
export type LoginResult = AuthSessionResult;

export interface LogoutResult {
	message: string;
}

// --- Errores ---
export class AuthServiceError extends Error {
	statusCode: number;

	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
	}
}

// --- Config ---
export interface AuthRuntimeConfig {
	jwtSecret: string;
	jwtAccessExpiresIn: string;
	refreshTokenTtlDays: number;
}

export function getAuthRuntimeConfig(): AuthRuntimeConfig {
	const jwtSecret = process.env.JWT_SECRET;
	if (!jwtSecret) {
		throw new AuthServiceError('JWT_SECRET is not configured', 500);
	}

	const refreshTokenTtlDays = Number(process.env.REFRESH_TOKEN_TTL_DAYS ?? 7);

	return {
		jwtSecret,
		jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '15m',
		refreshTokenTtlDays,
	};
}

// --- Token ---
interface AccessTokenPayload {
	sub: string;
	email: string;
	name: string;
}

export function generateAccessToken(
	payload: AccessTokenPayload,
	jwtSecret: string,
	expiresIn: string,
): string {
	return jwt.sign(payload, jwtSecret, { expiresIn });
}

export function generateRefreshToken(): string {
	return randomBytes(48).toString('hex');
}

export function calculateRefreshExpiration(ttlDays: number): Date {
	return new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1000);
}

async function createSessionWithTokens(params: {
	user: { id: string; email: string; name: string };
	ip: string | null;
	userAgent: string | null;
}): Promise<AuthSessionResult> {
	const config = getAuthRuntimeConfig();
	const accessToken = generateAccessToken(
		{
			sub: params.user.id,
			email: params.user.email,
			name: params.user.name,
		},
		config.jwtSecret,
		config.jwtAccessExpiresIn,
	);

	const refreshToken = generateRefreshToken();
	const refreshExpiresAt = calculateRefreshExpiration(config.refreshTokenTtlDays);
	const session = await createSession({
		userId: params.user.id,
		ip: params.ip,
		refreshToken,
		refreshExpiresAt,
		userAgent: params.userAgent,
	});

	return {
		user: {
			id: params.user.id,
			email: params.user.email,
			name: params.user.name,
		},
		accessToken,
		refreshToken: session.refresh_token,
		refreshExpiresAt: session.refresh_expires_at,
		sessionId: session.id,
	};
}

export async function register(input: RegisterInput): Promise<RegisterResult> {
	const name = input.name?.trim();
	const email = input.email?.trim().toLowerCase();
	const password = input.password;

	if (!name || !email || !password) {
		throw new AuthServiceError('Name, email and password are required', 400);
	}

	if (password.length < 8) {
		throw new AuthServiceError('Password must be at least 8 characters', 400);
	}

	const existingUser = await findUserByEmail(email);
	if (existingUser) {
		throw new AuthServiceError('Email already registered', 409);
	}

	const passwordHash = await bcrypt.hash(password, 10);
	const user = await createUser({
		name,
		email,
		passwordHash,
	});

	const sessionResult = await createSessionWithTokens({
		user,
		ip: input.ip,
		userAgent: input.userAgent,
	});

	await createAuthLog({
		userId: user.id,
		sessionId: sessionResult.sessionId,
		action: 'register_success',
		tableName: 'users',
		recordId: user.id,
		metadata: { email: user.email },
		ip: input.ip,
	});

	return sessionResult;
}

export async function login(input: LoginInput): Promise<LoginResult> {
	const email = input.email?.trim().toLowerCase();
	const password = input.password;

	if (!email || !password) {
		throw new AuthServiceError('Email and password are required', 400);
	}

	const user = await findUserByEmail(email);
	if (!user) {
		throw new AuthServiceError('Invalid credentials', 401);
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		throw new AuthServiceError('Invalid credentials', 401);
	}

	const sessionResult = await createSessionWithTokens({
		user: {
			id: user.id,
			email: user.email,
			name: user.name,
		},
		ip: input.ip,
		userAgent: input.userAgent,
	});

	await createAuthLog({
		userId: user.id,
		sessionId: sessionResult.sessionId,
		action: 'login_success',
		tableName: 'sessions',
		recordId: sessionResult.sessionId,
		metadata: { email: user.email },
		ip: input.ip,
	});

	return sessionResult;
}

export async function logout(input: LogoutInput): Promise<LogoutResult> {
	const refreshToken = input.refreshToken?.trim();

	if (!refreshToken) {
		throw new AuthServiceError('refreshToken is required', 400);
	}

	const activeSession = await findActiveSessionByRefreshToken(refreshToken);
	if (!activeSession) {
		return { message: 'Session already closed or token invalid' };
	}

	const deactivatedSessionId = await deactivateSessionByRefreshToken(refreshToken);
	if (!deactivatedSessionId) {
		return { message: 'Session already closed or token invalid' };
	}

	await createAuthLog({
		userId: activeSession.user_id,
		sessionId: activeSession.id,
		action: 'logout_success',
		tableName: 'sessions',
		recordId: activeSession.id,
		metadata: {},
		ip: input.ip,
	});

	return { message: 'Logout successful' };
}
