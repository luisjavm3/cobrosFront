import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/Auth/authSlice";

const initialState = JSON.parse(localStorage.getItem("cobroStore")) || {};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: initialState,
});
