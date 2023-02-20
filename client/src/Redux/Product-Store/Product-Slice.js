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
  filterQueryValue: "",
  subFilterStates: {},
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
    let filterQuery = "";
    if (Object.keys(thunkAPI.getState().product.subFilterStates).length != 0) {
      // console.log(
      //   Object.keys(thunkAPI.getState().product.subFilterStates).length
      // );
      let filter = "";
      // let subFilter = "";
      let query = [];

      const filterKeys1 = Object.entries(
        thunkAPI.getState().product.subFilterStates
      );
      filterKeys1.forEach((arr) => {
        filter = arr[0];

        //arr[1]= {Infinix: false, realme: true}
        //just send or push query if value is true

        Object.entries(arr[1]).forEach(([subFilterKey, subFilterValue]) => {
          if (subFilterValue === true) {
            // console.log({ subFilterKey, subFilterValue });
            query.push(`filterQueryValue[]=${filter}=${subFilterKey}`);
          }
        });
        filterQuery = query.join("&");
        console.log(filterQuery);
        thunkAPI.dispatch(setFilterQueryParam(filterQuery));
      });
    }
    return getProductThunk(
      `/product/${productType}${filterQuery && "?"}${filterQuery}`,
      productType,
      thunkAPI
    );
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    ProductType: (state, { payload }) => {
      state.productType = payload;
    },
    setFilterQueryParam: (state, { payload }) => {
      state.filterQueryValue = payload;
    },
    handleSubfilterChange: (state, { payload: { name, value, filter } }) => {
      // const { name, value, filter } = payload;
      const subFilterState = state.subFilterStates[filter] || {};
      const currentfilterState = subFilterState[name] || false;

      return {
        ...state,
        subFilterStates: {
          ...state.subFilterStates,
          [filter]: {
            ...subFilterState,
            [name]: !currentfilterState,
          },
        },
      };
    },
    handleClearFilters: (state, { payload }) => {
      state.subFilterStates = {};
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
      (state, { payload: { products, distinctSchemaObjects } }) => {
        state.isLoading = false;
        state.product = products;
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

export const {
  handleAdminMobileProductInput,
  ProductType,
  setFilterQueryParam,
  handleSubfilterChange,
  handleClearFilters,
} = productSlice.actions;
export default productSlice.reducer;
