import * as grpc from '@grpc/grpc-js';
import {
	AddProjectMemberGrpcRequest,
	AddProjectMemberGrpcResponse,
	CreateProjectGrpcRequest,
	CreateProjectGrpcResponse,
	DeleteProjectGrpcRequest,
	DeleteProjectGrpcResponse,
	GetProjectGrpcRequest,
	GetProjectGrpcResponse,
	ListProjectMembersGrpcRequest,
	ListProjectMembersGrpcResponse,
	ListProjectsGrpcRequest,
	ListProjectsGrpcResponse,
	RemoveProjectMemberGrpcRequest,
	RemoveProjectMemberGrpcResponse,
	UpdateProjectGrpcRequest,
	UpdateProjectGrpcResponse,
	UpdateProjectMemberRoleGrpcRequest,
	UpdateProjectMemberRoleGrpcResponse,
	projectClient,
} from '../grpc/project.client';
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
				reject(new Error('Empty response from project-service'));
				return;
			}

			resolve(response);
		});
	});
}

export function createProjectWithProjectService(payload: CreateProjectGrpcRequest): Promise<CreateProjectGrpcResponse> {
	return promisifyUnaryCall(projectClient, projectClient.CreateProject, payload);
}

export function listProjectsWithProjectService(payload: ListProjectsGrpcRequest): Promise<ListProjectsGrpcResponse> {
	return promisifyUnaryCall(projectClient, projectClient.ListProjects, payload);
}

export function getProjectWithProjectService(payload: GetProjectGrpcRequest): Promise<GetProjectGrpcResponse> {
	return promisifyUnaryCall(projectClient, projectClient.GetProject, payload);
}

export function updateProjectWithProjectService(payload: UpdateProjectGrpcRequest): Promise<UpdateProjectGrpcResponse> {
	return promisifyUnaryCall(projectClient, projectClient.UpdateProject, payload);
}

export function deleteProjectWithProjectService(payload: DeleteProjectGrpcRequest): Promise<DeleteProjectGrpcResponse> {
	return promisifyUnaryCall(projectClient, projectClient.DeleteProject, payload);
}

export function addProjectMemberWithProjectService(
	payload: AddProjectMemberGrpcRequest,
): Promise<AddProjectMemberGrpcResponse> {
	return promisifyUnaryCall(projectClient, projectClient.AddProjectMember, payload);
}

export function listProjectMembersWithProjectService(
	payload: ListProjectMembersGrpcRequest,
): Promise<ListProjectMembersGrpcResponse> {
	return promisifyUnaryCall(projectClient, projectClient.ListProjectMembers, payload);
}

export function updateProjectMemberRoleWithProjectService(
	payload: UpdateProjectMemberRoleGrpcRequest,
): Promise<UpdateProjectMemberRoleGrpcResponse> {
	return promisifyUnaryCall(projectClient, projectClient.UpdateProjectMemberRole, payload);
}

export function removeProjectMemberWithProjectService(
	payload: RemoveProjectMemberGrpcRequest,
): Promise<RemoveProjectMemberGrpcResponse> {
	return promisifyUnaryCall(projectClient, projectClient.RemoveProjectMember, payload);
}
