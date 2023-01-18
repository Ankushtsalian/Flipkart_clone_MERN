import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  close: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    handleLoginClose: (state) => {
      state.close = !state.close;
    },
  },
});

export const { handleLoginClose } = authSlice.actions;
export default authSlice.reducer;
