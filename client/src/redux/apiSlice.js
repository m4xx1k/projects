import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {logout} from "./user/userSlice";

const baseQuery = fetchBaseQuery({
    baseUrl:"http://localhost:5000",
    // baseUrl:"https://project-api-jtft.onrender.com",
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token')
        if (!!token) headers.set('authorization', `Bearer ${token}`)
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOption) => {
    let result = await baseQuery(args, api, extraOption)
    if (result?.error?.status === 401) {
        api.dispatch(logout())
        return
    }

    return result
}
export const apiSlice = createApi({
    reducerPath: "mainApi",
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User', 'Project', 'Task', 'ProjectRequest', "ProjectParticipant"],
    endpoints: build => ({})
})
