import {apiSlice} from "../apiSlice";

export const projectApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        createProject: build.mutation({
            query: body => ({
                url: 'project/',
                method: 'POST',
                body
            }),
            invalidatesTags:['Project']
        }),
        findAllProject: build.query({
            query: () => 'project/',
            providesTags:['Project']
        }),
        findOneProject: build.query({
            query: id => `project/${id}`,
            providesTags:['Project']
        }),
        updateProject: build.mutation({
            query: body => ({
                url: 'project/',
                method: 'PUT',
                body
            }),
            invalidatesTags:['Project']
        }),
        deleteProject: build.mutation({
            query: id => ({
                url: `project/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:['Project']
        }),


    })
})

export const {
    useCreateProjectMutation,
    useFindAllProjectQuery,
    useFindOneProjectQuery,
    useUpdateProjectMutation,
    useDeleteProjectMutation
} = projectApiSlice
