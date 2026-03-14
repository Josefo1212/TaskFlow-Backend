"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskController = createTaskController;
exports.listTasksController = listTasksController;
exports.getTaskController = getTaskController;
exports.updateTaskController = updateTaskController;
exports.deleteTaskController = deleteTaskController;
exports.changeTaskStatusController = changeTaskStatusController;
exports.changeTaskPriorityController = changeTaskPriorityController;
exports.assignTaskController = assignTaskController;
const zod_1 = require("zod");
const task_service_1 = require("../services/task.service");
const createTaskSchema = zod_1.z.object({
    project_id: zod_1.z.string().min(1, 'project_id is required'),
    assignee_id: zod_1.z.string().min(1).optional(),
    title: zod_1.z.string().min(1, 'title is required'),
    description: zod_1.z.string().optional(),
    status: zod_1.z.string().optional(),
    priority: zod_1.z.string().optional(),
    due_date: zod_1.z.string().optional(),
});
const updateTaskSchema = zod_1.z
    .object({
    title: zod_1.z.string().min(1).optional(),
    description: zod_1.z.string().optional(),
    due_date: zod_1.z.string().optional(),
})
    .refine((data) => data.title !== undefined || data.description !== undefined || data.due_date !== undefined, {
    message: 'title, description or due_date is required',
});
const listTasksSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().optional(),
    limit: zod_1.z.coerce.number().int().positive().optional(),
    project_id: zod_1.z.string().optional(),
    assignee_id: zod_1.z.string().optional(),
    status: zod_1.z.string().optional(),
    priority: zod_1.z.string().optional(),
    due_date_from: zod_1.z.string().optional(),
    due_date_to: zod_1.z.string().optional(),
});
const changeStatusSchema = zod_1.z.object({
    status: zod_1.z.string().min(1, 'status is required'),
});
const changePrioritySchema = zod_1.z.object({
    priority: zod_1.z.string().min(1, 'priority is required'),
});
const assignSchema = zod_1.z.object({
    assignee_id: zod_1.z.string().min(1).optional(),
});
function requireAuthenticatedUserId(req) {
    return req.user?.sub ?? '';
}
function requireTaskId(req) {
    const { taskId } = req.params;
    return typeof taskId === 'string' ? taskId : '';
}
async function createTaskController(req, res) {
    const payload = createTaskSchema.parse(req.body ?? {});
    const requestPayload = {
        project_id: payload.project_id,
        creator_id: requireAuthenticatedUserId(req),
        title: payload.title,
    };
    if (payload.assignee_id !== undefined) {
        requestPayload.assignee_id = payload.assignee_id;
    }
    if (payload.description !== undefined) {
        requestPayload.description = payload.description;
    }
    if (payload.status !== undefined) {
        requestPayload.status = payload.status;
    }
    if (payload.priority !== undefined) {
        requestPayload.priority = payload.priority;
    }
    if (payload.due_date !== undefined) {
        requestPayload.due_date = payload.due_date;
    }
    const response = await (0, task_service_1.createTaskWithTaskService)(requestPayload);
    res.status(201).json(response);
}
async function listTasksController(req, res) {
    const payload = listTasksSchema.parse(req.query);
    const requestPayload = {};
    if (payload.page !== undefined)
        requestPayload.page = payload.page;
    if (payload.limit !== undefined)
        requestPayload.limit = payload.limit;
    if (payload.project_id !== undefined)
        requestPayload.project_id = payload.project_id;
    if (payload.assignee_id !== undefined)
        requestPayload.assignee_id = payload.assignee_id;
    if (payload.status !== undefined)
        requestPayload.status = payload.status;
    if (payload.priority !== undefined)
        requestPayload.priority = payload.priority;
    if (payload.due_date_from !== undefined)
        requestPayload.due_date_from = payload.due_date_from;
    if (payload.due_date_to !== undefined)
        requestPayload.due_date_to = payload.due_date_to;
    const response = await (0, task_service_1.listTasksWithTaskService)(requestPayload);
    res.status(200).json(response);
}
async function getTaskController(req, res) {
    const response = await (0, task_service_1.getTaskWithTaskService)({ task_id: requireTaskId(req) });
    res.status(200).json(response);
}
async function updateTaskController(req, res) {
    const payload = updateTaskSchema.parse(req.body ?? {});
    const requestPayload = {
        task_id: requireTaskId(req),
    };
    if (payload.title !== undefined)
        requestPayload.title = payload.title;
    if (payload.description !== undefined)
        requestPayload.description = payload.description;
    if (payload.due_date !== undefined)
        requestPayload.due_date = payload.due_date;
    const response = await (0, task_service_1.updateTaskWithTaskService)(requestPayload);
    res.status(200).json(response);
}
async function deleteTaskController(req, res) {
    const response = await (0, task_service_1.deleteTaskWithTaskService)({ task_id: requireTaskId(req) });
    res.status(200).json(response);
}
async function changeTaskStatusController(req, res) {
    const payload = changeStatusSchema.parse(req.body ?? {});
    const response = await (0, task_service_1.changeTaskStatusWithTaskService)({
        task_id: requireTaskId(req),
        status: payload.status,
    });
    res.status(200).json(response);
}
async function changeTaskPriorityController(req, res) {
    const payload = changePrioritySchema.parse(req.body ?? {});
    const response = await (0, task_service_1.changeTaskPriorityWithTaskService)({
        task_id: requireTaskId(req),
        priority: payload.priority,
    });
    res.status(200).json(response);
}
async function assignTaskController(req, res) {
    const payload = assignSchema.parse(req.body ?? {});
    const requestPayload = {
        task_id: requireTaskId(req),
    };
    if (payload.assignee_id !== undefined) {
        requestPayload.assignee_id = payload.assignee_id;
    }
    const response = await (0, task_service_1.assignTaskWithTaskService)(requestPayload);
    res.status(200).json(response);
}
//# sourceMappingURL=task.controller.js.map