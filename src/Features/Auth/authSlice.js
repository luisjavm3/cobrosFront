import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAxios } from "../../Utils/getAxios";

const initialState = {
  isAuth: false,
  accessToken: null,
  loading: false,
};

const client = getAxios();

export const login = createAsyncThunk(
  "auth/login",
  async (loginDto, thunkAPI) => {
    try {
      const response = await client.post("auth/login", loginDto);

      return response.data;
    } catch (error) {
      // console.log(error.response.data);
      return thunkAPI.rejectWithValue("Datos incorrectos.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    foo: (state, action) => {},
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isAuth = false;
      state.accessToken = "";
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.accessToken = action.payload;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      state.isAuth = false;
      state.accessToken = "";
      state.loading = false;

      // console.log(action);
    },
  },
});

export const { foo } = authSlice.actions;

export default authSlice.reducer;
