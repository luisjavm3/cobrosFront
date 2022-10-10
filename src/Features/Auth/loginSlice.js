import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    foo: (state, action) => {},
  },
});

export const { foo } = authSlice.actions;

export default authSlice.reducer;
