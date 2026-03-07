"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = connectRedis;
exports.setRedisValue = setRedisValue;
exports.getRedisValue = getRedisValue;
exports.deleteRedisKey = deleteRedisKey;
const redis_1 = require("redis");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const redisClient = process.env.REDIS_URL
    ? (0, redis_1.createClient)({ url: process.env.REDIS_URL })
    : (0, redis_1.createClient)({
        socket: {
            host: process.env.REDIS_HOST ?? 'localhost',
            port: Number(process.env.REDIS_PORT ?? 6379),
        },
        database: Number(process.env.REDIS_DB ?? 0),
        ...(process.env.REDIS_PASSWORD ? { password: process.env.REDIS_PASSWORD } : {}),
    });
let connectPromise = null;
redisClient.on('error', (error) => {
    console.error('[Redis] Client error:', error);
});
async function connectRedis() {
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
async function setRedisValue(key, value, ttlSeconds) {
    await connectRedis();
    await redisClient.set(key, value, { EX: ttlSeconds });
}
async function getRedisValue(key) {
    await connectRedis();
    return redisClient.get(key);
}
async function deleteRedisKey(key) {
    await connectRedis();
    const deletedCount = await redisClient.del(key);
    return deletedCount > 0;
}
//# sourceMappingURL=redis.js.map