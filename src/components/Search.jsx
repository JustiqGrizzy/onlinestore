import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductCard } from "./";
import ProductService from "../service/product";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchProductsStart,
  getSearchProductsSucces,
} from "../slice/product";
import Loader from "../ui/Loader";

const Search = () => {
  const { id } = useParams();
  const { searchProducts, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchProductsStart());
    ProductService.getSearchProducts(id)
      .then((data) => getSearchProductsSucces(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container-lg pt-3">
      <h3 className="text mb-3">
        We can offer you following products on word "{id}"
      </h3>
      {isLoading && <Loader />}
      <ProductCard categoryProducts={searchProducts} />
    </div>
  );
};

export default Search;
