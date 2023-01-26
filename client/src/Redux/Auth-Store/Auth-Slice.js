import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  close: true,
  priceRange: [0, 100],
  isPriceChanged: false,
  isLoginPage: true,
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
    },
    handlePriceChange: (state, { payload }) => {
      state.priceRange = payload;
      state.isPriceChanged = true;
    },
    handleResetPriceRange: (state) => {
      state.priceRange = [0, 100];
    },
  },
});

export const {
  handleLoginClose,
  handlePriceChange,
  handleResetPriceRange,
  handleLoginSignupToggle,
} = authSlice.actions;
export default authSlice.reducer;
