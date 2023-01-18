import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth-Store/Auth-Slice";

export const store = configureStore({
  reducer: {
    user: authSlice,
  },
});
