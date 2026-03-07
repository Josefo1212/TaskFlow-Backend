export declare function connectRedis(): Promise<void>;
export declare function setRedisValue(key: string, value: string, ttlSeconds: number): Promise<void>;
export declare function getRedisValue(key: string): Promise<string | null>;
export declare function deleteRedisKey(key: string): Promise<boolean>;
//# sourceMappingURL=redis.d.ts.map