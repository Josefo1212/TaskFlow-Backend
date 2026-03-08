import { CookieOptions, Response } from 'express';
import { env } from '../config/env';

function getRefreshCookieOptions(maxAge?: number): CookieOptions {
	const secure = env.REFRESH_COOKIE_SECURE ?? env.NODE_ENV === 'production';

	return {
		httpOnly: true,
		secure,
		sameSite: env.REFRESH_COOKIE_SAME_SITE,
		path: '/auth',
		maxAge,
		...(env.REFRESH_COOKIE_DOMAIN ? { domain: env.REFRESH_COOKIE_DOMAIN } : {}),
	};
}

export function setRefreshTokenCookie(res: Response, refreshToken: string, expiresAt: string): void {
	const expiresAtMs = new Date(expiresAt).getTime();
	const maxAge = Number.isFinite(expiresAtMs)
		? Math.max(expiresAtMs - Date.now(), 0)
		: undefined;

	res.cookie(env.REFRESH_COOKIE_NAME, refreshToken, getRefreshCookieOptions(maxAge));
}

export function clearRefreshTokenCookie(res: Response): void {
	res.clearCookie(env.REFRESH_COOKIE_NAME, getRefreshCookieOptions());
}

export function readRefreshTokenCookie(cookies: RequestCookies | undefined): string | null {
	const cookieValue = cookies?.[env.REFRESH_COOKIE_NAME];

	if (typeof cookieValue !== 'string') {
		return null;
	}

	const token = cookieValue.trim();
	return token ? token : null;
}

type RequestCookies = Record<string, unknown>;