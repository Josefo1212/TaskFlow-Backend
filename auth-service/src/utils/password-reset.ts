import { randomBytes } from 'crypto';
import { deleteRedisKey, getRedisValue, setRedisValue } from '../config/redis';

const PASSWORD_RESET_PREFIX = 'auth:password_reset:';

function getPasswordResetKey(token: string): string {
	return `${PASSWORD_RESET_PREFIX}${token}`;
}

function getPasswordResetTtlSeconds(ttlMinutes: number): number {
	return Math.max(60, Math.floor(ttlMinutes * 60));
}

export function generatePasswordResetToken(): string {
	return randomBytes(32).toString('hex');
}

export async function storePasswordResetToken(
  token: string,
  name: string,
  ttlMinutes: number,
): Promise<void> {
  await setRedisValue(getPasswordResetKey(token), name, getPasswordResetTtlSeconds(ttlMinutes));
}

export async function getPasswordResetName(token: string): Promise<string | null> {
  const name = await getRedisValue(getPasswordResetKey(token));
  return name?.trim() ? name : null;
}

export async function deletePasswordResetToken(token: string): Promise<boolean> {
	return deleteRedisKey(getPasswordResetKey(token));
}
