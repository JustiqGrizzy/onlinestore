import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = action.payload;
      setItem("token", action.payload.token);
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    registerUserStart: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const {
  signUserStart,
  signUserSuccess,
  signUserFailure,
  logoutUser,
  registerUserStart,
} = authSlice.actions;

export default authSlice.reducer;
