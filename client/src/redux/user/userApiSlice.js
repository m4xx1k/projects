import {apiSlice} from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        singIn: build.mutation({
            query: body => ({
                url: 'user/login',
                method: 'POST',
                body
            })
        }),
        singUp: build.mutation({
            query: body => ({
                url: 'user/registration',
                method: 'POST',
                body
            })
        }),
        findUserById: build.query({
            query: () => `user/me`
        })

    })
})

export const {useSingInMutation, useSingUpMutation, useFindUserByIdQuery} = userApiSlice
