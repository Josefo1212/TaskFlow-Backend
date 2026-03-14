"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskWithTaskService = createTaskWithTaskService;
exports.getTaskWithTaskService = getTaskWithTaskService;
exports.updateTaskWithTaskService = updateTaskWithTaskService;
exports.deleteTaskWithTaskService = deleteTaskWithTaskService;
exports.changeTaskStatusWithTaskService = changeTaskStatusWithTaskService;
exports.changeTaskPriorityWithTaskService = changeTaskPriorityWithTaskService;
exports.assignTaskWithTaskService = assignTaskWithTaskService;
exports.listTasksWithTaskService = listTasksWithTaskService;
const task_client_1 = require("../grpc/task.client");
const grpc_error_mapper_1 = require("../utils/grpc-error-mapper");
function promisifyUnaryCall(client, method, request) {
    return new Promise((resolve, reject) => {
        method.call(client, request, (error, response) => {
            if (error) {
                reject((0, grpc_error_mapper_1.mapGrpcErrorToHttp)(error));
                return;
            }
            if (!response) {
                reject(new Error('Empty response from task-service'));
                return;
            }
            resolve(response);
        });
    });
}
function createTaskWithTaskService(payload) {
    return promisifyUnaryCall(task_client_1.taskClient, task_client_1.taskClient.CreateTask, payload);
}
function getTaskWithTaskService(payload) {
    return promisifyUnaryCall(task_client_1.taskClient, task_client_1.taskClient.GetTask, payload);
}
function updateTaskWithTaskService(payload) {
    return promisifyUnaryCall(task_client_1.taskClient, task_client_1.taskClient.UpdateTask, payload);
}
function deleteTaskWithTaskService(payload) {
    return promisifyUnaryCall(task_client_1.taskClient, task_client_1.taskClient.DeleteTask, payload);
}
function changeTaskStatusWithTaskService(payload) {
    return promisifyUnaryCall(task_client_1.taskClient, task_client_1.taskClient.ChangeTaskStatus, payload);
}
function changeTaskPriorityWithTaskService(payload) {
    return promisifyUnaryCall(task_client_1.taskClient, task_client_1.taskClient.ChangeTaskPriority, payload);
}
function assignTaskWithTaskService(payload) {
    return promisifyUnaryCall(task_client_1.taskClient, task_client_1.taskClient.AssignTask, payload);
}
function listTasksWithTaskService(payload) {
    return promisifyUnaryCall(task_client_1.taskClient, task_client_1.taskClient.ListTasks, payload);
}
//# sourceMappingURL=task.service.js.map