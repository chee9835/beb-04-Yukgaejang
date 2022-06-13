import { configureStore } from "@reduxjs/toolkit";
import metaMaskSlice from "./metaMaskSlice";

export const store = configureStore({
  reducer: {
    metaMask: metaMaskSlice.reducer,
  },
});
