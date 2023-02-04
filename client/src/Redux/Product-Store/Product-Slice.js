import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastSuccess } from "../../Utils/toastMessage";
import { createProductThunk, productFileThunk } from "./Product-Thunk";

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

export const productFile = createAsyncThunk(
  "product/productFile",
  (formData, thunkAPI) => {
    return productFileThunk("/product/upload", formData, thunkAPI);
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
  extraReducers: (builder) => {
    builder.addCase(productFile.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(productFile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.mobile = {
        ...state.mobile,
        ["productImage"]: payload.src,
        ["public_id"]: payload.public_id,
      };
    });

    builder.addCase(
      productFile.rejected,
      (state, { payload: { errorStatusCode, message } }) => {
        state.isLoading = false;
        // state.productList = [];

        state.errorMessage = message;
        state.errorStatusCode = errorStatusCode;
      }
    );
  },
});

export const { handleAdminMobileProductInput, ProductType } =
  productSlice.actions;
export default productSlice.reducer;
