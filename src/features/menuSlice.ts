import { createSlice } from "@reduxjs/toolkit";
import { menu } from "../data";

interface IMenu {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
}
interface IInitialState {
    menu: IMenu[];
    favorite: IMenu[];
}
const initialState: IInitialState = {
    menu: menu,
    favorite: []
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
      showFavorite: (state) => {
        state.menu.map(prod => {
          if (prod.favorite) {
            state.favorite.push(prod);
          }
          return prod;
        })
      },
      clearMenu: (state) => {
        state.favorite = [];
        state.menu = [];
      }

    }
});

export default menuSlice.reducer;
export const { showFavorite, clearMenu } = menuSlice.actions;