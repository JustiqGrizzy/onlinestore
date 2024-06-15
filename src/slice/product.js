import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  categoryProducts: [],
  allProducts: [],
  searchProducts: [],
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getCategoryProductsStart: (state) => {
      state.isLoading = true;
    },
    getCategoryProductsSucces: (state, action) => {
      state.isLoading = false;
      state.categoryProducts = action.payload;
    },
    getCategoryProductsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getAllProductsStart: (state) => {
      state.isLoading = true;
    },
    getAllProductsSucces: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    },
    getAllProductsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getSearchProductsStart: (state) => {
      state.isLoading = true;
    },
    getSearchProductsSucces: (state, action) => {
      state.isLoading = false;
      state.searchProducts = action.payload;
    },
    getSearchFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getCategoryProductsStart,
  getCategoryProductsSucces,
  getCategoryProductsFailure,
  getAllProductsStart,
  getAllProductsSucces,
  getAllProductsFailure,
  getSearchProductsStart,
  getSearchProductsSucces,
  getSearchFailure,
} = productSlice.actions;
export default productSlice.reducer;
