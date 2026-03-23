import { deleteRedisKey, getRedisValue, setRedisValue } from '../config/redis';

export interface UserIdentity {
	id: string;
	email: string;
	user: string;
}

const REFRESH_TOKEN_PREFIX = 'auth:refresh:';

function getRefreshTokenKey(refreshToken: string): string {
	return `${REFRESH_TOKEN_PREFIX}${refreshToken}`;
}

function getRefreshTokenTtlSeconds(ttlDays: number): number {
	return Math.max(1, Math.floor(ttlDays * 24 * 60 * 60));
}

export async function storeRefreshToken(
	refreshToken: string,
	user: UserIdentity,
	ttlDays: number,
): Promise<void> {
	await setRedisValue(
		getRefreshTokenKey(refreshToken),
		JSON.stringify(user),
		getRefreshTokenTtlSeconds(ttlDays),
	);
}

export async function getRefreshTokenUser(refreshToken: string): Promise<UserIdentity | null> {
	const payload = await getRedisValue(getRefreshTokenKey(refreshToken));
	if (!payload) {
		return null;
	}

	const parsed = JSON.parse(payload) as UserIdentity;
	if (!parsed.id || !parsed.email || !parsed.user) {
		return null;
	}

	return parsed;
}

export async function deleteRefreshToken(refreshToken: string): Promise<boolean> {
	return deleteRedisKey(getRefreshTokenKey(refreshToken));
}