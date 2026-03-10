import * as grpc from '@grpc/grpc-js';
import {
	CheckUserExistsGrpcRequest,
	CheckUserExistsGrpcResponse,
	GetBasicInfoGrpcRequest,
	GetBasicInfoGrpcResponse,
	GetProfileGrpcRequest,
	GetProfileGrpcResponse,
	GetUsersByIdsGrpcRequest,
	GetUsersByIdsGrpcResponse,
	ListUsersGrpcRequest,
	ListUsersGrpcResponse,
	SearchUsersGrpcRequest,
	SearchUsersGrpcResponse,
	UpdateProfileGrpcRequest,
	UpdateProfileGrpcResponse,
	userClient,
} from '../grpc/user.client';
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
				reject(new Error('Empty response from user-service'));
				return;
			}

			resolve(response);
		});
	});
}

export function getProfileWithUserService(payload: GetProfileGrpcRequest): Promise<GetProfileGrpcResponse> {
	return promisifyUnaryCall(userClient, userClient.GetProfile, payload);
}

export function updateProfileWithUserService(payload: UpdateProfileGrpcRequest): Promise<UpdateProfileGrpcResponse> {
	return promisifyUnaryCall(userClient, userClient.UpdateProfile, payload);
}

export function listUsersWithUserService(payload: ListUsersGrpcRequest): Promise<ListUsersGrpcResponse> {
	return promisifyUnaryCall(userClient, userClient.ListUsers, payload);
}

export function searchUsersWithUserService(payload: SearchUsersGrpcRequest): Promise<SearchUsersGrpcResponse> {
	return promisifyUnaryCall(userClient, userClient.SearchUsers, payload);
}

export function getUsersByIdsWithUserService(payload: GetUsersByIdsGrpcRequest): Promise<GetUsersByIdsGrpcResponse> {
	return promisifyUnaryCall(userClient, userClient.GetUsersByIds, payload);
}

export function checkUserExistsWithUserService(payload: CheckUserExistsGrpcRequest): Promise<CheckUserExistsGrpcResponse> {
	return promisifyUnaryCall(userClient, userClient.CheckUserExists, payload);
}

export function getBasicInfoWithUserService(payload: GetBasicInfoGrpcRequest): Promise<GetBasicInfoGrpcResponse> {
	return promisifyUnaryCall(userClient, userClient.GetBasicInfo, payload);
}