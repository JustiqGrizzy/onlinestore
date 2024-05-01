import React from "react";
import { CatalogCard } from "../";
import "./main.css";

const Main = ({ catalogs }) => {
  return (
    <div className="mainBack">
      <div className="container-lg pt-3 ">
        <h3 className="text">What you can find in our store:</h3>
        <br />
        <CatalogCard catalogs={catalogs} />
      </div>
    </div>
  );
};

export default Main;
