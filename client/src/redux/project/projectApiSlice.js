import {apiSlice} from "../apiSlice";

export const projectApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        createProject: build.mutation({
            query: body => ({
                url: 'project/',
                method: 'POST',
                body
            })
        }),
        findAllProject: build.query({
            query: () => 'project/'
        }),
        findOneProject: build.query({
            query: id => `project/${id}`
        }),
        updateProject: build.mutation({
            query: body => ({
                url: 'project/',
                method: 'PUT',
                body
            })
        }),
        deleteProject: build.mutation({
            query: id => ({
                url: `project/${id}`,
                method: 'DELETE',
            })
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
