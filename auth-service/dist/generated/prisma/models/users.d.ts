import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model users
 *
 */
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password_hash: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UsersMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password_hash: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UsersCountAggregateOutputType = {
    id: number;
    email: number;
    password_hash: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UsersMinAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
};
export type UsersMaxAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
};
export type UsersCountAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    id: string;
    email: string;
    password_hash: string;
    name: string;
    created_at: Date | null;
    updated_at: Date | null;
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    id?: Prisma.UuidFilter<"users"> | string;
    email?: Prisma.StringFilter<"users"> | string;
    password_hash?: Prisma.StringFilter<"users"> | string;
    name?: Prisma.StringFilter<"users"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    activity_logs?: Prisma.Activity_logsListRelationFilter;
    project_members?: Prisma.Project_membersListRelationFilter;
    projects?: Prisma.ProjectsListRelationFilter;
    tags?: Prisma.TagsListRelationFilter;
    tasks_tasks_assignee_idTousers?: Prisma.TasksListRelationFilter;
    tasks_tasks_creator_idTousers?: Prisma.TasksListRelationFilter;
};
export type usersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    activity_logs?: Prisma.activity_logsOrderByRelationAggregateInput;
    project_members?: Prisma.project_membersOrderByRelationAggregateInput;
    projects?: Prisma.projectsOrderByRelationAggregateInput;
    tags?: Prisma.tagsOrderByRelationAggregateInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksOrderByRelationAggregateInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksOrderByRelationAggregateInput;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    password_hash?: Prisma.StringFilter<"users"> | string;
    name?: Prisma.StringFilter<"users"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    activity_logs?: Prisma.Activity_logsListRelationFilter;
    project_members?: Prisma.Project_membersListRelationFilter;
    projects?: Prisma.ProjectsListRelationFilter;
    tags?: Prisma.TagsListRelationFilter;
    tasks_tasks_assignee_idTousers?: Prisma.TasksListRelationFilter;
    tasks_tasks_creator_idTousers?: Prisma.TasksListRelationFilter;
}, "id" | "email">;
export type usersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"users"> | string;
    email?: Prisma.StringWithAggregatesFilter<"users"> | string;
    password_hash?: Prisma.StringWithAggregatesFilter<"users"> | string;
    name?: Prisma.StringWithAggregatesFilter<"users"> | string;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
};
export type usersCreateInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsCreateNestedManyWithoutUsersInput;
    project_members?: Prisma.project_membersCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersUncheckedCreateInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedCreateNestedManyWithoutUsersInput;
    project_members?: Prisma.project_membersUncheckedCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsUncheckedCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsUncheckedCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUpdateManyWithoutUsersNestedInput;
    project_members?: Prisma.project_membersUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedUpdateManyWithoutUsersNestedInput;
    project_members?: Prisma.project_membersUncheckedUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUncheckedUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUncheckedUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersCreateManyInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type usersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type usersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.usersWhereInput;
    isNot?: Prisma.usersWhereInput;
};
export type UsersNullableScalarRelationFilter = {
    is?: Prisma.usersWhereInput | null;
    isNot?: Prisma.usersWhereInput | null;
};
export type usersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersCreateNestedOneWithoutActivity_logsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutActivity_logsInput, Prisma.usersUncheckedCreateWithoutActivity_logsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutActivity_logsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutActivity_logsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutActivity_logsInput, Prisma.usersUncheckedCreateWithoutActivity_logsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutActivity_logsInput;
    upsert?: Prisma.usersUpsertWithoutActivity_logsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutActivity_logsInput, Prisma.usersUpdateWithoutActivity_logsInput>, Prisma.usersUncheckedUpdateWithoutActivity_logsInput>;
};
export type usersCreateNestedOneWithoutProject_membersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutProject_membersInput, Prisma.usersUncheckedCreateWithoutProject_membersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutProject_membersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutProject_membersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutProject_membersInput, Prisma.usersUncheckedCreateWithoutProject_membersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutProject_membersInput;
    upsert?: Prisma.usersUpsertWithoutProject_membersInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutProject_membersInput, Prisma.usersUpdateWithoutProject_membersInput>, Prisma.usersUncheckedUpdateWithoutProject_membersInput>;
};
export type usersCreateNestedOneWithoutProjectsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutProjectsInput, Prisma.usersUncheckedCreateWithoutProjectsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutProjectsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutProjectsInput, Prisma.usersUncheckedCreateWithoutProjectsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutProjectsInput;
    upsert?: Prisma.usersUpsertWithoutProjectsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutProjectsInput, Prisma.usersUpdateWithoutProjectsInput>, Prisma.usersUncheckedUpdateWithoutProjectsInput>;
};
export type usersCreateNestedOneWithoutTagsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTagsInput, Prisma.usersUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTagsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutTagsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTagsInput, Prisma.usersUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTagsInput;
    upsert?: Prisma.usersUpsertWithoutTagsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutTagsInput, Prisma.usersUpdateWithoutTagsInput>, Prisma.usersUncheckedUpdateWithoutTagsInput>;
};
export type usersCreateNestedOneWithoutTasks_tasks_assignee_idTousersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTasks_tasks_assignee_idTousersInput, Prisma.usersUncheckedCreateWithoutTasks_tasks_assignee_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTasks_tasks_assignee_idTousersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersCreateNestedOneWithoutTasks_tasks_creator_idTousersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTasks_tasks_creator_idTousersInput, Prisma.usersUncheckedCreateWithoutTasks_tasks_creator_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTasks_tasks_creator_idTousersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneWithoutTasks_tasks_assignee_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTasks_tasks_assignee_idTousersInput, Prisma.usersUncheckedCreateWithoutTasks_tasks_assignee_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTasks_tasks_assignee_idTousersInput;
    upsert?: Prisma.usersUpsertWithoutTasks_tasks_assignee_idTousersInput;
    disconnect?: Prisma.usersWhereInput | boolean;
    delete?: Prisma.usersWhereInput | boolean;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutTasks_tasks_assignee_idTousersInput, Prisma.usersUpdateWithoutTasks_tasks_assignee_idTousersInput>, Prisma.usersUncheckedUpdateWithoutTasks_tasks_assignee_idTousersInput>;
};
export type usersUpdateOneRequiredWithoutTasks_tasks_creator_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTasks_tasks_creator_idTousersInput, Prisma.usersUncheckedCreateWithoutTasks_tasks_creator_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTasks_tasks_creator_idTousersInput;
    upsert?: Prisma.usersUpsertWithoutTasks_tasks_creator_idTousersInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutTasks_tasks_creator_idTousersInput, Prisma.usersUpdateWithoutTasks_tasks_creator_idTousersInput>, Prisma.usersUncheckedUpdateWithoutTasks_tasks_creator_idTousersInput>;
};
export type usersCreateWithoutActivity_logsInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    project_members?: Prisma.project_membersCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersUncheckedCreateWithoutActivity_logsInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    project_members?: Prisma.project_membersUncheckedCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsUncheckedCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsUncheckedCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersCreateOrConnectWithoutActivity_logsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutActivity_logsInput, Prisma.usersUncheckedCreateWithoutActivity_logsInput>;
};
export type usersUpsertWithoutActivity_logsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutActivity_logsInput, Prisma.usersUncheckedUpdateWithoutActivity_logsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutActivity_logsInput, Prisma.usersUncheckedCreateWithoutActivity_logsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutActivity_logsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutActivity_logsInput, Prisma.usersUncheckedUpdateWithoutActivity_logsInput>;
};
export type usersUpdateWithoutActivity_logsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project_members?: Prisma.project_membersUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersUncheckedUpdateWithoutActivity_logsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project_members?: Prisma.project_membersUncheckedUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUncheckedUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUncheckedUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersCreateWithoutProject_membersInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersUncheckedCreateWithoutProject_membersInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsUncheckedCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsUncheckedCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersCreateOrConnectWithoutProject_membersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutProject_membersInput, Prisma.usersUncheckedCreateWithoutProject_membersInput>;
};
export type usersUpsertWithoutProject_membersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutProject_membersInput, Prisma.usersUncheckedUpdateWithoutProject_membersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutProject_membersInput, Prisma.usersUncheckedCreateWithoutProject_membersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutProject_membersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutProject_membersInput, Prisma.usersUncheckedUpdateWithoutProject_membersInput>;
};
export type usersUpdateWithoutProject_membersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersUncheckedUpdateWithoutProject_membersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUncheckedUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUncheckedUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersCreateWithoutProjectsInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsCreateNestedManyWithoutUsersInput;
    project_members?: Prisma.project_membersCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersUncheckedCreateWithoutProjectsInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedCreateNestedManyWithoutUsersInput;
    project_members?: Prisma.project_membersUncheckedCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsUncheckedCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersCreateOrConnectWithoutProjectsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutProjectsInput, Prisma.usersUncheckedCreateWithoutProjectsInput>;
};
export type usersUpsertWithoutProjectsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutProjectsInput, Prisma.usersUncheckedUpdateWithoutProjectsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutProjectsInput, Prisma.usersUncheckedCreateWithoutProjectsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutProjectsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutProjectsInput, Prisma.usersUncheckedUpdateWithoutProjectsInput>;
};
export type usersUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUpdateManyWithoutUsersNestedInput;
    project_members?: Prisma.project_membersUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersUncheckedUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedUpdateManyWithoutUsersNestedInput;
    project_members?: Prisma.project_membersUncheckedUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUncheckedUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersCreateWithoutTagsInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsCreateNestedManyWithoutUsersInput;
    project_members?: Prisma.project_membersCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersUncheckedCreateWithoutTagsInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedCreateNestedManyWithoutUsersInput;
    project_members?: Prisma.project_membersUncheckedCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsUncheckedCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersCreateOrConnectWithoutTagsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutTagsInput, Prisma.usersUncheckedCreateWithoutTagsInput>;
};
export type usersUpsertWithoutTagsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutTagsInput, Prisma.usersUncheckedUpdateWithoutTagsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutTagsInput, Prisma.usersUncheckedCreateWithoutTagsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutTagsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutTagsInput, Prisma.usersUncheckedUpdateWithoutTagsInput>;
};
export type usersUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUpdateManyWithoutUsersNestedInput;
    project_members?: Prisma.project_membersUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersUncheckedUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedUpdateManyWithoutUsersNestedInput;
    project_members?: Prisma.project_membersUncheckedUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUncheckedUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersCreateWithoutTasks_tasks_assignee_idTousersInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsCreateNestedManyWithoutUsersInput;
    project_members?: Prisma.project_membersCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsCreateNestedManyWithoutUsersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersUncheckedCreateWithoutTasks_tasks_assignee_idTousersInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedCreateNestedManyWithoutUsersInput;
    project_members?: Prisma.project_membersUncheckedCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsUncheckedCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsUncheckedCreateNestedManyWithoutUsersInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput;
};
export type usersCreateOrConnectWithoutTasks_tasks_assignee_idTousersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutTasks_tasks_assignee_idTousersInput, Prisma.usersUncheckedCreateWithoutTasks_tasks_assignee_idTousersInput>;
};
export type usersCreateWithoutTasks_tasks_creator_idTousersInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsCreateNestedManyWithoutUsersInput;
    project_members?: Prisma.project_membersCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
};
export type usersUncheckedCreateWithoutTasks_tasks_creator_idTousersInput = {
    id?: string;
    email: string;
    password_hash: string;
    name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedCreateNestedManyWithoutUsersInput;
    project_members?: Prisma.project_membersUncheckedCreateNestedManyWithoutUsersInput;
    projects?: Prisma.projectsUncheckedCreateNestedManyWithoutUsersInput;
    tags?: Prisma.tagsUncheckedCreateNestedManyWithoutUsersInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput;
};
export type usersCreateOrConnectWithoutTasks_tasks_creator_idTousersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutTasks_tasks_creator_idTousersInput, Prisma.usersUncheckedCreateWithoutTasks_tasks_creator_idTousersInput>;
};
export type usersUpsertWithoutTasks_tasks_assignee_idTousersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutTasks_tasks_assignee_idTousersInput, Prisma.usersUncheckedUpdateWithoutTasks_tasks_assignee_idTousersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutTasks_tasks_assignee_idTousersInput, Prisma.usersUncheckedCreateWithoutTasks_tasks_assignee_idTousersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutTasks_tasks_assignee_idTousersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutTasks_tasks_assignee_idTousersInput, Prisma.usersUncheckedUpdateWithoutTasks_tasks_assignee_idTousersInput>;
};
export type usersUpdateWithoutTasks_tasks_assignee_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUpdateManyWithoutUsersNestedInput;
    project_members?: Prisma.project_membersUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUpdateManyWithoutUsersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersUncheckedUpdateWithoutTasks_tasks_assignee_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedUpdateManyWithoutUsersNestedInput;
    project_members?: Prisma.project_membersUncheckedUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUncheckedUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUncheckedUpdateManyWithoutUsersNestedInput;
    tasks_tasks_creator_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput;
};
export type usersUpsertWithoutTasks_tasks_creator_idTousersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutTasks_tasks_creator_idTousersInput, Prisma.usersUncheckedUpdateWithoutTasks_tasks_creator_idTousersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutTasks_tasks_creator_idTousersInput, Prisma.usersUncheckedCreateWithoutTasks_tasks_creator_idTousersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutTasks_tasks_creator_idTousersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutTasks_tasks_creator_idTousersInput, Prisma.usersUncheckedUpdateWithoutTasks_tasks_creator_idTousersInput>;
};
export type usersUpdateWithoutTasks_tasks_creator_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUpdateManyWithoutUsersNestedInput;
    project_members?: Prisma.project_membersUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
};
export type usersUncheckedUpdateWithoutTasks_tasks_creator_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activity_logs?: Prisma.activity_logsUncheckedUpdateManyWithoutUsersNestedInput;
    project_members?: Prisma.project_membersUncheckedUpdateManyWithoutUsersNestedInput;
    projects?: Prisma.projectsUncheckedUpdateManyWithoutUsersNestedInput;
    tags?: Prisma.tagsUncheckedUpdateManyWithoutUsersNestedInput;
    tasks_tasks_assignee_idTousers?: Prisma.tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput;
};
/**
 * Count Type UsersCountOutputType
 */
export type UsersCountOutputType = {
    activity_logs: number;
    project_members: number;
    projects: number;
    tags: number;
    tasks_tasks_assignee_idTousers: number;
    tasks_tasks_creator_idTousers: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activity_logs?: boolean | UsersCountOutputTypeCountActivity_logsArgs;
    project_members?: boolean | UsersCountOutputTypeCountProject_membersArgs;
    projects?: boolean | UsersCountOutputTypeCountProjectsArgs;
    tags?: boolean | UsersCountOutputTypeCountTagsArgs;
    tasks_tasks_assignee_idTousers?: boolean | UsersCountOutputTypeCountTasks_tasks_assignee_idTousersArgs;
    tasks_tasks_creator_idTousers?: boolean | UsersCountOutputTypeCountTasks_tasks_creator_idTousersArgs;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountActivity_logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_logsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountProject_membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.project_membersWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.projectsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountTagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tagsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountTasks_tasks_assignee_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tasksWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountTasks_tasks_creator_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tasksWhereInput;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    activity_logs?: boolean | Prisma.users$activity_logsArgs<ExtArgs>;
    project_members?: boolean | Prisma.users$project_membersArgs<ExtArgs>;
    projects?: boolean | Prisma.users$projectsArgs<ExtArgs>;
    tags?: boolean | Prisma.users$tagsArgs<ExtArgs>;
    tasks_tasks_assignee_idTousers?: boolean | Prisma.users$tasks_tasks_assignee_idTousersArgs<ExtArgs>;
    tasks_tasks_creator_idTousers?: boolean | Prisma.users$tasks_tasks_creator_idTousersArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password_hash" | "name" | "created_at" | "updated_at", ExtArgs["result"]["users"]>;
export type usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activity_logs?: boolean | Prisma.users$activity_logsArgs<ExtArgs>;
    project_members?: boolean | Prisma.users$project_membersArgs<ExtArgs>;
    projects?: boolean | Prisma.users$projectsArgs<ExtArgs>;
    tags?: boolean | Prisma.users$tagsArgs<ExtArgs>;
    tasks_tasks_assignee_idTousers?: boolean | Prisma.users$tasks_tasks_assignee_idTousersArgs<ExtArgs>;
    tasks_tasks_creator_idTousers?: boolean | Prisma.users$tasks_tasks_creator_idTousersArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type usersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type usersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {
        activity_logs: Prisma.$activity_logsPayload<ExtArgs>[];
        project_members: Prisma.$project_membersPayload<ExtArgs>[];
        projects: Prisma.$projectsPayload<ExtArgs>[];
        tags: Prisma.$tagsPayload<ExtArgs>[];
        tasks_tasks_assignee_idTousers: Prisma.$tasksPayload<ExtArgs>[];
        tasks_tasks_creator_idTousers: Prisma.$tasksPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password_hash: string;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     *
     */
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     *
     */
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     *
     */
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the users model
     */
    readonly fields: usersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for users.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    activity_logs<T extends Prisma.users$activity_logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$activity_logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    project_members<T extends Prisma.users$project_membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$project_membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    projects<T extends Prisma.users$projectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tags<T extends Prisma.users$tagsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tasks_tasks_assignee_idTousers<T extends Prisma.users$tasks_tasks_assignee_idTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$tasks_tasks_assignee_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tasks_tasks_creator_idTousers<T extends Prisma.users$tasks_tasks_creator_idTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$tasks_tasks_creator_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the users model
 */
export interface usersFieldRefs {
    readonly id: Prisma.FieldRef<"users", 'String'>;
    readonly email: Prisma.FieldRef<"users", 'String'>;
    readonly password_hash: Prisma.FieldRef<"users", 'String'>;
    readonly name: Prisma.FieldRef<"users", 'String'>;
    readonly created_at: Prisma.FieldRef<"users", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"users", 'DateTime'>;
}
/**
 * users findUnique
 */
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users findUniqueOrThrow
 */
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users findFirst
 */
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * users findFirstOrThrow
 */
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * users findMany
 */
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * users create
 */
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * The data needed to create a users.
     */
    data: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
/**
 * users createMany
 */
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * users createManyAndReturn
 */
export type usersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * The data used to create many users.
     */
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * users update
 */
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * The data needed to update a users.
     */
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    /**
     * Choose, which users to update.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users updateMany
 */
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: Prisma.usersWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
};
/**
 * users updateManyAndReturn
 */
export type usersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * The data used to update users.
     */
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: Prisma.usersWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
};
/**
 * users upsert
 */
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: Prisma.usersWhereUniqueInput;
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
/**
 * users delete
 */
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter which users to delete.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users deleteMany
 */
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: Prisma.usersWhereInput;
    /**
     * Limit how many users to delete.
     */
    limit?: number;
};
/**
 * users.activity_logs
 */
export type users$activity_logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithRelationInput | Prisma.activity_logsOrderByWithRelationInput[];
    cursor?: Prisma.activity_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Activity_logsScalarFieldEnum | Prisma.Activity_logsScalarFieldEnum[];
};
/**
 * users.project_members
 */
export type users$project_membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: Prisma.project_membersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project_members
     */
    omit?: Prisma.project_membersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.project_membersInclude<ExtArgs> | null;
    where?: Prisma.project_membersWhereInput;
    orderBy?: Prisma.project_membersOrderByWithRelationInput | Prisma.project_membersOrderByWithRelationInput[];
    cursor?: Prisma.project_membersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Project_membersScalarFieldEnum | Prisma.Project_membersScalarFieldEnum[];
};
/**
 * users.projects
 */
export type users$projectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: Prisma.projectsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the projects
     */
    omit?: Prisma.projectsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.projectsInclude<ExtArgs> | null;
    where?: Prisma.projectsWhereInput;
    orderBy?: Prisma.projectsOrderByWithRelationInput | Prisma.projectsOrderByWithRelationInput[];
    cursor?: Prisma.projectsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectsScalarFieldEnum | Prisma.ProjectsScalarFieldEnum[];
};
/**
 * users.tags
 */
export type users$tagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: Prisma.tagsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tags
     */
    omit?: Prisma.tagsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tagsInclude<ExtArgs> | null;
    where?: Prisma.tagsWhereInput;
    orderBy?: Prisma.tagsOrderByWithRelationInput | Prisma.tagsOrderByWithRelationInput[];
    cursor?: Prisma.tagsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TagsScalarFieldEnum | Prisma.TagsScalarFieldEnum[];
};
/**
 * users.tasks_tasks_assignee_idTousers
 */
export type users$tasks_tasks_assignee_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: Prisma.tasksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tasks
     */
    omit?: Prisma.tasksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tasksInclude<ExtArgs> | null;
    where?: Prisma.tasksWhereInput;
    orderBy?: Prisma.tasksOrderByWithRelationInput | Prisma.tasksOrderByWithRelationInput[];
    cursor?: Prisma.tasksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TasksScalarFieldEnum | Prisma.TasksScalarFieldEnum[];
};
/**
 * users.tasks_tasks_creator_idTousers
 */
export type users$tasks_tasks_creator_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: Prisma.tasksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tasks
     */
    omit?: Prisma.tasksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tasksInclude<ExtArgs> | null;
    where?: Prisma.tasksWhereInput;
    orderBy?: Prisma.tasksOrderByWithRelationInput | Prisma.tasksOrderByWithRelationInput[];
    cursor?: Prisma.tasksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TasksScalarFieldEnum | Prisma.TasksScalarFieldEnum[];
};
/**
 * users without action
 */
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=users.d.ts.map