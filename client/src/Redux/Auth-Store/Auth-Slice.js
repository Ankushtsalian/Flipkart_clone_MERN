import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  close: true,
  priceRange: [0, 100],
  isPriceChanged: false,
  isLoginPage: true,
  isForgotPassword: false,
  email: "",
};

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
