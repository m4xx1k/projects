import {apiSlice} from "../apiSlice";

export const projectParticipantApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        allowParticipantRequest: build.mutation({
            query: id => ({
                url: `projectParticipant/allow/${id}`,
                method: 'POST',
            })
        }),
        forbidParticipantRequest: build.mutation({
            query: id => ({
                url: `projectParticipant/forbid/${id}`,
                method: 'POST',
            })
        }),
        requestParticipantRequest: build.mutation({
            query: body => ({
                url: 'projectParticipant/request',
                method: 'POST',
                body
            })
        }),

        findAllNewProjectRequests: build.query({
            query: id => `projectParticipant/requests/${id}?status=new}`
        }),
        findAllProjectRequests: build.query({
            query: id => `projectParticipant/requests/${id}`
        }),
        findAllProjectParticipants: build.query({
            query: id => `projectParticipant/participants/${id}`
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
