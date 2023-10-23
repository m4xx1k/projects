import {apiSlice} from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        singIn: build.mutation({
            query: body => ({
                url: 'user/login',
                method: 'POST',
                body
            }),
            invalidatesTags: ['User']
        }),
        singUp: build.mutation({
            query: body => ({
                url: 'user/registration',
                method: 'POST',
                body
            }),
            invalidatesTags: ['User']
        }),
        updateUser: build.mutation({
            query: body => ({
                url: 'user/update',
                method: 'PUT',
                body
            }),
            invalidatesTags: ['User']
        }),
        deleteUser: build.mutation({
            query: id => ({
                url: `user/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User']
        }),
        findUserById: build.query({
            query: id => `user/${id}`,
            providesTags: ['User']
        }),
        findUserProjects: build.query({
            query: id => `user/projects/${id}`,
            providesTags: ['User', 'ProjectParticipant', 'Project']
        }),
        findUserTasks: build.query({
            query: id => `user/tasks/${id}`,
            providesTags: ['User', 'Task', 'Project']
        }),
    })
})

export const {useDeleteUserMutation,useSingInMutation, useSingUpMutation, useFindUserByIdQuery, useUpdateUserMutation
,useFindUserProjectsQuery,useFindUserTasksQuery  } = userApiSlice
