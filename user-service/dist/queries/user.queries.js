"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = findUserById;
exports.findUserByEmail = findUserByEmail;
exports.findUserByUser = findUserByUser;
exports.updateUserProfile = updateUserProfile;
exports.listUsersQuery = listUsersQuery;
exports.countUsersQuery = countUsersQuery;
exports.searchUsersQuery = searchUsersQuery;
exports.getUsersByIdsQuery = getUsersByIdsQuery;
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
async function findUserById(userId) {
    const { rows } = await database_1.default.query(getQuery('user.getById'), [userId]);
    return rows[0] ?? null;
}
async function findUserByEmail(email) {
    const { rows } = await database_1.default.query(getQuery('user.getByEmail'), [email]);
    return rows[0] ?? null;
}
async function findUserByUser(user) {
    const { rows } = await database_1.default.query(getQuery('user.getByUser'), [user]);
    return rows[0] ?? null;
}
async function updateUserProfile(userId, user, email) {
    const { rows } = await database_1.default.query(getQuery('user.updateProfile'), [userId, user, email]);
    const updatedUser = rows[0];
    if (!updatedUser) {
        throw new Error('Failed to update user profile');
    }
    return updatedUser;
}
async function listUsersQuery(search, limit, offset) {
    const searchPattern = `%${search}%`;
    const { rows } = await database_1.default.query(getQuery('user.list'), [search, searchPattern, limit, offset]);
    return rows;
}
async function countUsersQuery(search) {
    const searchPattern = `%${search}%`;
    const { rows } = await database_1.default.query(getQuery('user.count'), [search, searchPattern]);
    return rows[0]?.total ?? 0;
}
async function searchUsersQuery(query, limit) {
    const searchPattern = `%${query}%`;
    const { rows } = await database_1.default.query(getQuery('user.search'), [searchPattern, limit]);
    return rows;
}
async function getUsersByIdsQuery(userIds) {
    if (userIds.length === 0) {
        return [];
    }
    const { rows } = await database_1.default.query(getQuery('user.getByIds'), [userIds]);
    return rows;
}
//# sourceMappingURL=user.queries.js.map