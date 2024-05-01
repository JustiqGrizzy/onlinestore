import React from "react";
import "./catalogCard.css";
import { Link } from "react-router-dom";

const CatalogCard = ({ catalogs }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {catalogs.map((item) => (
        <Link to={`catalogs/${item.id}`} style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="card border border-success border-2" key={item.id}>
              <img
                width={"250px"}
                height={"250px"}
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body border border-success border-1">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CatalogCard;
