import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../mock-server/categories";
import { menu } from "../mock-server/products";
import { IMenuInitialState } from "./types";

const initialState: IMenuInitialState = {
    menu: menu,
    categories: categories
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
      downloadData: (state) => {
        menu.map(prod => {
          state.menu.push(prod);
          return state;
        });
      },
    }
});

export default menuSlice.reducer;
export const { } = menuSlice.actions;