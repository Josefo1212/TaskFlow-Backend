import pool from '../config/database';
import rawQueries from './queries.json';

type SqlMap = Record<string, string>;

interface UserRow {
	id: string;
	name: string;
	email: string;
	created_at: string | Date;
	updated_at: string | Date;
}

interface UserBasicRow {
	id: string;
	name: string;
	email: string;
}

interface CountRow {
	total: number;
}

const queries: SqlMap = rawQueries;

function getQuery(key: string): string {
	const sql = queries[key];
	if (!sql) {
		throw new Error(`SQL query not found for key: ${key}`);
	}

	return sql;
}

export async function findUserById(userId: string): Promise<UserRow | null> {
	const { rows } = await pool.query<UserRow>(getQuery('user.getById'), [userId]);
	return rows[0] ?? null;
}

export async function findUserByEmail(email: string): Promise<UserRow | null> {
	const { rows } = await pool.query<UserRow>(getQuery('user.getByEmail'), [email]);
	return rows[0] ?? null;
}

export async function findUserByName(name: string): Promise<UserRow | null> {
	const { rows } = await pool.query<UserRow>(getQuery('user.getByName'), [name]);
	return rows[0] ?? null;
}

export async function updateUserProfile(userId: string, name: string, email: string): Promise<UserRow> {
	const { rows } = await pool.query<UserRow>(getQuery('user.updateProfile'), [userId, name, email]);
	const user = rows[0];

	if (!user) {
		throw new Error('Failed to update user profile');
	}

	return user;
}

export async function listUsersQuery(search: string, limit: number, offset: number): Promise<UserRow[]> {
	const searchPattern = `%${search}%`;
	const { rows } = await pool.query<UserRow>(getQuery('user.list'), [search, searchPattern, limit, offset]);
	return rows;
}

export async function countUsersQuery(search: string): Promise<number> {
	const searchPattern = `%${search}%`;
	const { rows } = await pool.query<CountRow>(getQuery('user.count'), [search, searchPattern]);
	return rows[0]?.total ?? 0;
}

export async function searchUsersQuery(query: string, limit: number): Promise<UserBasicRow[]> {
	const searchPattern = `%${query}%`;
	const { rows } = await pool.query<UserBasicRow>(getQuery('user.search'), [searchPattern, limit]);
	return rows;
}

export async function getUsersByIdsQuery(userIds: string[]): Promise<UserBasicRow[]> {
	if (userIds.length === 0) {
		return [];
	}

	const { rows } = await pool.query<UserBasicRow>(getQuery('user.getByIds'), [userIds]);
	return rows;
}

export type { UserBasicRow, UserRow };