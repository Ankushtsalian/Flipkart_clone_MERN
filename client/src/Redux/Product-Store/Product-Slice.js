import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastSuccess } from "../../Utils/toastMessage";
import {
  createProductThunk,
  getProductThunk,
  productFileThunk,
} from "./Product-Thunk";

const initialState = {
  isLoading: false,
  productType: "Mobile",
  mobile: {},
  product: [],
  filterMenuValue: [],
};

export const createProduct = createAsyncThunk(
  "product/createProduct",
  ({ mobile, productType }, thunkAPI) => {
    return createProductThunk(
      `/product/${productType}`,
      { ...mobile, productType },
      thunkAPI
    );
  }
);

export const productFile = createAsyncThunk(
  "product/productFile",
  (formData, thunkAPI) => {
    return productFileThunk("/product/upload", formData, thunkAPI);
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  (productType, thunkAPI) => {
    return getProductThunk(`/product/${productType}`, productType, thunkAPI);
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
    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });

    builder.addCase(
      createProduct.rejected,
      (state, { payload: { errorStatusCode, message } }) => {
        state.isLoading = false;
        state.errorMessage = message;
        state.errorStatusCode = errorStatusCode;
      }
    );

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

        state.errorMessage = message;
        state.errorStatusCode = errorStatusCode;
      }
    );

    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      getProduct.fulfilled,
      (state, { payload: { product, distinctSchemaObjects } }) => {
        state.isLoading = false;
        state.product = product;
        state.filterMenuValue = distinctSchemaObjects;
      }
    );

    builder.addCase(
      getProduct.rejected,
      (state, { payload: { errorStatusCode, message } }) => {
        state.isLoading = false;

        state.errorMessage = message;
        state.errorStatusCode = errorStatusCode;
      }
    );
  },
});

export const { handleAdminMobileProductInput, ProductType } =
  productSlice.actions;
export default productSlice.reducer;
