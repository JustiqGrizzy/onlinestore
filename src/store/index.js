import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slice/product";
import CategoryReducer from "../slice/category";
import AuthReducer from "../slice/auth";

export default configureStore({
  reducer: {
    product: ProductReducer,
    category: CategoryReducer,
    auth: AuthReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
