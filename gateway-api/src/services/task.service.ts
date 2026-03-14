import * as grpc from '@grpc/grpc-js';
import {
	AssignTaskGrpcRequest,
	AssignTaskGrpcResponse,
	ChangeTaskPriorityGrpcRequest,
	ChangeTaskPriorityGrpcResponse,
	ChangeTaskStatusGrpcRequest,
	ChangeTaskStatusGrpcResponse,
	CreateTaskGrpcRequest,
	CreateTaskGrpcResponse,
	DeleteTaskGrpcRequest,
	DeleteTaskGrpcResponse,
	GetTaskGrpcRequest,
	GetTaskGrpcResponse,
	ListTasksGrpcRequest,
	ListTasksGrpcResponse,
	UpdateTaskGrpcRequest,
	UpdateTaskGrpcResponse,
	taskClient,
} from '../grpc/task.client';
import { mapGrpcErrorToHttp } from '../utils/grpc-error-mapper';

function promisifyUnaryCall<RequestType, ResponseType>(
	client: grpc.Client,
	method: (request: RequestType, callback: grpc.requestCallback<ResponseType>) => void,
	request: RequestType,
) {
	return new Promise<ResponseType>((resolve, reject) => {
		method.call(client, request, (error, response) => {
			if (error) {
				reject(mapGrpcErrorToHttp(error));
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

export function createTaskWithTaskService(payload: CreateTaskGrpcRequest): Promise<CreateTaskGrpcResponse> {
	return promisifyUnaryCall(taskClient, taskClient.CreateTask, payload);
}

export function getTaskWithTaskService(payload: GetTaskGrpcRequest): Promise<GetTaskGrpcResponse> {
	return promisifyUnaryCall(taskClient, taskClient.GetTask, payload);
}

export function updateTaskWithTaskService(payload: UpdateTaskGrpcRequest): Promise<UpdateTaskGrpcResponse> {
	return promisifyUnaryCall(taskClient, taskClient.UpdateTask, payload);
}

export function deleteTaskWithTaskService(payload: DeleteTaskGrpcRequest): Promise<DeleteTaskGrpcResponse> {
	return promisifyUnaryCall(taskClient, taskClient.DeleteTask, payload);
}

export function changeTaskStatusWithTaskService(
	payload: ChangeTaskStatusGrpcRequest,
): Promise<ChangeTaskStatusGrpcResponse> {
	return promisifyUnaryCall(taskClient, taskClient.ChangeTaskStatus, payload);
}

export function changeTaskPriorityWithTaskService(
	payload: ChangeTaskPriorityGrpcRequest,
): Promise<ChangeTaskPriorityGrpcResponse> {
	return promisifyUnaryCall(taskClient, taskClient.ChangeTaskPriority, payload);
}

export function assignTaskWithTaskService(payload: AssignTaskGrpcRequest): Promise<AssignTaskGrpcResponse> {
	return promisifyUnaryCall(taskClient, taskClient.AssignTask, payload);
}

export function listTasksWithTaskService(payload: ListTasksGrpcRequest): Promise<ListTasksGrpcResponse> {
	return promisifyUnaryCall(taskClient, taskClient.ListTasks, payload);
}
