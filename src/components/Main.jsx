import React from "react";
import { CategoryCard } from "./";
import { useSelector } from "react-redux";
import { Loader } from "../ui";

const Main = ({ categories }) => {
  const { isLoading } = useSelector((state) => state.category);

  return (
    <div className="container-lg pt-3 ">
      <h3 className="text-dark fw-bold mb-3 fs-2">
        What you can find in our store:
      </h3>
      {isLoading && <Loader />}
      <CategoryCard categories={categories} />
    </div>
  );
};

export default Main;
