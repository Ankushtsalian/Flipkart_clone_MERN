import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  close: true,
  priceRange: [0, 100],
  isPriceChanged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    handleLoginClose: (state) => {
      state.close = !state.close;
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

export const { handleLoginClose, handlePriceChange, handleResetPriceRange } =
  authSlice.actions;
export default authSlice.reducer;
