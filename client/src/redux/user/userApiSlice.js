import {apiSlice} from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        singIn: build.mutation({
            query: body => ({
                url: 'user/login',
                method: 'POST',
                body
            }),
            invalidatesTags:['User']
        }),
        singUp: build.mutation({
            query: body => ({
                url: 'user/registration',
                method: 'POST',
                body
            }),
            invalidatesTags:['User']
        }),
        findUserById: build.query({
            query: () => `user/me`,
            providesTags:['User']
        })

    })
})

export const {useSingInMutation, useSingUpMutation, useFindUserByIdQuery} = userApiSlice
