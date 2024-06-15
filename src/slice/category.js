import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  categories: [],
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoriesStart: (state) => {
      state.isLoading = true;
    },
    getCategoriesSucces: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    getCategoriesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getCategoriesStart, getCategoriesSucces, getCategoriesFailure } =
  categorySlice.actions;
export default categorySlice.reducer;
