import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
    rememberMe: false,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setRememberMe: (state, action) => {
            state.rememberMe = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        resetAuth: (state) => {
            state.email = '';
            state.password = '';
            state.rememberMe = false;
            state.token = null;
        },
    },
});

export const { setEmail, setPassword, setRememberMe, setToken, resetAuth } = authSlice.actions;
export default authSlice.reducer;