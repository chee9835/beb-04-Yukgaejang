import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuModalOpen: false,
  loginModalOpen: false,
  walletModalOpen: false,
  nftModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openMenuModal(state) {
      state.menuModalOpen = !state.menuModalOpen;
      state.loginModalOpen = false;
      state.walletModalOpen = false;
    },
    closeMenuModal(state) {
      state.menuModalOpen = false;
    },
    openLoginModal(state) {
      state.loginModalOpen = !state.loginModalOpen;
      state.menuModalOpen = false;
      state.walletModalOpen = false;
    },
    closeLoginModal(state) {
      state.loginModalOpen = false;
    },
    openWalletModal(state) {
      state.walletModalOpen = !state.walletModalOpen;
      state.menuModalOpen = false;
      state.loginModalOpen = false;
    },
    closeWalletModal(state) {
      state.walletModalOpen = false;
    },
    openNfttModal(state) {
      state.nftModalOpen = !state.nftModalOpen;
    },
    closeNftModal(state) {
      state.nftModalOpen = !state.nftModalOpen;
    },
  },
});

export const modalActions = { ...modalSlice.actions };

export default modalSlice;
