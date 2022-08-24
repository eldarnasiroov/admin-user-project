import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uniqid from 'uniqid';
interface IProducts {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
  count: number;
}
interface IProductsPayload {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
  save: boolean;
}

  

interface IUsersData {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  cart: IProducts[];
  favorites: IProductsPayload[];
  permission: boolean;
}

interface IInitialState {
  usersData: IUsersData[];
}
interface ILoginPayload {
  username: string;
  password: string;
}
interface IRegistrationDataPayload {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  verificationPassword: string;
}

const initialState: IInitialState = {
  usersData: [
    {
      id: '1',
      firstName: "Eldar",
      lastName: "Nasirov",
      username: "",
      password: "",
      permission: false,
      cart: [],
      favorites: []
    }
  ],
};

const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
      }
      state.usersData.push(userData);      
    },
    userLogin: (state, action: PayloadAction<ILoginPayload>) => {
      state.usersData.map(user => {
       return user.permission = user.username.toUpperCase() === action.payload.username.toUpperCase() && user.password === action.payload.password ? true : false;
      });
    },
    userLogOut: (state) => {
      state.usersData.map(user => user.permission = false);
    },
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
        }
        return state;
      });
    },
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
