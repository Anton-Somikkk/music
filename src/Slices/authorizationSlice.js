/* eslint no-param-reassign: "error" */
import { createSlice } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
    name: "authorization",
    initialState: { token: "", isLogin: false },
    reducers: {
        setLogin: (state) => {
            state.isLogin = true;
        },
        setLogout: (state) => {
            state.isLogin = false;
            state.token = "";
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setLogin, setToken, setLogout } = authorizationSlice.actions;

export default authorizationSlice.reducer;
