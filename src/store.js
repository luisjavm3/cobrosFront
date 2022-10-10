import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Features/Auth/loginSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
