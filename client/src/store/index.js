import {
  configureStore,
  createSerializableStateInvariantMiddleware,
} from "@reduxjs/toolkit";
import metaMaskSlice from "./metaMaskSlice";
import themeSlice from "./themeSlice";
import web3Slice from "./web3Slice";
import modalSlice from "./modalSlice";

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  getEntries: () => ["web3"],
});

export const store = configureStore({
  reducer: {
    metaMask: metaMaskSlice.reducer,
    theme: themeSlice.reducer,
    web3: web3Slice.reducer,
    modal: modalSlice.reducer,
  },
  middleware: [serializableMiddleware],
});
