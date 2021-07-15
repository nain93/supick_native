import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    nickName: "guest",
    isLoggedIn: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.nickName = action.payload;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.nickName = "guest";
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
