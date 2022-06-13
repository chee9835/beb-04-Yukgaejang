import { configureStore } from "@reduxjs/toolkit";
import metaMaskSlice from "./metaMaskSlice";
import web3Slice from "./web3Slice";

export const store = configureStore({
  reducer: {
    metaMask: metaMaskSlice.reducer,
    web3: web3Slice.reducer,
  },
});
