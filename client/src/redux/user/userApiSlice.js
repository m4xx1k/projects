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

export const {useSingInMutation, useSingUpMutation, useFindUserByIdQuery
,useFindUserProjectsQuery,useFindUserTasksQuery  } = userApiSlice
