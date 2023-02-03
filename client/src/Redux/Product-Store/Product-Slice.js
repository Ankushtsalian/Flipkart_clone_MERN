import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastSuccess } from "../../Utils/toastMessage";
// import {
//   loginUserThunk,
//   logoutUserThunk,
//   registerUserThunk,
//   ResetPasswordThunk,
//   verifyEmailThunk,
//   verifyForgotPasswordThunk,
// } from "./Auth-Thunk";

const initialState = {
  isLoading: false,

  mobile: {},
};

// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   (formInput, thunkAPI) => {
//     return loginUserThunk("/login", formInput, thunkAPI);
//   }
// );

const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    handleAdminMobileProductInput: (state, { payload }) => {
      console.log(payload);
      // state.mobile = payload;
    },
  },
});

export const { handleAdminMobileProductInput } = productSlice.actions;
export default productSlice.reducer;
