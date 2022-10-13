import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { getAxios } from "../../Utils/getAxios";

const MySwal = withReactContent(Swal);

const initialState = {
  isAuth: false,
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
      return thunkAPI.rejectWithValue("Datos incorrectos.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    closeSession: (state, action) => {
      localStorage.removeItem("cobroStore");
      localStorage.removeItem("cobroAccessToken");

      state.isAuth = false;
      state.loading = false;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isAuth = false;
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.loading = false;

      let store = localStorage.getItem("cobroStore");
      localStorage.setItem(
        "cobroStore",
        JSON.stringify({ ...store, auth: state })
      );

      localStorage.setItem("cobroAccessToken", action.payload);
    },
    [login.rejected]: (state, action) => {
      state.isAuth = false;
      state.loading = false;

      MySwal.fire({
        icon: "error",
        title: <p>{action.payload}</p>,
        timer: 1200,
      });
    },
  },
});

export const { closeSession } = authSlice.actions;

export default authSlice.reducer;
