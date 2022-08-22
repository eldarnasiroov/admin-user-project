import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUsersData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  verificationPassword: string;
}
interface IInitialState {
  usersData: IUsersData[];
  permission: boolean;
}
interface ILoginPayload {
  username: string;
  password: string;
}

const initialState: IInitialState = {
  usersData: [
    {
      firstName: "",
      lastName: "",
      username: "eldar",
      password: "123",
      verificationPassword: "",
    }
  ],
  permission: false
};

const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRegistration: (state, action: PayloadAction<IUsersData>) => {
      state.usersData.push(action.payload);
    },
    userLogin: (state, action: PayloadAction<ILoginPayload>) => {
      state.usersData.map(user => {
       return state.permission = user.username.toUpperCase() === action.payload.username.toUpperCase() && user.password === action.payload.password ? true : false;
      });
    }

  },
});

export default userDataSlice.reducer;
export const { userRegistration, userLogin } = userDataSlice.actions;
