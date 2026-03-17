import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { env } from '../config/env';

export interface TagGrpcResponse {
	id: string;
	owner_id: string;
	name: string;
	color: string;
	created_at: string;
}

export interface CreateTagGrpcRequest {
	requester_id: string;
	name: string;
	color?: string;
}

export interface CreateTagGrpcResponse {
	tag: TagGrpcResponse;
}

export interface GetTagGrpcRequest {
	requester_id: string;
	tag_id: string;
}

export interface GetTagGrpcResponse {
	tag: TagGrpcResponse;
}

export interface UpdateTagGrpcRequest {
	requester_id: string;
	tag_id: string;
	name?: string;
	color?: string;
}

export interface UpdateTagGrpcResponse {
	tag: TagGrpcResponse;
}

export interface DeleteTagGrpcRequest {
	requester_id: string;
	tag_id: string;
}

export interface DeleteTagGrpcResponse {
	deleted: boolean;
}

export interface ListTagsGrpcRequest {
	requester_id: string;
	page?: number;
	limit?: number;
}

export interface ListTagsGrpcResponse {
	tags: TagGrpcResponse[];
	total: number;
	page: number;
	limit: number;
}

export interface AddTagToTaskGrpcRequest {
	requester_id: string;
	task_id: string;
	tag_id: string;
}

export interface AddTagToTaskGrpcResponse {
	added: boolean;
}

export interface RemoveTagFromTaskGrpcRequest {
	requester_id: string;
	task_id: string;
	tag_id: string;
}

export interface RemoveTagFromTaskGrpcResponse {
	removed: boolean;
}

export interface ListTagsForTaskGrpcRequest {
	requester_id: string;
	task_id: string;
}

export interface ListTagsForTaskGrpcResponse {
	tags: TagGrpcResponse[];
}

interface TagServiceClient extends grpc.Client {
	CreateTag(request: CreateTagGrpcRequest, callback: grpc.requestCallback<CreateTagGrpcResponse>): void;
	GetTag(request: GetTagGrpcRequest, callback: grpc.requestCallback<GetTagGrpcResponse>): void;
	UpdateTag(request: UpdateTagGrpcRequest, callback: grpc.requestCallback<UpdateTagGrpcResponse>): void;
	DeleteTag(request: DeleteTagGrpcRequest, callback: grpc.requestCallback<DeleteTagGrpcResponse>): void;
	ListTags(request: ListTagsGrpcRequest, callback: grpc.requestCallback<ListTagsGrpcResponse>): void;
	AddTagToTask(request: AddTagToTaskGrpcRequest, callback: grpc.requestCallback<AddTagToTaskGrpcResponse>): void;
	RemoveTagFromTask(
		request: RemoveTagFromTaskGrpcRequest,
		callback: grpc.requestCallback<RemoveTagFromTaskGrpcResponse>,
	): void;
	ListTagsForTask(
		request: ListTagsForTaskGrpcRequest,
		callback: grpc.requestCallback<ListTagsForTaskGrpcResponse>,
	): void;
}

interface LoadedTagPackage {
	tag: {
		TagService: grpc.ServiceClientConstructor;
	};
}

const protoPath = path.resolve(__dirname, '../../proto/tag.proto');

const packageDefinition = protoLoader.loadSync(protoPath, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const loadedProto = grpc.loadPackageDefinition(packageDefinition) as unknown as LoadedTagPackage;

export const tagClient = new loadedProto.tag.TagService(
	env.TAG_GRPC_URL,
	grpc.credentials.createInsecure(),
) as unknown as TagServiceClient;
