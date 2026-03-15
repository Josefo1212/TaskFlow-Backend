import { ProjectMemberRole } from '../queries/project.queries';
export interface Project {
    id: string;
    ownerId?: string;
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
}
export interface ProjectMember {
    id: string;
    projectId: string;
    userId: string;
    role: ProjectMemberRole;
    createdAt: string;
}
export declare function createProject(input: {
    requesterId: string;
    name: string;
    description?: string;
}): Promise<Project>;
export declare function listProjects(input: {
    requesterId: string;
    page?: number;
    limit?: number;
}): Promise<{
    projects: Project[];
    total: number;
    page: number;
    limit: number;
}>;
export declare function getProject(input: {
    requesterId: string;
    projectId: string;
}): Promise<Project>;
export declare function updateProject(input: {
    requesterId: string;
    projectId: string;
    name?: string;
    description?: string;
}): Promise<Project>;
export declare function deleteProject(input: {
    requesterId: string;
    projectId: string;
}): Promise<{
    deleted: boolean;
}>;
export declare function addProjectMember(input: {
    requesterId: string;
    projectId: string;
    userId: string;
    role?: string;
}): Promise<ProjectMember>;
export declare function listProjectMembers(input: {
    requesterId: string;
    projectId: string;
}): Promise<ProjectMember[]>;
export declare function updateProjectMemberRole(input: {
    requesterId: string;
    projectId: string;
    userId: string;
    role: string;
}): Promise<ProjectMember>;
export declare function removeProjectMember(input: {
    requesterId: string;
    projectId: string;
    userId: string;
}): Promise<{
    removed: boolean;
}>;
//# sourceMappingURL=project.service.d.ts.map