import React from "react";
import { CatalogCard } from "../";
import "./main.css";

const Main = ({ catalogs }) => {
  return (
    <div className="container-lg pt-3 ">
      <h3 className="text mb-3">What you can find in our store:</h3>

      <CatalogCard catalogs={catalogs} />
    </div>
  );
};

export default Main;
