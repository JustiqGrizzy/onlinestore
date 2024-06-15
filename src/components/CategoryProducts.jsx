import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from ".";
import ProductService from "../service/product";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryProductsStart,
  getCategoryProductsSucces,
} from "../slice/product";
import Loader from "../ui/Loader";

const CategoryProducts = () => {
  const { id } = useParams();
  const { categoryProducts, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryProductsStart());
    ProductService.getCategoryProducts(`${id}`)
      .then((data) => dispatch(getCategoryProductsSucces(data)))
      .catch((err) => console.log(err));
  });

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container-lg pt-3">
      <h3 className="text mb-3">
        We can offer you following variaties of{" "}
        {categoryProducts[0]?.category?.name}
      </h3>
      <ProductCard categoryProducts={categoryProducts} />
    </div>
  );
};

export default CategoryProducts;
