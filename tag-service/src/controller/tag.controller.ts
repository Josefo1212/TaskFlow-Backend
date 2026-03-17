import * as grpc from '@grpc/grpc-js';
import {
	addTagToTask,
	createTag,
	deleteTag,
	getTag,
	listTags,
	listTagsForTask,
	removeTagFromTask,
	Tag,
	updateTag,
} from '../services/tag.service';
import { TagServiceError } from '../utils/tag-errors';

interface TagGrpcResponse {
	id: string;
	owner_id: string;
	name: string;
	color: string;
	created_at: string;
}

interface CreateTagGrpcRequest {
	requester_id: string;
	name: string;
	color?: string;
}

interface CreateTagGrpcResponse {
	tag: TagGrpcResponse;
}

interface GetTagGrpcRequest {
	requester_id: string;
	tag_id: string;
}

interface GetTagGrpcResponse {
	tag: TagGrpcResponse;
}

interface UpdateTagGrpcRequest {
	requester_id: string;
	tag_id: string;
	name?: string;
	color?: string;
}

interface UpdateTagGrpcResponse {
	tag: TagGrpcResponse;
}

interface DeleteTagGrpcRequest {
	requester_id: string;
	tag_id: string;
}

interface DeleteTagGrpcResponse {
	deleted: boolean;
}

interface ListTagsGrpcRequest {
	requester_id: string;
	page?: number;
	limit?: number;
}

interface ListTagsGrpcResponse {
	tags: TagGrpcResponse[];
	total: number;
	page: number;
	limit: number;
}

interface AddTagToTaskGrpcRequest {
	requester_id: string;
	task_id: string;
	tag_id: string;
}

interface AddTagToTaskGrpcResponse {
	added: boolean;
}

interface RemoveTagFromTaskGrpcRequest {
	requester_id: string;
	task_id: string;
	tag_id: string;
}

interface RemoveTagFromTaskGrpcResponse {
	removed: boolean;
}

interface ListTagsForTaskGrpcRequest {
	requester_id: string;
	task_id: string;
}

interface ListTagsForTaskGrpcResponse {
	tags: TagGrpcResponse[];
}

function mapHttpErrorToGrpcCode(statusCode: number): grpc.status {
	if (statusCode === 400) return grpc.status.INVALID_ARGUMENT;
	if (statusCode === 401) return grpc.status.UNAUTHENTICATED;
	if (statusCode === 403) return grpc.status.PERMISSION_DENIED;
	if (statusCode === 404) return grpc.status.NOT_FOUND;
	if (statusCode === 409) return grpc.status.ALREADY_EXISTS;
	return grpc.status.INTERNAL;
}

function toGrpcServiceError(error: unknown): grpc.ServiceError {
	if (error instanceof TagServiceError) {
		return {
			code: mapHttpErrorToGrpcCode(error.statusCode),
			message: error.message,
			name: 'TagServiceError',
		} as grpc.ServiceError;
	}

	return {
		code: grpc.status.INTERNAL,
		message: 'Internal server error',
		name: 'InternalError',
	} as grpc.ServiceError;
}

function mapTag(tag: Tag): TagGrpcResponse {
	return {
		id: tag.id,
		owner_id: tag.ownerId,
		name: tag.name,
		color: tag.color,
		created_at: tag.createdAt,
	};
}

export const tagController: grpc.UntypedServiceImplementation = {
	CreateTag: async (
		call: grpc.ServerUnaryCall<CreateTagGrpcRequest, CreateTagGrpcResponse>,
		callback: grpc.sendUnaryData<CreateTagGrpcResponse>,
	) => {
		try {
			const payload: Parameters<typeof createTag>[0] = {
				requesterId: call.request.requester_id ?? '',
				name: call.request.name ?? '',
			};

			if (typeof call.request.color === 'string') {
				payload.color = call.request.color;
			}

			const tag = await createTag(payload);
			callback(null, { tag: mapTag(tag) });
		} catch (error) {
			console.error('[CreateTag] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	GetTag: async (
		call: grpc.ServerUnaryCall<GetTagGrpcRequest, GetTagGrpcResponse>,
		callback: grpc.sendUnaryData<GetTagGrpcResponse>,
	) => {
		try {
			const tag = await getTag({
				requesterId: call.request.requester_id ?? '',
				tagId: call.request.tag_id ?? '',
			});
			callback(null, { tag: mapTag(tag) });
		} catch (error) {
			console.error('[GetTag] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	UpdateTag: async (
		call: grpc.ServerUnaryCall<UpdateTagGrpcRequest, UpdateTagGrpcResponse>,
		callback: grpc.sendUnaryData<UpdateTagGrpcResponse>,
	) => {
		try {
			const payload: Parameters<typeof updateTag>[0] = {
				requesterId: call.request.requester_id ?? '',
				tagId: call.request.tag_id ?? '',
			};

			if (typeof call.request.name === 'string') {
				payload.name = call.request.name;
			}

			if (typeof call.request.color === 'string') {
				payload.color = call.request.color;
			}

			const tag = await updateTag(payload);
			callback(null, { tag: mapTag(tag) });
		} catch (error) {
			console.error('[UpdateTag] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	DeleteTag: async (
		call: grpc.ServerUnaryCall<DeleteTagGrpcRequest, DeleteTagGrpcResponse>,
		callback: grpc.sendUnaryData<DeleteTagGrpcResponse>,
	) => {
		try {
			const result = await deleteTag({
				requesterId: call.request.requester_id ?? '',
				tagId: call.request.tag_id ?? '',
			});
			callback(null, { deleted: result.deleted });
		} catch (error) {
			console.error('[DeleteTag] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	ListTags: async (
		call: grpc.ServerUnaryCall<ListTagsGrpcRequest, ListTagsGrpcResponse>,
		callback: grpc.sendUnaryData<ListTagsGrpcResponse>,
	) => {
		try {
			const payload: Parameters<typeof listTags>[0] = {
				requesterId: call.request.requester_id ?? '',
			};

			if (typeof call.request.page === 'number') {
				payload.page = call.request.page;
			}

			if (typeof call.request.limit === 'number') {
				payload.limit = call.request.limit;
			}

			const result = await listTags(payload);
			callback(null, {
				tags: result.tags.map(mapTag),
				total: result.total,
				page: result.page,
				limit: result.limit,
			});
		} catch (error) {
			console.error('[ListTags] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	AddTagToTask: async (
		call: grpc.ServerUnaryCall<AddTagToTaskGrpcRequest, AddTagToTaskGrpcResponse>,
		callback: grpc.sendUnaryData<AddTagToTaskGrpcResponse>,
	) => {
		try {
			const result = await addTagToTask({
				requesterId: call.request.requester_id ?? '',
				taskId: call.request.task_id ?? '',
				tagId: call.request.tag_id ?? '',
			});
			callback(null, { added: result.added });
		} catch (error) {
			console.error('[AddTagToTask] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	RemoveTagFromTask: async (
		call: grpc.ServerUnaryCall<RemoveTagFromTaskGrpcRequest, RemoveTagFromTaskGrpcResponse>,
		callback: grpc.sendUnaryData<RemoveTagFromTaskGrpcResponse>,
	) => {
		try {
			const result = await removeTagFromTask({
				requesterId: call.request.requester_id ?? '',
				taskId: call.request.task_id ?? '',
				tagId: call.request.tag_id ?? '',
			});
			callback(null, { removed: result.removed });
		} catch (error) {
			console.error('[RemoveTagFromTask] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	ListTagsForTask: async (
		call: grpc.ServerUnaryCall<ListTagsForTaskGrpcRequest, ListTagsForTaskGrpcResponse>,
		callback: grpc.sendUnaryData<ListTagsForTaskGrpcResponse>,
	) => {
		try {
			const result = await listTagsForTask({
				requesterId: call.request.requester_id ?? '',
				taskId: call.request.task_id ?? '',
			});
			callback(null, { tags: result.tags.map(mapTag) });
		} catch (error) {
			console.error('[ListTagsForTask] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},
};
