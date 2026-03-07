import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redisClient = process.env.REDIS_URL
	? createClient({ url: process.env.REDIS_URL })
	: createClient({
		socket: {
			host: process.env.REDIS_HOST ?? 'localhost',
			port: Number(process.env.REDIS_PORT ?? 6379),
		},
		database: Number(process.env.REDIS_DB ?? 0),
		...(process.env.REDIS_PASSWORD ? { password: process.env.REDIS_PASSWORD } : {}),
	});

let connectPromise: Promise<void> | null = null;

redisClient.on('error', (error) => {
	console.error('[Redis] Client error:', error);
});

export async function connectRedis(): Promise<void> {
	if (redisClient.isOpen) {
		return;
	}

	if (!connectPromise) {
		connectPromise = redisClient
			.connect()
			.then(() => {
				console.log('[Redis] Connected');
			})
			.catch((error) => {
				connectPromise = null;
				throw error;
			});
	}

	return connectPromise;
}

export async function setRedisValue(key: string, value: string, ttlSeconds: number): Promise<void> {
	await connectRedis();
	await redisClient.set(key, value, { EX: ttlSeconds });
}

export async function getRedisValue(key: string): Promise<string | null> {
	await connectRedis();
	return redisClient.get(key);
}

export async function deleteRedisKey(key: string): Promise<boolean> {
	await connectRedis();
	const deletedCount = await redisClient.del(key);
	return deletedCount > 0;
}