import pool from '../config/database';
import rawQueries from './queries.json';

type SqlMap = Record<string, string>;

interface UserRecord {
	id: string;
	email: string;
	password: string;
	user: string;
}

interface CreatedUserRecord {
	id: string;
	email: string;
	user: string;
}

interface CreateUserParams {
	user: string;
	email: string;
	passwordHash: string;
}

interface UpdatedUserRecord {
	id: string;
	email: string;
	user: string;
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

export async function findUserByUser(user: string): Promise<UserRecord | null> {
	const { rows } = await pool.query<UserRecord>(getQuery('auth.getUserByUser'), [user]);
	return rows[0] ?? null;
}

export async function createUser(params: CreateUserParams): Promise<CreatedUserRecord> {
	const { user, email, passwordHash } = params;

	const { rows } = await pool.query<CreatedUserRecord>(getQuery('auth.createUser'), [
		user,
		email,
		passwordHash,
	]);

	const createdUser = rows[0];
	if (!createdUser) {
		throw new Error('Failed to create user');
	}

	return createdUser;
}

export async function updateUserPasswordByEmail(
	email: string,
	passwordHash: string,
): Promise<UpdatedUserRecord | null> {
	const { rows } = await pool.query<UpdatedUserRecord>(getQuery('auth.updateUserPasswordByEmail'), [
		passwordHash,
		email,
	]);
	return rows[0] ?? null;
}

export async function updateUserPasswordByUser(
	user: string,
	passwordHash: string,
): Promise<UpdatedUserRecord | null> {
	const { rows } = await pool.query<UpdatedUserRecord>(getQuery('auth.updateUserPasswordByUser'), [
		passwordHash,
		user,
	]);
	return rows[0] ?? null;
}
