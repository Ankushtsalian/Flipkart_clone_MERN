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
      // console.log(state.mobile);
      // state.mobile = payload.value;
      state.mobile = { ...state.mobile, [payload.name]: payload.value };
    },
  },
});

export const { handleAdminMobileProductInput } = productSlice.actions;
export default productSlice.reducer;
