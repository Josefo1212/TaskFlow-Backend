import bcrypt from 'bcryptjs';
import {
	createUser,
	findUserByEmail,
	findUserByUser,
	updateUserPasswordByUser,
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
	getPasswordResetUser,
	storePasswordResetToken,
} from '../utils/password-reset';

// --- Tipos ---
export interface RegisterInput {
	user: string;
	email: string;
	password: string;
}

export interface LoginInput {
	user: string;
	password: string;
}

export interface LogoutInput {
	refreshToken: string;
}

export interface RefreshInput {
	refreshToken: string;
}

export interface ForgotPasswordInput {
	user: string;
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
		user: string;
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
			user: user.user,
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
			user: user.user,
		},
		accessToken,
		refreshToken,
		refreshExpiresAt,
	};
}

export async function register(input: RegisterInput): Promise<RegisterResult> {
	const username = input.user?.trim();
	const email = input.email?.trim().toLowerCase();
	const password = input.password;

	if (!username || !email || !password) {
		throw new AuthServiceError('User, email and password are required', 400);
	}

	if (username.length > 250) {
		throw new AuthServiceError('User must be at most 250 characters', 400);
	}

	if (email.length > 250) {
		throw new AuthServiceError('Email must be at most 250 characters', 400);
	}

	if (password.length < 8 || password.length > 15) {
		throw new AuthServiceError('Password must be between 8 and 15 characters', 400);
	}

	const existingUser = await findUserByEmail(email);
	if (existingUser) {
		throw new AuthServiceError('Email already registered', 409);
	}

	const existingUsername = await findUserByUser(username);
	if (existingUsername) {
		throw new AuthServiceError('Username already registered', 409);
	}

	const passwordHash = await bcrypt.hash(password, 10);
	const createdUser = await createUser({
		user: username,
		email,
		passwordHash,
	});

	return issueTokensForUser(createdUser);
}

export async function login(input: LoginInput): Promise<LoginResult> {
	const user = input.user?.trim();
	const password = input.password;

	if (!user || !password) {
		throw new AuthServiceError('Username and password are required', 400);
	}

	const found = await findUserByUser(user);
	if (!found) {
		throw new AuthServiceError('Invalid credentials', 401);
	}

	const isPasswordValid = await bcrypt.compare(password, found.password);
	if (!isPasswordValid) {
		throw new AuthServiceError('Invalid credentials', 401);
	}

	return issueTokensForUser({
		id: found.id,
		email: found.email,
		user: found.user,
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
			user: user.user,
		},
		config.jwtSecret,
		config.jwtAccessExpiresIn,
	);

	return { accessToken };
}

export async function forgotPassword(input: ForgotPasswordInput): Promise<ForgotPasswordResult> {
	const user = input.user?.trim();
	if (!user) {
		throw new AuthServiceError('User is required', 400);
	}

	const ttlMinutes = Number(process.env.PASSWORD_RESET_TTL_MINUTES ?? 15);
	const token = generatePasswordResetToken();

	// Guardamos el nombre; si el usuario no existe, guardamos un marcador para no filtrar info.
	const found = await findUserByUser(user);
	await storePasswordResetToken(token, found ? found.user : '__invalid__', ttlMinutes);
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

	if (password.length < 8 || password.length > 15) {
		throw new AuthServiceError('Password must be between 8 and 15 characters', 400);
	}

	const user = await getPasswordResetUser(token);
	if (!user || user === '__invalid__') {
		throw new AuthServiceError('Token is invalid or expired', 400);
	}

	const found = await findUserByUser(user);
	if (!found) {
		await deletePasswordResetToken(token);
		throw new AuthServiceError('Token is invalid or expired', 400);
	}

	const passwordHash = await bcrypt.hash(password, 10);
	const updated = await updateUserPasswordByUser(user, passwordHash);
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
