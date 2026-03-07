import pool from '../config/database';
import rawQueries from './queries.json';

type SqlMap = Record<string, string>;

interface UserRecord {
	id: string;
	email: string;
	password: string;
	name: string;
}

interface CreatedUserRecord {
	id: string;
	email: string;
	name: string;
}

interface ActiveSessionRecord {
	id: string;
	user_id: string;
}

interface SessionRecord {
	id: string;
	refresh_token: string;
	refresh_expires_at: Date;
}

interface CreateSessionParams {
	userId: string;
	ip: string | null;
	refreshToken: string;
	refreshExpiresAt: Date;
	userAgent: string | null;
}

interface CreateUserParams {
	name: string;
	email: string;
	passwordHash: string;
}

interface CreateAuthLogParams {
	userId: string | null;
	sessionId: string | null;
	action: string;
	tableName: string | null;
	recordId: string | null;
	metadata?: Record<string, unknown>;
	ip: string | null;
}

const queries: SqlMap = rawQueries;

function getQuery(key: string): string {
	const sql = queries[key];
	if (!sql) {
		throw new Error(`SQL query not found for key: ${key}`);
	}
	return sql;
}

export async function findUserByEmail(email: string): Promise<UserRecord | null> {
	const { rows } = await pool.query<UserRecord>(getQuery('auth.getUserByEmail'), [email]);
	return rows[0] ?? null;
}

export async function createUser(params: CreateUserParams): Promise<CreatedUserRecord> {
	const { name, email, passwordHash } = params;

	const { rows } = await pool.query<CreatedUserRecord>(getQuery('auth.createUser'), [
		name,
		email,
		passwordHash,
	]);

	const user = rows[0];
	if (!user) {
		throw new Error('Failed to create user');
	}

	return user;
}

export async function findActiveSessionByRefreshToken(refreshToken: string): Promise<ActiveSessionRecord | null> {
	const { rows } = await pool.query<ActiveSessionRecord>(
		getQuery('auth.getActiveSessionByRefreshToken'),
		[refreshToken],
	);

	return rows[0] ?? null;
}

export async function createSession(params: CreateSessionParams): Promise<SessionRecord> {
	const { userId, ip, refreshToken, refreshExpiresAt, userAgent } = params;

	const { rows } = await pool.query<SessionRecord>(getQuery('auth.createSession'), [
		userId,
		ip,
		refreshToken,
		refreshExpiresAt,
		userAgent,
	]);

	const session = rows[0];
	if (!session) {
		throw new Error('Failed to create session');
	}

	return session;
}

export async function deactivateSessionByRefreshToken(refreshToken: string): Promise<string | null> {
	const { rows } = await pool.query<{ id: string }>(
		getQuery('auth.deactivateSessionByRefreshToken'),
		[refreshToken],
	);

	return rows[0]?.id ?? null;
}

export async function createAuthLog(params: CreateAuthLogParams): Promise<void> {
	const { userId, sessionId, action, tableName, recordId, metadata, ip } = params;

	await pool.query(getQuery('auth.insertActivityLog'), [
		userId,
		sessionId,
		action,
		tableName,
		recordId,
		JSON.stringify(metadata ?? {}),
		ip,
	]);
}
