import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ catalogProducts }) => {
  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4">
      {catalogProducts.map((item) => (
        <Link
          to={`/${item.catalog.name}/${item.id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="col">
            <div
              className="card   border rounded-5 border-secondary border-1"
              key={item.id}
            >
              <img
                width={"250px"}
                height={"250px"}
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body ">
                <h5 className="card-title">
                  {item?.name} {item?.brand} {item?.model} {item?.year}
                </h5>
                <p className="card-text opacity-50 mt-3">
                  {item?.cpu} {item.cpu && " / "}
                  {item?.memory} {item.memory && " / "}
                  {item?.storage} {item?.storage && " / "}
                  {item?.connection} {item.connection && " / "}
                  {item?.type} {item.type && " / "}
                  {item.color}
                </p>
                <div className="card-footer d-flex">
                  <h4 className="text-primary me-auto">
                    {"$"}
                    {item.price}
                  </h4>
                  <div className="cartIcon">
                    <i class="bi bi-cart-plus-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
