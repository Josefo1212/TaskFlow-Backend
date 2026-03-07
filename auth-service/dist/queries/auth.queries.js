"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = findUserByEmail;
exports.createUser = createUser;
exports.findActiveSessionByRefreshToken = findActiveSessionByRefreshToken;
exports.createSession = createSession;
exports.deactivateSessionByRefreshToken = deactivateSessionByRefreshToken;
exports.createAuthLog = createAuthLog;
const database_1 = __importDefault(require("../config/database"));
const queries_json_1 = __importDefault(require("./queries.json"));
const queries = queries_json_1.default;
function getQuery(key) {
    const sql = queries[key];
    if (!sql) {
        throw new Error(`SQL query not found for key: ${key}`);
    }
    return sql;
}
async function findUserByEmail(email) {
    const { rows } = await database_1.default.query(getQuery('auth.getUserByEmail'), [email]);
    return rows[0] ?? null;
}
async function createUser(params) {
    const { name, email, passwordHash } = params;
    const { rows } = await database_1.default.query(getQuery('auth.createUser'), [
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
async function findActiveSessionByRefreshToken(refreshToken) {
    const { rows } = await database_1.default.query(getQuery('auth.getActiveSessionByRefreshToken'), [refreshToken]);
    return rows[0] ?? null;
}
async function createSession(params) {
    const { userId, ip, refreshToken, refreshExpiresAt, userAgent } = params;
    const { rows } = await database_1.default.query(getQuery('auth.createSession'), [
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
async function deactivateSessionByRefreshToken(refreshToken) {
    const { rows } = await database_1.default.query(getQuery('auth.deactivateSessionByRefreshToken'), [refreshToken]);
    return rows[0]?.id ?? null;
}
async function createAuthLog(params) {
    const { userId, sessionId, action, tableName, recordId, metadata, ip } = params;
    await database_1.default.query(getQuery('auth.insertActivityLog'), [
        userId,
        sessionId,
        action,
        tableName,
        recordId,
        JSON.stringify(metadata ?? {}),
        ip,
    ]);
}
//# sourceMappingURL=auth.queries.js.map