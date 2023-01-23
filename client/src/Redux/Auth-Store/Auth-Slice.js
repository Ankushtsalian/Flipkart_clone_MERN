import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  close: true,
  priceRange: [20, 37],
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
    },
  },
});

export const { handleLoginClose, handlePriceChange } = authSlice.actions;
export default authSlice.reducer;
