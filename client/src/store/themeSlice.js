import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode(state) {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
    setThemeMode(state, action) {
      state.themeMode = action.payload;
    },
  },
});

export const themeActions = { ...themeSlice.actions };

export default themeSlice;
