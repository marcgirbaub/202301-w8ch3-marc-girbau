import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../types";

const initialUserState: UserState = {
  email: "",
  isLogged: false,
  shoppingCard: [],
  username: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentUserState,
      { payload: { email, shoppingCard, token, username } }: PayloadAction<User>
    ) => ({
      ...currentUserState,
      token: token,
      username: username,
      isLogged: true,
      email: email,
      shoppingCard: shoppingCard,
    }),

    logoutUser: () => ({
      ...initialUserState,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
