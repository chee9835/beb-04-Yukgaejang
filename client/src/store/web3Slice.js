import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  web3: null,
};

const web3Slice = createSlice({
  name: "web3",
  initialState,
  reducers: {
    setWeb3(state, action) {
      state.web3 = action.payload;
    },
  },
});

export const web3Actions = { ...web3Slice.actions };

export default web3Slice;
