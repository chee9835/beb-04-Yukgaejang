import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode(state) {
      console.log(state.themeMode);
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
  },
});

export const themeActions = { ...themeSlice.actions };

export default themeSlice;
