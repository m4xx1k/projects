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
        checkParticipation: build.query({
            query: ({userId, projectId}) => ({
                url: `projectParticipant/check/${projectId}/${userId}`,
                method: 'GET',
            }),
            invalidatesTags: ['ProjectRequest', 'ProjectParticipant']
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
            providesTags: ['ProjectParticipant', 'ProjectRequest']
        }),
        findAllProjectRequests: build.query({
            query: id => `projectParticipant/requests/${id}`,
            providesTags: ['ProjectParticipant', 'ProjectRequest']
        }),
        findAllProjectParticipants: build.query({
            query: id => `projectParticipant/participants/${id}`,
            providesTags: ['ProjectParticipant', "ProjectRequest"]
        }),
        findAvailableProjectParticipants: build.query({
            query: id => `projectParticipant/availableParticipants/${id}`,
            providesTags: ['ProjectParticipant', "ProjectRequest", 'Project']
        }),
    })
})

export const {
    useCheckParticipationQuery,
    useAllowParticipantRequestMutation,
    useForbidParticipantRequestMutation,
    useRequestParticipantRequestMutation,
    useFindAllProjectRequestsQuery,
    useFindAllProjectParticipantsQuery,
    useFindAvailableProjectParticipantsQuery,
} = projectParticipantApiSlice
