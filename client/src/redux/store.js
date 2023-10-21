import {configureStore} from "@reduxjs/toolkit";
import {userApiSlice} from "./user/userApiSlice";
import userReducer from './user/userSlice'
export const store = configureStore({
    reducer: {
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        user:userReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApiSlice.middleware),
})
