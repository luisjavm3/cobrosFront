import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuth: false,
  accessToken: null,
  loading: false,
};

export const login = createAsyncThunk(
  'auth/login',
  async (loginDto, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://localhost:5001/auth/login',
        loginDto
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Cannot login.');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    foo: (state, action) => {},
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isAuth = false;
      state.accessToken = '';
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.accessToken = action.payload;
      state.loading = false;
    },
    [login.rejected]: (state) => {
      state.isAuth = false;
      state.accessToken = '';
      state.loading = false;
    },
  },
});

export const { foo } = authSlice.actions;

export default authSlice.reducer;
