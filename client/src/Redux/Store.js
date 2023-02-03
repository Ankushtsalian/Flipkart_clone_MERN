import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth-Store/Auth-Slice";
import ProductSlice from "./Product-Store/Product-Slice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    product: ProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
