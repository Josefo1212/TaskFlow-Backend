import { randomBytes } from 'crypto';
import bcrypt from 'bcryptjs';
import { deleteRedisKey, getRedisValue, setRedisValue } from '../config/redis';
import {
	createUser,
	findUserByEmail,
	findUserByName,
} from '../queries/auth.queries';

const jwt: any = require('jsonwebtoken');

// --- Tipos ---
export interface RegisterInput {
	name: string;
	email: string;
	password: string;
}

export interface LoginInput {
	name: string;
	password: string;
}

export interface LogoutInput {
	refreshToken: string;
}

export interface RefreshInput {
	refreshToken: string;
}

export interface AuthResult {
	user: {
		id: string;
		email: string;
		name: string;
	};
	accessToken: string;
	refreshToken: string;
	refreshExpiresAt: Date;
}

export type RegisterResult = AuthResult;
export type LoginResult = AuthResult;

export interface RefreshResult {
	accessToken: string;
}

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

interface UserIdentity {
	id: string;
	email: string;
	name: string;
}

const REFRESH_TOKEN_PREFIX = 'auth:refresh:';

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

function getRefreshTokenKey(refreshToken: string): string {
	return `${REFRESH_TOKEN_PREFIX}${refreshToken}`;
}

function getRefreshTokenTtlSeconds(ttlDays: number): number {
	return Math.max(1, Math.floor(ttlDays * 24 * 60 * 60));
}

async function storeRefreshToken(refreshToken: string, user: UserIdentity, ttlDays: number): Promise<void> {
	await setRedisValue(
		getRefreshTokenKey(refreshToken),
		JSON.stringify(user),
		getRefreshTokenTtlSeconds(ttlDays),
	);
}

async function getRefreshTokenUser(refreshToken: string): Promise<UserIdentity | null> {
	const payload = await getRedisValue(getRefreshTokenKey(refreshToken));
	if (!payload) {
		return null;
	}

	const parsed = JSON.parse(payload) as UserIdentity;
	if (!parsed.id || !parsed.email || !parsed.name) {
		return null;
	}

	return parsed;
}

async function deleteRefreshToken(refreshToken: string): Promise<boolean> {
	return deleteRedisKey(getRefreshTokenKey(refreshToken));
}

async function issueTokensForUser(user: UserIdentity): Promise<AuthResult> {
	const config = getAuthRuntimeConfig();
	const accessToken = generateAccessToken(
		{
			sub: user.id,
			email: user.email,
			name: user.name,
		},
		config.jwtSecret,
		config.jwtAccessExpiresIn,
	);

	const refreshToken = generateRefreshToken();
	const refreshExpiresAt = calculateRefreshExpiration(config.refreshTokenTtlDays);
	await storeRefreshToken(refreshToken, user, config.refreshTokenTtlDays);

	return {
		user: {
			id: user.id,
			email: user.email,
			name: user.name,
		},
		accessToken,
		refreshToken,
		refreshExpiresAt,
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

	const existingUsername = await findUserByName(name);
	if (existingUsername) {
		throw new AuthServiceError('Username already registered', 409);
	}

	const passwordHash = await bcrypt.hash(password, 10);
	const user = await createUser({
		name,
		email,
		passwordHash,
	});

	return issueTokensForUser(user);
}

export async function login(input: LoginInput): Promise<LoginResult> {
	const name = input.name?.trim();
	const password = input.password;

	if (!name || !password) {
		throw new AuthServiceError('Username and password are required', 400);
	}

	const user = await findUserByName(name);
	if (!user) {
		throw new AuthServiceError('Invalid credentials', 401);
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		throw new AuthServiceError('Invalid credentials', 401);
	}

	return issueTokensForUser({
		id: user.id,
		email: user.email,
		name: user.name,
	});
}

export async function refresh(input: RefreshInput): Promise<RefreshResult> {
	const refreshToken = input.refreshToken?.trim();

	if (!refreshToken) {
		throw new AuthServiceError('refreshToken is required', 400);
	}

	const user = await getRefreshTokenUser(refreshToken);
	if (!user) {
		throw new AuthServiceError('Refresh token is invalid or expired', 401);
	}

	const config = getAuthRuntimeConfig();
	const accessToken = generateAccessToken(
		{
			sub: user.id,
			email: user.email,
			name: user.name,
		},
		config.jwtSecret,
		config.jwtAccessExpiresIn,
	);

	return { accessToken };
}

export async function logout(input: LogoutInput): Promise<LogoutResult> {
	const refreshToken = input.refreshToken?.trim();

	if (!refreshToken) {
		throw new AuthServiceError('refreshToken is required', 400);
	}

	const deleted = await deleteRefreshToken(refreshToken);
	if (!deleted) {
		return { message: 'Refresh token already removed or invalid' };
	}

	return { message: 'Logout successful' };
}
