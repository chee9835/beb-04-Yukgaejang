import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  metaMaskAddress: "",
  balance: "",
};

const metaMaskSlice = createSlice({
  name: "metaMask",
  initialState,
  reducers: {
    setMetaMaskAddress(state, action) {
      state.metaMaskAddress = action.payload;
    },

    setBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const metaMaskActions = { ...metaMaskSlice.actions };

export default metaMaskSlice;
