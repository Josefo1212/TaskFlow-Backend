import bcrypt from 'bcryptjs';
import {
	createUser,
	findUserByEmail,
	findUserByName,
	updateUserPasswordByName,
} from '../queries/auth.queries';
import { AuthServiceError } from '../utils/auth-errors';
import {
	deleteRefreshToken,
	getRefreshTokenUser,
	storeRefreshToken,
	UserIdentity,
} from '../utils/refresh-token';
import {
	calculateRefreshExpiration,
	generateAccessToken,
	generateRefreshToken,
	getAuthRuntimeConfig,
} from '../utils/token';

import {
	deletePasswordResetToken,
	generatePasswordResetToken,
	getPasswordResetName,
	storePasswordResetToken,
} from '../utils/password-reset';

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

export interface ForgotPasswordInput {
	name: string;
}

export interface ForgotPasswordResult {
	token: string;
}

export interface ResetPasswordInput {
	token: string;
	password: string;
}

export interface ResetPasswordResult {
	message: string;
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

export async function forgotPassword(input: ForgotPasswordInput): Promise<ForgotPasswordResult> {
	const name = input.name?.trim();
	if (!name) {
		throw new AuthServiceError('Name is required', 400);
	}

	const ttlMinutes = Number(process.env.PASSWORD_RESET_TTL_MINUTES ?? 15);
	const token = generatePasswordResetToken();

	// Guardamos el nombre; si el usuario no existe, guardamos un marcador para no filtrar info.
	const user = await findUserByName(name);
	await storePasswordResetToken(token, user ? user.name : '__invalid__', ttlMinutes);
	return { token };
}

export async function resetPassword(input: ResetPasswordInput): Promise<ResetPasswordResult> {
	const token = input.token?.trim();
	const password = input.password;

	if (!token) {
		throw new AuthServiceError('Token is required', 400);
	}

	if (!password) {
		throw new AuthServiceError('Password is required', 400);
	}

	if (password.length < 8) {
		throw new AuthServiceError('Password must be at least 8 characters', 400);
	}

	const name = await getPasswordResetName(token);
	if (!name || name === '__invalid__') {
		throw new AuthServiceError('Token is invalid or expired', 400);
	}

	const user = await findUserByName(name);
	if (!user) {
		await deletePasswordResetToken(token);
		throw new AuthServiceError('Token is invalid or expired', 400);
	}

	const passwordHash = await bcrypt.hash(password, 10);
	const updated = await updateUserPasswordByName(name, passwordHash);
	await deletePasswordResetToken(token);

	if (!updated) {
		throw new AuthServiceError('Failed to update password', 500);
	}

	return { message: 'Password updated' };
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
