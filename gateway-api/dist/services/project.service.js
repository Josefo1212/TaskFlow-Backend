"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectWithProjectService = createProjectWithProjectService;
exports.listProjectsWithProjectService = listProjectsWithProjectService;
exports.getProjectWithProjectService = getProjectWithProjectService;
exports.updateProjectWithProjectService = updateProjectWithProjectService;
exports.deleteProjectWithProjectService = deleteProjectWithProjectService;
exports.addProjectMemberWithProjectService = addProjectMemberWithProjectService;
exports.listProjectMembersWithProjectService = listProjectMembersWithProjectService;
exports.updateProjectMemberRoleWithProjectService = updateProjectMemberRoleWithProjectService;
exports.removeProjectMemberWithProjectService = removeProjectMemberWithProjectService;
const project_client_1 = require("../grpc/project.client");
const grpc_error_mapper_1 = require("../utils/grpc-error-mapper");
function promisifyUnaryCall(client, method, request) {
    return new Promise((resolve, reject) => {
        method.call(client, request, (error, response) => {
            if (error) {
                reject((0, grpc_error_mapper_1.mapGrpcErrorToHttp)(error));
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
function createProjectWithProjectService(payload) {
    return promisifyUnaryCall(project_client_1.projectClient, project_client_1.projectClient.CreateProject, payload);
}
function listProjectsWithProjectService(payload) {
    return promisifyUnaryCall(project_client_1.projectClient, project_client_1.projectClient.ListProjects, payload);
}
function getProjectWithProjectService(payload) {
    return promisifyUnaryCall(project_client_1.projectClient, project_client_1.projectClient.GetProject, payload);
}
function updateProjectWithProjectService(payload) {
    return promisifyUnaryCall(project_client_1.projectClient, project_client_1.projectClient.UpdateProject, payload);
}
function deleteProjectWithProjectService(payload) {
    return promisifyUnaryCall(project_client_1.projectClient, project_client_1.projectClient.DeleteProject, payload);
}
function addProjectMemberWithProjectService(payload) {
    return promisifyUnaryCall(project_client_1.projectClient, project_client_1.projectClient.AddProjectMember, payload);
}
function listProjectMembersWithProjectService(payload) {
    return promisifyUnaryCall(project_client_1.projectClient, project_client_1.projectClient.ListProjectMembers, payload);
}
function updateProjectMemberRoleWithProjectService(payload) {
    return promisifyUnaryCall(project_client_1.projectClient, project_client_1.projectClient.UpdateProjectMemberRole, payload);
}
function removeProjectMemberWithProjectService(payload) {
    return promisifyUnaryCall(project_client_1.projectClient, project_client_1.projectClient.RemoveProjectMember, payload);
}
//# sourceMappingURL=project.service.js.map