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
        findFilteredTask: build.query({
            query: body => ({
                url: 'task/filter',
                method: "POST",
                body
            }),
            providesTags: ['Task']
        }),
        findDeclinedTasks: build.query({
            query: body => ({
                url: 'task/declined/filter',
                method: "POST",
                body
            }),
            providesTags: ['Task']
        }),
        findProjectTasks: build.query({
            query: body => ({
                url: 'task/all',
                method: "POST",
                body
            }),
            providesTags: ['Task']
        }),
        findOneProjectTask: build.query({
            query: body => ({
                url: 'task/one/filtered',
                method: "POST",
                body
            }),
            providesTags: ['Task']
        }),
        findFullProjectTasks: build.query({
            query: body => ({
                url: 'task/full',
                method: "POST",
                body
            }),
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
        declineTask: build.mutation({
            query: body => ({
                url: `task/decline`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Task']
        }),
        assignTask: build.mutation({
            query: body => ({
                url: `task/assign`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Task']
        }),


    })
})

export const {
    useCreateTaskMutation,
    useFindProjectTasksQuery,
    useFindFullProjectTasksQuery,
    useFindNotDeclinedTasksQuery,
    useFindOneProjectTaskQuery,
    useFindFilteredTaskQuery,
    useFindOneTaskQuery,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useDeclineTaskMutation,
    useAssignTaskMutation
} = taskApiSlice
