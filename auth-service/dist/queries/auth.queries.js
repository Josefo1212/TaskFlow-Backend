"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = findUserByEmail;
exports.findUserByName = findUserByName;
exports.createUser = createUser;
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
async function findUserByName(name) {
    const { rows } = await database_1.default.query(getQuery('auth.getUserByName'), [name]);
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
//# sourceMappingURL=auth.queries.js.map