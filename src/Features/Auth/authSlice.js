import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { getAxios } from "../../Utils/getAxios";

const MySwal = withReactContent(Swal);
const client = getAxios();

const initialState = {
  isAuth: false,
  accessToken: null,
  loading: false,
};

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

      let store = localStorage.getItem("cobroStore");
      localStorage.setItem(
        "cobroStore",
        JSON.stringify({ ...store, auth: state })
      );
    },
    [login.rejected]: (state, action) => {
      state.isAuth = false;
      state.accessToken = "";
      state.loading = false;

      MySwal.fire({
        icon: "error",
        title: <p>{action.payload}</p>,
        timer: 1200,
      });
    },
  },
});

export const { foo } = authSlice.actions;

export default authSlice.reducer;
