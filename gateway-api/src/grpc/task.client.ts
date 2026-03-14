import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { env } from '../config/env';

export interface TaskGrpcResponse {
	id: string;
	project_id: string;
	creator_id: string;
	assignee_id: string;
	title: string;
	description: string;
	status: string;
	priority: string;
	due_date: string;
	created_at: string;
	updated_at: string;
}

export interface CreateTaskGrpcRequest {
	project_id: string;
	creator_id?: string;
	assignee_id?: string;
	title: string;
	description?: string;
	status?: string;
	priority?: string;
	due_date?: string;
}

export interface CreateTaskGrpcResponse {
	task: TaskGrpcResponse;
}

export interface GetTaskGrpcRequest {
	task_id: string;
}

export interface GetTaskGrpcResponse {
	task: TaskGrpcResponse;
}

export interface UpdateTaskGrpcRequest {
	task_id: string;
	title?: string;
	description?: string;
	due_date?: string;
}

export interface UpdateTaskGrpcResponse {
	task: TaskGrpcResponse;
}

export interface DeleteTaskGrpcRequest {
	task_id: string;
}

export interface DeleteTaskGrpcResponse {
	deleted: boolean;
}

export interface ChangeTaskStatusGrpcRequest {
	task_id: string;
	status: string;
}

export interface ChangeTaskStatusGrpcResponse {
	task: TaskGrpcResponse;
}

export interface ChangeTaskPriorityGrpcRequest {
	task_id: string;
	priority: string;
}

export interface ChangeTaskPriorityGrpcResponse {
	task: TaskGrpcResponse;
}

export interface AssignTaskGrpcRequest {
	task_id: string;
	assignee_id?: string;
}

export interface AssignTaskGrpcResponse {
	task: TaskGrpcResponse;
}

export interface ListTasksGrpcRequest {
	page?: number;
	limit?: number;
	project_id?: string;
	assignee_id?: string;
	status?: string;
	priority?: string;
	due_date_from?: string;
	due_date_to?: string;
}

export interface ListTasksGrpcResponse {
	tasks: TaskGrpcResponse[];
	total: number;
	page: number;
	limit: number;
}

interface TaskServiceClient extends grpc.Client {
	CreateTask(
		request: CreateTaskGrpcRequest,
		callback: grpc.requestCallback<CreateTaskGrpcResponse>,
	): void;
	GetTask(
		request: GetTaskGrpcRequest,
		callback: grpc.requestCallback<GetTaskGrpcResponse>,
	): void;
	UpdateTask(
		request: UpdateTaskGrpcRequest,
		callback: grpc.requestCallback<UpdateTaskGrpcResponse>,
	): void;
	DeleteTask(
		request: DeleteTaskGrpcRequest,
		callback: grpc.requestCallback<DeleteTaskGrpcResponse>,
	): void;
	ChangeTaskStatus(
		request: ChangeTaskStatusGrpcRequest,
		callback: grpc.requestCallback<ChangeTaskStatusGrpcResponse>,
	): void;
	ChangeTaskPriority(
		request: ChangeTaskPriorityGrpcRequest,
		callback: grpc.requestCallback<ChangeTaskPriorityGrpcResponse>,
	): void;
	AssignTask(
		request: AssignTaskGrpcRequest,
		callback: grpc.requestCallback<AssignTaskGrpcResponse>,
	): void;
	ListTasks(
		request: ListTasksGrpcRequest,
		callback: grpc.requestCallback<ListTasksGrpcResponse>,
	): void;
}

interface LoadedTaskPackage {
	task: {
		TaskService: grpc.ServiceClientConstructor;
	};
}

const protoPath = path.resolve(__dirname, '../../proto/task.proto');

const packageDefinition = protoLoader.loadSync(protoPath, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const loadedProto = grpc.loadPackageDefinition(packageDefinition) as unknown as LoadedTaskPackage;

export const taskClient = new loadedProto.task.TaskService(
	env.TASK_GRPC_URL,
	grpc.credentials.createInsecure(),
) as unknown as TaskServiceClient;
