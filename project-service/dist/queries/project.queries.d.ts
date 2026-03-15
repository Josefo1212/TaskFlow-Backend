export type ProjectMemberRole = 'admin' | 'member' | 'viewer';
export interface ProjectRow {
    id: string;
    owner_id: string | null;
    name: string;
    description: string | null;
    created_at: string | Date;
    updated_at: string | Date;
}
export interface ProjectAccessRow {
    owner_id: string | null;
    role: ProjectMemberRole | null;
}
export interface ProjectMemberRow {
    id: string;
    project_id: string;
    user_id: string;
    role: ProjectMemberRole;
    created_at: string | Date;
}
export declare function createProjectRow(input: {
    ownerId: string;
    name: string;
    description?: string | null;
}): Promise<ProjectRow>;
export declare function getProjectAccessRow(projectId: string, requesterId: string): Promise<ProjectAccessRow | null>;
export declare function getProjectByIdForUserRow(projectId: string, requesterId: string): Promise<ProjectRow | null>;
export declare function listProjectsForUserRows(requesterId: string, limit: number, offset: number): Promise<ProjectRow[]>;
export declare function countProjectsForUser(requesterId: string): Promise<number>;
export declare function updateProjectRow(projectId: string, patch: {
    name?: string | null;
    description?: string | null;
}): Promise<ProjectRow>;
export declare function deleteProjectRow(projectId: string): Promise<boolean>;
export declare function addProjectMemberRow(input: {
    projectId: string;
    userId: string;
    role: ProjectMemberRole;
}): Promise<ProjectMemberRow | null>;
export declare function listProjectMembersRows(projectId: string): Promise<ProjectMemberRow[]>;
export declare function updateProjectMemberRoleRow(input: {
    projectId: string;
    userId: string;
    role: ProjectMemberRole;
}): Promise<ProjectMemberRow | null>;
export declare function removeProjectMemberRow(projectId: string, userId: string): Promise<boolean>;
//# sourceMappingURL=project.queries.d.ts.map