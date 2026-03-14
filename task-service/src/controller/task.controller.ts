import * as grpc from '@grpc/grpc-js';
import {
	assignTask,
	changeTaskPriority,
	changeTaskStatus,
	createTask,
	deleteTask,
	getTask,
	listTasks,
	updateTask,
	Task,
} from '../services/task.service';
import { TaskServiceError } from '../utils/task-errors';

interface CreateTaskGrpcRequest {
	project_id: string;
	creator_id?: string;
	assignee_id?: string;
	title: string;
	description?: string;
	status?: string;
	priority?: string;
	due_date?: string;
}

interface GetTaskGrpcRequest {
	task_id: string;
}

interface UpdateTaskGrpcRequest {
	task_id: string;
	title?: string;
	description?: string;
	due_date?: string;
}

interface DeleteTaskGrpcRequest {
	task_id: string;
}

interface ChangeTaskStatusGrpcRequest {
	task_id: string;
	status: string;
}

interface ChangeTaskPriorityGrpcRequest {
	task_id: string;
	priority: string;
}

interface AssignTaskGrpcRequest {
	task_id: string;
	assignee_id?: string;
}

interface ListTasksGrpcRequest {
	page?: number;
	limit?: number;
	project_id?: string;
	assignee_id?: string;
	status?: string;
	priority?: string;
	due_date_from?: string;
	due_date_to?: string;
}

interface TaskGrpcResponse {
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

interface CreateTaskGrpcResponse {
	task: TaskGrpcResponse;
}

interface GetTaskGrpcResponse {
	task: TaskGrpcResponse;
}

interface UpdateTaskGrpcResponse {
	task: TaskGrpcResponse;
}

interface DeleteTaskGrpcResponse {
	deleted: boolean;
}

interface ChangeTaskStatusGrpcResponse {
	task: TaskGrpcResponse;
}

interface ChangeTaskPriorityGrpcResponse {
	task: TaskGrpcResponse;
}

interface AssignTaskGrpcResponse {
	task: TaskGrpcResponse;
}

interface ListTasksGrpcResponse {
	tasks: TaskGrpcResponse[];
	total: number;
	page: number;
	limit: number;
}

function mapHttpErrorToGrpcCode(statusCode: number): grpc.status {
	if (statusCode === 400) return grpc.status.INVALID_ARGUMENT;
	if (statusCode === 404) return grpc.status.NOT_FOUND;
	if (statusCode === 409) return grpc.status.ALREADY_EXISTS;
	return grpc.status.INTERNAL;
}

function toGrpcServiceError(error: unknown): grpc.ServiceError {
	if (error instanceof TaskServiceError) {
		return {
			code: mapHttpErrorToGrpcCode(error.statusCode),
			message: error.message,
			name: 'TaskServiceError',
		} as grpc.ServiceError;
	}

	return {
		code: grpc.status.INTERNAL,
		message: 'Internal server error',
		name: 'InternalError',
	} as grpc.ServiceError;
}

function mapTask(task: Task): TaskGrpcResponse {
	return {
		id: task.id,
		project_id: task.projectId,
		creator_id: task.creatorId ?? '',
		assignee_id: task.assigneeId ?? '',
		title: task.title,
		description: task.description ?? '',
		status: task.status,
		priority: task.priority,
		due_date: task.dueDate ?? '',
		created_at: task.createdAt,
		updated_at: task.updatedAt,
	};
}

export const taskController: grpc.UntypedServiceImplementation = {
	CreateTask: async (
		call: grpc.ServerUnaryCall<CreateTaskGrpcRequest, CreateTaskGrpcResponse>,
		callback: grpc.sendUnaryData<CreateTaskGrpcResponse>,
	) => {
		try {
			const payload: Parameters<typeof createTask>[0] = {
				projectId: call.request.project_id ?? '',
				title: call.request.title ?? '',
			};

			if (call.request.creator_id?.trim()) {
				payload.creatorId = call.request.creator_id;
			}

			if (call.request.assignee_id?.trim()) {
				payload.assigneeId = call.request.assignee_id;
			}

			if (call.request.description?.trim()) {
				payload.description = call.request.description;
			}

			if (call.request.status?.trim()) {
				payload.status = call.request.status;
			}

			if (call.request.priority?.trim()) {
				payload.priority = call.request.priority;
			}

			if (call.request.due_date?.trim()) {
				payload.dueDate = call.request.due_date;
			}

			const task = await createTask(payload);

			callback(null, { task: mapTask(task) });
		} catch (error) {
			console.error('[CreateTask] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	GetTask: async (
		call: grpc.ServerUnaryCall<GetTaskGrpcRequest, GetTaskGrpcResponse>,
		callback: grpc.sendUnaryData<GetTaskGrpcResponse>,
	) => {
		try {
			const task = await getTask({ taskId: call.request.task_id ?? '' });
			callback(null, { task: mapTask(task) });
		} catch (error) {
			console.error('[GetTask] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	UpdateTask: async (
		call: grpc.ServerUnaryCall<UpdateTaskGrpcRequest, UpdateTaskGrpcResponse>,
		callback: grpc.sendUnaryData<UpdateTaskGrpcResponse>,
	) => {
		try {
			const payload: Parameters<typeof updateTask>[0] = {
				taskId: call.request.task_id ?? '',
			};

			if (call.request.title?.trim()) {
				payload.title = call.request.title;
			}

			if (call.request.description?.trim()) {
				payload.description = call.request.description;
			}

			if (call.request.due_date?.trim()) {
				payload.dueDate = call.request.due_date;
			}

			const task = await updateTask(payload);
			callback(null, { task: mapTask(task) });
		} catch (error) {
			console.error('[UpdateTask] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	DeleteTask: async (
		call: grpc.ServerUnaryCall<DeleteTaskGrpcRequest, DeleteTaskGrpcResponse>,
		callback: grpc.sendUnaryData<DeleteTaskGrpcResponse>,
	) => {
		try {
			const result = await deleteTask({ taskId: call.request.task_id ?? '' });
			callback(null, { deleted: result.deleted });
		} catch (error) {
			console.error('[DeleteTask] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	ChangeTaskStatus: async (
		call: grpc.ServerUnaryCall<ChangeTaskStatusGrpcRequest, ChangeTaskStatusGrpcResponse>,
		callback: grpc.sendUnaryData<ChangeTaskStatusGrpcResponse>,
	) => {
		try {
			const task = await changeTaskStatus({
				taskId: call.request.task_id ?? '',
				status: call.request.status ?? '',
			});
			callback(null, { task: mapTask(task) });
		} catch (error) {
			console.error('[ChangeTaskStatus] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	ChangeTaskPriority: async (
		call: grpc.ServerUnaryCall<ChangeTaskPriorityGrpcRequest, ChangeTaskPriorityGrpcResponse>,
		callback: grpc.sendUnaryData<ChangeTaskPriorityGrpcResponse>,
	) => {
		try {
			const task = await changeTaskPriority({
				taskId: call.request.task_id ?? '',
				priority: call.request.priority ?? '',
			});
			callback(null, { task: mapTask(task) });
		} catch (error) {
			console.error('[ChangeTaskPriority] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	AssignTask: async (
		call: grpc.ServerUnaryCall<AssignTaskGrpcRequest, AssignTaskGrpcResponse>,
		callback: grpc.sendUnaryData<AssignTaskGrpcResponse>,
	) => {
		try {
			const payload: Parameters<typeof assignTask>[0] = {
				taskId: call.request.task_id ?? '',
			};

			if (call.request.assignee_id?.trim()) {
				payload.assigneeId = call.request.assignee_id;
			}

			const task = await assignTask(payload);
			callback(null, { task: mapTask(task) });
		} catch (error) {
			console.error('[AssignTask] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	ListTasks: async (
		call: grpc.ServerUnaryCall<ListTasksGrpcRequest, ListTasksGrpcResponse>,
		callback: grpc.sendUnaryData<ListTasksGrpcResponse>,
	) => {
		try {
			const payload: Parameters<typeof listTasks>[0] = {};

			if (call.request.page && call.request.page > 0) {
				payload.page = call.request.page;
			}

			if (call.request.limit && call.request.limit > 0) {
				payload.limit = call.request.limit;
			}

			if (call.request.project_id?.trim()) {
				payload.projectId = call.request.project_id;
			}

			if (call.request.assignee_id?.trim()) {
				payload.assigneeId = call.request.assignee_id;
			}

			if (call.request.status?.trim()) {
				payload.status = call.request.status;
			}

			if (call.request.priority?.trim()) {
				payload.priority = call.request.priority;
			}

			if (call.request.due_date_from?.trim()) {
				payload.dueDateFrom = call.request.due_date_from;
			}

			if (call.request.due_date_to?.trim()) {
				payload.dueDateTo = call.request.due_date_to;
			}

			const result = await listTasks(payload);

			callback(null, {
				tasks: result.tasks.map(mapTask),
				total: result.total,
				page: result.page,
				limit: result.limit,
			});
		} catch (error) {
			console.error('[ListTasks] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},
};
