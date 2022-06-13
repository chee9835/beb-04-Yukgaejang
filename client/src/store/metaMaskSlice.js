import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  metaMaskAddress: "",
};

const metaMaskSlice = createSlice({
  name: "metaMask",
  initialState,
  reducers: {
    setMetaMaskAddress(state, action) {
      state.metaMaskAddress = action.payload;
    },
  },
});

export const metaMaskActions = { ...metaMaskSlice.actions };

export default metaMaskSlice;
