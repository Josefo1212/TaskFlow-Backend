import * as grpc from '@grpc/grpc-js';
import {
	addProjectMember,
	createProject,
	deleteProject,
	getProject,
	listProjectMembers,
	listProjects,
	removeProjectMember,
	updateProject,
	updateProjectMemberRole,
	ProjectMember,
	Project,
} from '../services/project.service';
import { ProjectServiceError } from '../utils/project-errors';

interface ProjectGrpcResponse {
	id: string;
	owner_id: string;
	name: string;
	description: string;
	created_at: string;
	updated_at: string;
}

interface ProjectMemberGrpcResponse {
	id: string;
	project_id: string;
	user_id: string;
	role: string;
	created_at: string;
}

interface CreateProjectGrpcRequest {
	requester_id: string;
	name: string;
	description?: string;
}

interface CreateProjectGrpcResponse {
	project: ProjectGrpcResponse;
}

interface ListProjectsGrpcRequest {
	requester_id: string;
	page?: number;
	limit?: number;
}

interface ListProjectsGrpcResponse {
	projects: ProjectGrpcResponse[];
	total: number;
	page: number;
	limit: number;
}

interface GetProjectGrpcRequest {
	requester_id: string;
	project_id: string;
}

interface GetProjectGrpcResponse {
	project: ProjectGrpcResponse;
}

interface UpdateProjectGrpcRequest {
	requester_id: string;
	project_id: string;
	name?: string;
	description?: string;
}

interface UpdateProjectGrpcResponse {
	project: ProjectGrpcResponse;
}

interface DeleteProjectGrpcRequest {
	requester_id: string;
	project_id: string;
}

interface DeleteProjectGrpcResponse {
	deleted: boolean;
}

interface AddProjectMemberGrpcRequest {
	requester_id: string;
	project_id: string;
	user_id: string;
	role?: string;
}

interface AddProjectMemberGrpcResponse {
	member: ProjectMemberGrpcResponse;
}

interface ListProjectMembersGrpcRequest {
	requester_id: string;
	project_id: string;
}

interface ListProjectMembersGrpcResponse {
	members: ProjectMemberGrpcResponse[];
}

interface UpdateProjectMemberRoleGrpcRequest {
	requester_id: string;
	project_id: string;
	user_id: string;
	role: string;
}

interface UpdateProjectMemberRoleGrpcResponse {
	member: ProjectMemberGrpcResponse;
}

interface RemoveProjectMemberGrpcRequest {
	requester_id: string;
	project_id: string;
	user_id: string;
}

interface RemoveProjectMemberGrpcResponse {
	removed: boolean;
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
	if (error instanceof ProjectServiceError) {
		return {
			code: mapHttpErrorToGrpcCode(error.statusCode),
			message: error.message,
			name: 'ProjectServiceError',
		} as grpc.ServiceError;
	}

	return {
		code: grpc.status.INTERNAL,
		message: 'Internal server error',
		name: 'InternalError',
	} as grpc.ServiceError;
}

function mapProject(project: Project): ProjectGrpcResponse {
	return {
		id: project.id,
		owner_id: project.ownerId ?? '',
		name: project.name,
		description: project.description ?? '',
		created_at: project.createdAt,
		updated_at: project.updatedAt,
	};
}

function mapMember(member: ProjectMember): ProjectMemberGrpcResponse {
	return {
		id: member.id,
		project_id: member.projectId,
		user_id: member.userId,
		role: member.role,
		created_at: member.createdAt,
	};
}

export const projectController: grpc.UntypedServiceImplementation = {
	CreateProject: async (
		call: grpc.ServerUnaryCall<CreateProjectGrpcRequest, CreateProjectGrpcResponse>,
		callback: grpc.sendUnaryData<CreateProjectGrpcResponse>,
	) => {
		try {
			const requestPayload: Parameters<typeof createProject>[0] = {
				requesterId: call.request.requester_id ?? '',
				name: call.request.name ?? '',
			};

			if (typeof call.request.description === 'string') {
				requestPayload.description = call.request.description;
			}

			const project = await createProject(requestPayload);

			callback(null, { project: mapProject(project) });
		} catch (error) {
			console.error('[CreateProject] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	ListProjects: async (
		call: grpc.ServerUnaryCall<ListProjectsGrpcRequest, ListProjectsGrpcResponse>,
		callback: grpc.sendUnaryData<ListProjectsGrpcResponse>,
	) => {
		try {
			const requestPayload: Parameters<typeof listProjects>[0] = {
				requesterId: call.request.requester_id ?? '',
			};

			if (typeof call.request.page === 'number') {
				requestPayload.page = call.request.page;
			}

			if (typeof call.request.limit === 'number') {
				requestPayload.limit = call.request.limit;
			}

			const result = await listProjects(requestPayload);

			callback(null, {
				projects: result.projects.map(mapProject),
				total: result.total,
				page: result.page,
				limit: result.limit,
			});
		} catch (error) {
			console.error('[ListProjects] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	GetProject: async (
		call: grpc.ServerUnaryCall<GetProjectGrpcRequest, GetProjectGrpcResponse>,
		callback: grpc.sendUnaryData<GetProjectGrpcResponse>,
	) => {
		try {
			const project = await getProject({
				requesterId: call.request.requester_id ?? '',
				projectId: call.request.project_id ?? '',
			});
			callback(null, { project: mapProject(project) });
		} catch (error) {
			console.error('[GetProject] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	UpdateProject: async (
		call: grpc.ServerUnaryCall<UpdateProjectGrpcRequest, UpdateProjectGrpcResponse>,
		callback: grpc.sendUnaryData<UpdateProjectGrpcResponse>,
	) => {
		try {
			const requestPayload: Parameters<typeof updateProject>[0] = {
				requesterId: call.request.requester_id ?? '',
				projectId: call.request.project_id ?? '',
			};

			if (typeof call.request.name === 'string') {
				requestPayload.name = call.request.name;
			}

			if (typeof call.request.description === 'string') {
				requestPayload.description = call.request.description;
			}

			const project = await updateProject(requestPayload);
			callback(null, { project: mapProject(project) });
		} catch (error) {
			console.error('[UpdateProject] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	DeleteProject: async (
		call: grpc.ServerUnaryCall<DeleteProjectGrpcRequest, DeleteProjectGrpcResponse>,
		callback: grpc.sendUnaryData<DeleteProjectGrpcResponse>,
	) => {
		try {
			const result = await deleteProject({
				requesterId: call.request.requester_id ?? '',
				projectId: call.request.project_id ?? '',
			});
			callback(null, { deleted: result.deleted });
		} catch (error) {
			console.error('[DeleteProject] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	AddProjectMember: async (
		call: grpc.ServerUnaryCall<AddProjectMemberGrpcRequest, AddProjectMemberGrpcResponse>,
		callback: grpc.sendUnaryData<AddProjectMemberGrpcResponse>,
	) => {
		try {
			const requestPayload: Parameters<typeof addProjectMember>[0] = {
				requesterId: call.request.requester_id ?? '',
				projectId: call.request.project_id ?? '',
				userId: call.request.user_id ?? '',
			};

			if (typeof call.request.role === 'string') {
				requestPayload.role = call.request.role;
			}

			const member = await addProjectMember(requestPayload);
			callback(null, { member: mapMember(member) });
		} catch (error) {
			console.error('[AddProjectMember] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	ListProjectMembers: async (
		call: grpc.ServerUnaryCall<ListProjectMembersGrpcRequest, ListProjectMembersGrpcResponse>,
		callback: grpc.sendUnaryData<ListProjectMembersGrpcResponse>,
	) => {
		try {
			const members = await listProjectMembers({
				requesterId: call.request.requester_id ?? '',
				projectId: call.request.project_id ?? '',
			});
			callback(null, { members: members.map(mapMember) });
		} catch (error) {
			console.error('[ListProjectMembers] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	UpdateProjectMemberRole: async (
		call: grpc.ServerUnaryCall<UpdateProjectMemberRoleGrpcRequest, UpdateProjectMemberRoleGrpcResponse>,
		callback: grpc.sendUnaryData<UpdateProjectMemberRoleGrpcResponse>,
	) => {
		try {
			const member = await updateProjectMemberRole({
				requesterId: call.request.requester_id ?? '',
				projectId: call.request.project_id ?? '',
				userId: call.request.user_id ?? '',
				role: call.request.role ?? '',
			});
			callback(null, { member: mapMember(member) });
		} catch (error) {
			console.error('[UpdateProjectMemberRole] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},

	RemoveProjectMember: async (
		call: grpc.ServerUnaryCall<RemoveProjectMemberGrpcRequest, RemoveProjectMemberGrpcResponse>,
		callback: grpc.sendUnaryData<RemoveProjectMemberGrpcResponse>,
	) => {
		try {
			const result = await removeProjectMember({
				requesterId: call.request.requester_id ?? '',
				projectId: call.request.project_id ?? '',
				userId: call.request.user_id ?? '',
			});
			callback(null, { removed: result.removed });
		} catch (error) {
			console.error('[RemoveProjectMember] Internal error:', error);
			callback(toGrpcServiceError(error));
		}
	},
};
