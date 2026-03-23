"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = findUserByEmail;
exports.findUserByUser = findUserByUser;
exports.createUser = createUser;
exports.updateUserPasswordByEmail = updateUserPasswordByEmail;
exports.updateUserPasswordByUser = updateUserPasswordByUser;
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
async function findUserByUser(user) {
    const { rows } = await database_1.default.query(getQuery('auth.getUserByUser'), [user]);
    return rows[0] ?? null;
}
async function createUser(params) {
    const { user, email, passwordHash } = params;
    const { rows } = await database_1.default.query(getQuery('auth.createUser'), [
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
async function updateUserPasswordByEmail(email, passwordHash) {
    const { rows } = await database_1.default.query(getQuery('auth.updateUserPasswordByEmail'), [
        passwordHash,
        email,
    ]);
    return rows[0] ?? null;
}
async function updateUserPasswordByUser(user, passwordHash) {
    const { rows } = await database_1.default.query(getQuery('auth.updateUserPasswordByUser'), [
        passwordHash,
        user,
    ]);
    return rows[0] ?? null;
}
//# sourceMappingURL=auth.queries.js.map