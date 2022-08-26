import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uniqid from 'uniqid';
import { ILoginPayload, IProducts, IProductsPayload, IRegistrationDataPayload, IUserInitialState } from "./types/userTypes";

const initialState: IUserInitialState = {
  usersData: [
    {
      id: '1',
      firstName: "Eldar",
      lastName: "Nasirov",
      username: "",
      password: "",
      permission: false,
      cart: [],
      favorites: [],
      totalPrice: 0
    }
  ],
};

const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // REGISTRATION
    userRegistration: (state, action: PayloadAction<IRegistrationDataPayload>) => {
      const userData = {
        id: uniqid(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        username: action.payload.username,
        password: action.payload.password,
        permission: false,
        cart: [],
        favorites: [],
        totalPrice: 0
      }
      state.usersData.push(userData);      
    },
    // LOG IN
    userLogin: (state, action: PayloadAction<ILoginPayload>) => {
      state.usersData.map(user => {
       return user.permission = user.username.toUpperCase() === action.payload.username.toUpperCase() && user.password === action.payload.password ? true : false;
      });
    },
    // LOG OUT
    userLogOut: (state) => {
      state.usersData.map(user => user.permission = false);
    },
    // ADD TO CART
    userAddToCart: (state, action: PayloadAction<IProducts>) => {
      state.usersData.map(user => {
        if (user.permission) {
          while(action.payload.count) {
            user.cart.push({...action.payload, count: 1});
            action.payload.count--;
          }
          const cartCopy: IProducts[] = [...user.cart];
          for (let i = 0; i < user.cart.length; i++) {
            for (let j = 0; j < user.cart.length; j++) {
              if (j === i) {
                break;
              }
              if (cartCopy[i].id === user.cart[j]?.id) {
                user.cart[j].count++;
                cartCopy[i].id = 0;
              }
            }
          }
          user.cart = cartCopy.filter(elem => elem.id !== 0)
          user.cart.map(prod => {
            prod.totalPrice = prod.price * prod.count;
            return prod;
          });
          user.totalPrice = user.cart.reduce((acc, currValue) =>  acc + Number(currValue.totalPrice), 0);
        }
        return state;
      });
    },
    // ADD TO FAVORITES
    userAddToFavorites: (state, action: PayloadAction<IProductsPayload>) => {
      state.usersData.map(user => {
        if (user.permission) {
          user.favorites.map(elem => {
            if (action.payload.id === elem.id) {
              action.payload.save = false;
            }
            return elem;
          })
          if (action.payload.save) {
            user.favorites.push(action.payload)
          } else {
            user.favorites = user.favorites.filter(prod => prod.id !== action.payload.id);
          }
        }
        return state;
      });
      
    }
    
  },
});

export default userDataSlice.reducer;
export const { userRegistration, userLogin, userLogOut, userAddToCart, userAddToFavorites } = userDataSlice.actions;
