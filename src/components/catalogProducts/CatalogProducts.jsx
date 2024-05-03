import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { ProductCard } from "../";
import "./catalogProducts.css";

const CatalogProducts = () => {
  const { id } = useParams();
  const [catalogProducts, setCatalogProducts] = useState([]);

  useEffect(() => {
    ApiService.fetching(`${id}`)
      .then((data) => setCatalogProducts(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container-lg pt-3">
      <h3 className="text mb-3">
        We can offer you following variaties of{" "}
        {catalogProducts[0]?.catalog?.name}
      </h3>
      <ProductCard catalogProducts={catalogProducts} />
    </div>
  );
};

export default CatalogProducts;
