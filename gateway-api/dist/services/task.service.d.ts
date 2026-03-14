import { AssignTaskGrpcRequest, AssignTaskGrpcResponse, ChangeTaskPriorityGrpcRequest, ChangeTaskPriorityGrpcResponse, ChangeTaskStatusGrpcRequest, ChangeTaskStatusGrpcResponse, CreateTaskGrpcRequest, CreateTaskGrpcResponse, DeleteTaskGrpcRequest, DeleteTaskGrpcResponse, GetTaskGrpcRequest, GetTaskGrpcResponse, ListTasksGrpcRequest, ListTasksGrpcResponse, UpdateTaskGrpcRequest, UpdateTaskGrpcResponse } from '../grpc/task.client';
export declare function createTaskWithTaskService(payload: CreateTaskGrpcRequest): Promise<CreateTaskGrpcResponse>;
export declare function getTaskWithTaskService(payload: GetTaskGrpcRequest): Promise<GetTaskGrpcResponse>;
export declare function updateTaskWithTaskService(payload: UpdateTaskGrpcRequest): Promise<UpdateTaskGrpcResponse>;
export declare function deleteTaskWithTaskService(payload: DeleteTaskGrpcRequest): Promise<DeleteTaskGrpcResponse>;
export declare function changeTaskStatusWithTaskService(payload: ChangeTaskStatusGrpcRequest): Promise<ChangeTaskStatusGrpcResponse>;
export declare function changeTaskPriorityWithTaskService(payload: ChangeTaskPriorityGrpcRequest): Promise<ChangeTaskPriorityGrpcResponse>;
export declare function assignTaskWithTaskService(payload: AssignTaskGrpcRequest): Promise<AssignTaskGrpcResponse>;
export declare function listTasksWithTaskService(payload: ListTasksGrpcRequest): Promise<ListTasksGrpcResponse>;
//# sourceMappingURL=task.service.d.ts.map