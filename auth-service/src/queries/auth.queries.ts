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

interface CreateUserParams {
	name: string;
	email: string;
	passwordHash: string;
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

export async function findUserByName(name: string): Promise<UserRecord | null> {
	const { rows } = await pool.query<UserRecord>(getQuery('auth.getUserByName'), [name]);
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
