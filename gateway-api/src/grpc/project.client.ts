import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { env } from '../config/env';

export interface ProjectGrpcResponse {
	id: string;
	owner_id: string;
	name: string;
	description: string;
	created_at: string;
	updated_at: string;
}

export interface ProjectMemberGrpcResponse {
	id: string;
	project_id: string;
	user_id: string;
	role: string;
	created_at: string;
}

export interface CreateProjectGrpcRequest {
	requester_id: string;
	name: string;	description?: string;
}

export interface CreateProjectGrpcResponse {
	project: ProjectGrpcResponse;
}

export interface ListProjectsGrpcRequest {
	requester_id: string;	page?: number;	limit?: number;
}

export interface ListProjectsGrpcResponse {
	projects: ProjectGrpcResponse[];	total: number;	page: number;	limit: number;
}

export interface GetProjectGrpcRequest {
	requester_id: string;	project_id: string;
}

export interface GetProjectGrpcResponse {
	project: ProjectGrpcResponse;
}

export interface UpdateProjectGrpcRequest {
	requester_id: string;	project_id: string;	name?: string;	description?: string;
}

export interface UpdateProjectGrpcResponse {
	project: ProjectGrpcResponse;
}

export interface DeleteProjectGrpcRequest {
	requester_id: string;	project_id: string;
}

export interface DeleteProjectGrpcResponse {
	deleted: boolean;
}

export interface AddProjectMemberGrpcRequest {
	requester_id: string;	project_id: string;	user_id: string;	role?: string;
}

export interface AddProjectMemberGrpcResponse {
	member: ProjectMemberGrpcResponse;
}

export interface ListProjectMembersGrpcRequest {
	requester_id: string;	project_id: string;
}

export interface ListProjectMembersGrpcResponse {
	members: ProjectMemberGrpcResponse[];
}

export interface UpdateProjectMemberRoleGrpcRequest {
	requester_id: string;	project_id: string;	user_id: string;	role: string;
}

export interface UpdateProjectMemberRoleGrpcResponse {
	member: ProjectMemberGrpcResponse;
}

export interface RemoveProjectMemberGrpcRequest {
	requester_id: string;	project_id: string;	user_id: string;
}

export interface RemoveProjectMemberGrpcResponse {
	removed: boolean;
}

interface ProjectServiceClient extends grpc.Client {
	CreateProject(request: CreateProjectGrpcRequest, callback: grpc.requestCallback<CreateProjectGrpcResponse>): void;
	ListProjects(request: ListProjectsGrpcRequest, callback: grpc.requestCallback<ListProjectsGrpcResponse>): void;
	GetProject(request: GetProjectGrpcRequest, callback: grpc.requestCallback<GetProjectGrpcResponse>): void;
	UpdateProject(request: UpdateProjectGrpcRequest, callback: grpc.requestCallback<UpdateProjectGrpcResponse>): void;
	DeleteProject(request: DeleteProjectGrpcRequest, callback: grpc.requestCallback<DeleteProjectGrpcResponse>): void;
	AddProjectMember(request: AddProjectMemberGrpcRequest, callback: grpc.requestCallback<AddProjectMemberGrpcResponse>): void;
	ListProjectMembers(request: ListProjectMembersGrpcRequest, callback: grpc.requestCallback<ListProjectMembersGrpcResponse>): void;
	UpdateProjectMemberRole(
		request: UpdateProjectMemberRoleGrpcRequest,
		callback: grpc.requestCallback<UpdateProjectMemberRoleGrpcResponse>,
	): void;
	RemoveProjectMember(
		request: RemoveProjectMemberGrpcRequest,
		callback: grpc.requestCallback<RemoveProjectMemberGrpcResponse>,
	): void;
}

interface LoadedProjectPackage {
	project: {
		ProjectService: grpc.ServiceClientConstructor;
	};
}

const protoPath = path.resolve(__dirname, '../../proto/project.proto');

const packageDefinition = protoLoader.loadSync(protoPath, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const loadedProto = grpc.loadPackageDefinition(packageDefinition) as unknown as LoadedProjectPackage;

export const projectClient = new loadedProto.project.ProjectService(
	env.PROJECT_GRPC_URL,
	grpc.credentials.createInsecure(),
) as unknown as ProjectServiceClient;
