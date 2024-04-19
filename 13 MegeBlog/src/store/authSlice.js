import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status1: false,
    userData: null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status1 = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status1 = false;
            state.userData = null;
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
