import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastSuccess } from "../../Utils/toastMessage";
import { createProductThunk } from "./Product-Thunk";
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
  productType: "Mobile",
  mobile: {},
};

export const createProduct = createAsyncThunk(
  "product/createProduct",
  ({ mobile, productType }, thunkAPI) => {
    return createProductThunk(`/product/${productType}`, mobile, thunkAPI);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    ProductType: (state, { payload }) => {
      state.productType = payload;
    },
    handleAdminMobileProductInput: (state, { payload }) => {
      state.mobile = {
        ...state.mobile,
        [payload.name]: payload.name.startsWith("is")
          ? !!payload.value
          : payload.value,
      };
    },
  },
});

export const { handleAdminMobileProductInput, ProductType } =
  productSlice.actions;
export default productSlice.reducer;
