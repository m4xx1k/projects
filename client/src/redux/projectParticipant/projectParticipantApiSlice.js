import {apiSlice} from "../apiSlice";

export const projectParticipantApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        allowParticipantRequest: build.mutation({
            query: id => ({
                url: `projectParticipant/allow/${id}`,
                method: 'POST',
            }),
            invalidatesTags: ['ProjectRequest', 'ProjectParticipant']
        }),
        forbidParticipantRequest: build.mutation({
            query: id => ({
                url: `projectParticipant/forbid/${id}`,
                method: 'POST',
            }),
            invalidatesTags: ['ProjectRequest']
        }),
        requestParticipantRequest: build.mutation({
            query: body => ({
                url: 'projectParticipant/request',
                method: 'POST',
                body
            }),
            invalidatesTags: ['ProjectRequest']
        }),
        findAllNewProjectRequests: build.query({
            query: id => `projectParticipant/requests/${id}?status=new}`,
            providesTags: ['ProjectParticipant','ProjectRequest']
        }),
        findAllProjectRequests: build.query({
            query: id => `projectParticipant/requests/${id}`,
            providesTags: ['ProjectParticipant','ProjectRequest']
        }),
        findAllProjectParticipants: build.query({
            query: id => `projectParticipant/participants/${id}`,
            providesTags: ['ProjectParticipant', "ProjectRequest"]
        }),
    })
})

export const {
    useAllowParticipantRequestMutation,
    useForbidParticipantRequestMutation,
    useRequestParticipantRequestMutation,
    useFindAllProjectRequestsQuery,
    useFindAllProjectParticipantsQuery
} = projectParticipantApiSlice
