"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = getProfile;
exports.updateProfile = updateProfile;
exports.listUsers = listUsers;
exports.searchUsers = searchUsers;
exports.getUsersByIds = getUsersByIds;
exports.checkUserExists = checkUserExists;
exports.getBasicInfo = getBasicInfo;
const user_queries_1 = require("../queries/user.queries");
const user_errors_1 = require("../utils/user-errors");
function formatTimestamp(value) {
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString();
}
function mapUserRow(row) {
    return {
        id: row.id,
        user: row.user,
        email: row.email,
        createdAt: formatTimestamp(row.created_at),
        updatedAt: formatTimestamp(row.updated_at),
    };
}
function mapUserBasicRow(row) {
    return {
        id: row.id,
        user: row.user,
        email: row.email,
    };
}
function normalizeUserId(userId) {
    const normalized = userId.trim();
    if (!normalized) {
        throw new user_errors_1.UserServiceError('user_id is required', 400);
    }
    return normalized;
}
function normalizeOptionalUser(user) {
    if (user === undefined) {
        return undefined;
    }
    const normalized = user.trim();
    if (!normalized) {
        throw new user_errors_1.UserServiceError('user cannot be empty', 400);
    }
    if (normalized.length > 250) {
        throw new user_errors_1.UserServiceError('user must be at most 250 characters', 400);
    }
    return normalized;
}
function normalizeOptionalEmail(email) {
    if (email === undefined) {
        return undefined;
    }
    const normalized = email.trim().toLowerCase();
    if (!normalized) {
        throw new user_errors_1.UserServiceError('email cannot be empty', 400);
    }
    if (normalized.length > 250) {
        throw new user_errors_1.UserServiceError('email must be at most 250 characters', 400);
    }
    return normalized;
}
function normalizePage(value) {
    if (!value || value < 1) {
        return 1;
    }
    return Math.floor(value);
}
function normalizeLimit(value, max, fallback) {
    if (!value || value < 1) {
        return fallback;
    }
    return Math.min(Math.floor(value), max);
}
async function getProfile(input) {
    const userId = normalizeUserId(input.userId);
    const user = await (0, user_queries_1.findUserById)(userId);
    if (!user) {
        throw new user_errors_1.UserServiceError('User not found', 404);
    }
    return mapUserRow(user);
}
async function updateProfile(input) {
    const userId = normalizeUserId(input.userId);
    const existingUser = await (0, user_queries_1.findUserById)(userId);
    if (!existingUser) {
        throw new user_errors_1.UserServiceError('User not found', 404);
    }
    const nextUser = normalizeOptionalUser(input.user) ?? existingUser.user;
    const nextEmail = normalizeOptionalEmail(input.email) ?? existingUser.email;
    if (nextEmail !== existingUser.email) {
        const userWithEmail = await (0, user_queries_1.findUserByEmail)(nextEmail);
        if (userWithEmail && userWithEmail.id !== userId) {
            throw new user_errors_1.UserServiceError('Email already registered', 409);
        }
    }
    if (nextUser !== existingUser.user) {
        const userWithName = await (0, user_queries_1.findUserByUser)(nextUser);
        if (userWithName && userWithName.id !== userId) {
            throw new user_errors_1.UserServiceError('Username already registered', 409);
        }
    }
    const updatedUser = await (0, user_queries_1.updateUserProfile)(userId, nextUser, nextEmail);
    return mapUserRow(updatedUser);
}
async function listUsers(input) {
    const page = normalizePage(input.page);
    const limit = normalizeLimit(input.limit, 100, 10);
    const search = input.search?.trim() ?? '';
    const offset = (page - 1) * limit;
    const [users, total] = await Promise.all([
        (0, user_queries_1.listUsersQuery)(search, limit, offset),
        (0, user_queries_1.countUsersQuery)(search),
    ]);
    return {
        users: users.map(mapUserRow),
        total,
        page,
        limit,
    };
}
async function searchUsers(input) {
    const query = input.query?.trim() ?? '';
    const limit = normalizeLimit(input.limit, 50, 10);
    if (!query) {
        return [];
    }
    const users = await (0, user_queries_1.searchUsersQuery)(query, limit);
    return users.map(mapUserBasicRow);
}
async function getUsersByIds(input) {
    const userIds = [...new Set(input.userIds.map((userId) => userId.trim()).filter(Boolean))];
    const users = await (0, user_queries_1.getUsersByIdsQuery)(userIds);
    return users.map(mapUserBasicRow);
}
async function checkUserExists(input) {
    const userId = normalizeUserId(input.userId);
    const user = await (0, user_queries_1.findUserById)(userId);
    if (!user) {
        return { exists: false };
    }
    return {
        exists: true,
        user: mapUserBasicRow(user),
    };
}
async function getBasicInfo(input) {
    const userId = normalizeUserId(input.userId);
    const user = await (0, user_queries_1.findUserById)(userId);
    if (!user) {
        throw new user_errors_1.UserServiceError('User not found', 404);
    }
    return mapUserBasicRow(user);
}
//# sourceMappingURL=user.services.js.map