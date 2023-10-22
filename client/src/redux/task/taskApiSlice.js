import {apiSlice} from "../apiSlice";

export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        createTask: build.mutation({
            query: body => ({
                url: 'task/',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Task']
        }),
        findAllTask: build.query({
            query: () => 'task/',
            providesTags: ['Task']
        }),
        findOneTask: build.query({
            query: id => `task/${id}`,
            providesTags: ['Task']
        }),
        updateTask: build.mutation({
            query: body => ({
                url: 'task/',
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Task']
        }),
        deleteTask: build.mutation({
            query: id => ({
                url: `task/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Task']
        }),


    })
})

export const {
    useCreateTaskMutation,
    useFindAllTaskQuery,
    useFindOneTaskQuery,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = taskApiSlice
