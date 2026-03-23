import {
	countUsersQuery,
	findUserByEmail,
	findUserById,
	findUserByUser,
	getUsersByIdsQuery,
	listUsersQuery,
	searchUsersQuery,
	updateUserProfile,
	UserBasicRow,
	UserRow,
} from '../queries/user.queries';
import { UserServiceError } from '../utils/user-errors';

export interface UserProfile {
	id: string;
	user: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

export interface UserBasic {
	id: string;
	user: string;
	email: string;
}

interface GetProfileInput {
	userId: string;
}

interface UpdateProfileInput {
	userId: string;
	user?: string;
	email?: string;
}

interface ListUsersInput {
	page?: number;
	limit?: number;
	search?: string;
}

interface SearchUsersInput {
	query?: string;
	limit?: number;
}

interface GetUsersByIdsInput {
	userIds: string[];
}

interface CheckUserExistsInput {
	userId: string;
}

interface GetBasicInfoInput {
	userId: string;
}

interface ListUsersResult {
	users: UserProfile[];
	total: number;
	page: number;
	limit: number;
}

interface CheckUserExistsResult {
	exists: boolean;
	user?: UserBasic;
}

function formatTimestamp(value: string | Date): string {
	const date = value instanceof Date ? value : new Date(value);
	return date.toISOString();
}

function mapUserRow(row: UserRow): UserProfile {
	return {
		id: row.id,
		user: row.user,
		email: row.email,
		createdAt: formatTimestamp(row.created_at),
		updatedAt: formatTimestamp(row.updated_at),
	};
}

function mapUserBasicRow(row: UserBasicRow): UserBasic {
	return {
		id: row.id,
		user: row.user,
		email: row.email,
	};
}

function normalizeUserId(userId: string): string {
	const normalized = userId.trim();
	if (!normalized) {
		throw new UserServiceError('user_id is required', 400);
	}

	return normalized;
}

function normalizeOptionalUser(user?: string): string | undefined {
	if (user === undefined) {
		return undefined;
	}

	const normalized = user.trim();
	if (!normalized) {
		throw new UserServiceError('user cannot be empty', 400);
	}

	if (normalized.length > 250) {
		throw new UserServiceError('user must be at most 250 characters', 400);
	}

	return normalized;
}

function normalizeOptionalEmail(email?: string): string | undefined {
	if (email === undefined) {
		return undefined;
	}

	const normalized = email.trim().toLowerCase();
	if (!normalized) {
		throw new UserServiceError('email cannot be empty', 400);
	}

	if (normalized.length > 250) {
		throw new UserServiceError('email must be at most 250 characters', 400);
	}

	return normalized;
}

function normalizePage(value?: number): number {
	if (!value || value < 1) {
		return 1;
	}

	return Math.floor(value);
}

function normalizeLimit(value: number | undefined, max: number, fallback: number): number {
	if (!value || value < 1) {
		return fallback;
	}

	return Math.min(Math.floor(value), max);
}

export async function getProfile(input: GetProfileInput): Promise<UserProfile> {
	const userId = normalizeUserId(input.userId);
	const user = await findUserById(userId);

	if (!user) {
		throw new UserServiceError('User not found', 404);
	}

	return mapUserRow(user);
}

export async function updateProfile(input: UpdateProfileInput): Promise<UserProfile> {
	const userId = normalizeUserId(input.userId);
	const existingUser = await findUserById(userId);

	if (!existingUser) {
		throw new UserServiceError('User not found', 404);
	}

	const nextUser = normalizeOptionalUser(input.user) ?? existingUser.user;
	const nextEmail = normalizeOptionalEmail(input.email) ?? existingUser.email;

	if (nextEmail !== existingUser.email) {
		const userWithEmail = await findUserByEmail(nextEmail);
		if (userWithEmail && userWithEmail.id !== userId) {
			throw new UserServiceError('Email already registered', 409);
		}
	}

	if (nextUser !== existingUser.user) {
		const userWithName = await findUserByUser(nextUser);
		if (userWithName && userWithName.id !== userId) {
			throw new UserServiceError('Username already registered', 409);
		}
	}

	const updatedUser = await updateUserProfile(userId, nextUser, nextEmail);
	return mapUserRow(updatedUser);
}

export async function listUsers(input: ListUsersInput): Promise<ListUsersResult> {
	const page = normalizePage(input.page);
	const limit = normalizeLimit(input.limit, 100, 10);
	const search = input.search?.trim() ?? '';
	const offset = (page - 1) * limit;

	const [users, total] = await Promise.all([
		listUsersQuery(search, limit, offset),
		countUsersQuery(search),
	]);

	return {
		users: users.map(mapUserRow),
		total,
		page,
		limit,
	};
}

export async function searchUsers(input: SearchUsersInput): Promise<UserBasic[]> {
	const query = input.query?.trim() ?? '';
	const limit = normalizeLimit(input.limit, 50, 10);

	if (!query) {
		return [];
	}

	const users = await searchUsersQuery(query, limit);
	return users.map(mapUserBasicRow);
}

export async function getUsersByIds(input: GetUsersByIdsInput): Promise<UserBasic[]> {
	const userIds = [...new Set(input.userIds.map((userId) => userId.trim()).filter(Boolean))];
	const users = await getUsersByIdsQuery(userIds);
	return users.map(mapUserBasicRow);
}

export async function checkUserExists(input: CheckUserExistsInput): Promise<CheckUserExistsResult> {
	const userId = normalizeUserId(input.userId);
	const user = await findUserById(userId);

	if (!user) {
		return { exists: false };
	}

	return {
		exists: true,
		user: mapUserBasicRow(user),
	};
}

export async function getBasicInfo(input: GetBasicInfoInput): Promise<UserBasic> {
	const userId = normalizeUserId(input.userId);
	const user = await findUserById(userId);

	if (!user) {
		throw new UserServiceError('User not found', 404);
	}

	return mapUserBasicRow(user);
}