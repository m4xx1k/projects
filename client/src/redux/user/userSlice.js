import {createSlice} from '@reduxjs/toolkit';

let user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

let token = localStorage.getItem('token') || null;

const initialState = {user, token};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        auth(state, action) {
            const {user, token} = action.payload;
            console.log(user, token)
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', token)
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            // console.log(import.meta.env.DOMAIN)
            window.location.replace('/login')
        },

    },
});

export const {auth, logout, setWallet} = userSlice.actions;


export default userSlice.reducer;
