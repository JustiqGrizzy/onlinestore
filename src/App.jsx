import React, { useEffect } from "react";
import {
  StoreName,
  Second,
  Navbar,
  ProductDetails,
  Search,
  Main,
  CategoryProducts,
  Login,
  Register,
} from "./components";
import { Route, Routes } from "react-router-dom";
import CategoryService from "./service/category";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesStart, getCategoriesSucces } from "./slice/category";
import AuthService from "./service/auth";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/persistance-storage";

const App = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesStart());
    CategoryService.getCategories()
      .then((data) => dispatch(getCategoriesSucces(data)))
      .catch((err) => console.log(err));
  }, []);

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
  }, []);

  return (
    <div className="container-fluid p-0">
      <StoreName />
      <Second />
      <Navbar categories={categories} />
      <div className="background">
        <Routes>
          <Route path="/" element={<Main categories={categories} />}></Route>
          <Route path="/category/:id" element={<CategoryProducts />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/search/:id" element={<Search />}></Route>

          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
