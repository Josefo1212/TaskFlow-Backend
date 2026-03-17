import * as grpc from '@grpc/grpc-js';
import {
	AddTagToTaskGrpcRequest,
	AddTagToTaskGrpcResponse,
	CreateTagGrpcRequest,
	CreateTagGrpcResponse,
	DeleteTagGrpcRequest,
	DeleteTagGrpcResponse,
	GetTagGrpcRequest,
	GetTagGrpcResponse,
	ListTagsForTaskGrpcRequest,
	ListTagsForTaskGrpcResponse,
	ListTagsGrpcRequest,
	ListTagsGrpcResponse,
	RemoveTagFromTaskGrpcRequest,
	RemoveTagFromTaskGrpcResponse,
	UpdateTagGrpcRequest,
	UpdateTagGrpcResponse,
	tagClient,
} from '../grpc/tag.client';
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
				reject(new Error('Empty response from tag-service'));
				return;
			}

			resolve(response);
		});
	});
}

export function createTagWithTagService(payload: CreateTagGrpcRequest): Promise<CreateTagGrpcResponse> {
	return promisifyUnaryCall(tagClient, tagClient.CreateTag, payload);
}

export function getTagWithTagService(payload: GetTagGrpcRequest): Promise<GetTagGrpcResponse> {
	return promisifyUnaryCall(tagClient, tagClient.GetTag, payload);
}

export function updateTagWithTagService(payload: UpdateTagGrpcRequest): Promise<UpdateTagGrpcResponse> {
	return promisifyUnaryCall(tagClient, tagClient.UpdateTag, payload);
}

export function deleteTagWithTagService(payload: DeleteTagGrpcRequest): Promise<DeleteTagGrpcResponse> {
	return promisifyUnaryCall(tagClient, tagClient.DeleteTag, payload);
}

export function listTagsWithTagService(payload: ListTagsGrpcRequest): Promise<ListTagsGrpcResponse> {
	return promisifyUnaryCall(tagClient, tagClient.ListTags, payload);
}

export function addTagToTaskWithTagService(payload: AddTagToTaskGrpcRequest): Promise<AddTagToTaskGrpcResponse> {
	return promisifyUnaryCall(tagClient, tagClient.AddTagToTask, payload);
}

export function removeTagFromTaskWithTagService(
	payload: RemoveTagFromTaskGrpcRequest,
): Promise<RemoveTagFromTaskGrpcResponse> {
	return promisifyUnaryCall(tagClient, tagClient.RemoveTagFromTask, payload);
}

export function listTagsForTaskWithTagService(
	payload: ListTagsForTaskGrpcRequest,
): Promise<ListTagsForTaskGrpcResponse> {
	return promisifyUnaryCall(tagClient, tagClient.ListTagsForTask, payload);
}
