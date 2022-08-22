import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../features/menuSlice";
import userDataSlice from "../features/userDataSlice";

const store = configureStore({
    reducer: {
        user: userDataSlice,
        menu: menuSlice
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;