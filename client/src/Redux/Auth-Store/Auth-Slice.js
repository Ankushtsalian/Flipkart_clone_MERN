import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { verifyForgotPasswordThunk } from "./Auth-Thunk";

const initialState = {
  close: true,
  priceRange: [0, 100],
  isPriceChanged: false,
  isLoginPage: true,
  isForgotPassword: false,
  email: "",
};

export const verifyForgotPassword = createAsyncThunk(
  "auth/verifyForgotPassword",
  (formInput, thunkAPI) => {
    return verifyForgotPasswordThunk("forgot-password", formInput, thunkAPI);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    handleLoginClose: (state) => {
      state.close = !state.close;
    },
    handleLoginSignupToggle: (state) => {
      state.isLoginPage = !state.isLoginPage;
      state.isForgotPassword = false;
    },
    handlePriceChange: (state, { payload }) => {
      state.priceRange = payload;
      state.isPriceChanged = true;
    },
    handleResetPriceRange: (state) => {
      state.priceRange = [0, 100];
    },
    handleForgotPassword: (state) => {
      state.isForgotPassword = !state.isForgotPassword;
    },
    handleVerifyForgotPassword: (state) => {
      state.isForgotPassword = !state.isForgotPassword;
    },
    handleEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verifyForgotPassword.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(verifyForgotPassword.fulfilled, (state, { payload }) => {
      // state.errorMessage = "";
      // state.errorStatusCode = 0;
      // state.isLoading = false;
      // state.tokenLog = payload;
      // addTokenToLocalStorage(state.tokenLog);
    });

    builder.addCase(
      verifyForgotPassword.rejected,
      (state, { payload: { errorStatusCode, message } }) => {
        // removeTokenFromLocalStorage();
        // state.isLoading = false;
        // state.tokenLog = "";
        // state.errorMessage = message;
        // state.errorStatusCode = errorStatusCode;
      }
    );
  },
});

export const {
  handleLoginClose,
  handlePriceChange,
  handleResetPriceRange,
  handleLoginSignupToggle,
  handleForgotPassword,
  handleVerifyForgotPassword,
  handleEmail,
} = authSlice.actions;
export default authSlice.reducer;
