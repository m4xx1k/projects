import {apiSlice} from "../apiSlice";

export const projectApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        createProject: build.mutation({
            query: body => ({
                url: 'project/',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Project']
        }),
        findAllProject: build.query({
            query: body => ({
                url: 'project/all',
                method: "POST",
                body
            }),
            providesTags: ['Project']
        }),
        findOneProject: build.query({
            query: id => `project/${id}`,
            providesTags: ['Project']
        }),
        updateProject: build.mutation({
            query: body => ({
                url: 'project/',
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Project']
        }),
        deleteProject: build.mutation({
            query: id => ({
                url: `project/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Project']
        }),

        sendMessage: build.mutation({
            query: body => ({
                url: `chat`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Messages']
        }),

        findMessages: build.query({
            query: id => `chat/${id}`,
            providesTags: ['Messages']
        }),


    })
})

export const {
    useSendMessageMutation,
    useFindMessagesQuery,
    useCreateProjectMutation,
    useFindAllProjectQuery,
    useFindOneProjectQuery,
    useUpdateProjectMutation,
    useDeleteProjectMutation
} = projectApiSlice
