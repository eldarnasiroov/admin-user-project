import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdminData, IAdminLoginPayload } from "./types/adminTypes";

const initialState: IAdminData = {
    username: 'admin',
    password: 'admin',
    permission: false
}

const adminDataSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        adminLogin: (state, action: PayloadAction<IAdminLoginPayload>) => {
            state.permission = action.payload.username === state.username && action.payload.password === state.password ? true : false;
        },
        adminLogout: (state) => {
            state.permission = false;
        }
    }

});

export default adminDataSlice.reducer;
export const { adminLogin, adminLogout } = adminDataSlice.actions;