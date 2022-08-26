import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categories } from "../mock-server/categories";
import { menu } from "../mock-server/products";
import { IChangedValues } from "./types/adminTypes";
import { IMenuInitialState } from "./types/userTypes";

const initialState: IMenuInitialState = {
    menu: menu,
    categories: categories
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
      changeProductValues: (state, action: PayloadAction<IChangedValues>) => {
        const productToChange = state.menu.find(prod => prod.id === action.payload.id);
        if (productToChange) {
          productToChange.name = action.payload.name ? action.payload.name : productToChange.name;
          productToChange.price = action.payload.price ? action.payload.price : productToChange.price;
        }
      }
    }
});

export default menuSlice.reducer;
export const { changeProductValues } = menuSlice.actions;