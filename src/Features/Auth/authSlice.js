import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import useAxios from '../../Utils/useAxios';
import axios from 'axios';

const initialState = {
  isAuth: false,
  accessToken: null,
  loading: false,
};

export const login = createAsyncThunk(
  'auth/login',
  async (loginDto, thunkAPI) => {
    // const client = useAxios();

    try {
      const response = await axios.post(
        'https://localhost:5001/auth/login',
        loginDto
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue('Cannot login.');
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
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.accessToken = action.payload;
      state.loading = false;
    },
    [login.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { foo } = authSlice.actions;

export default authSlice.reducer;
