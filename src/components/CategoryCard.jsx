import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ categories }) => {
  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4">
      {categories.map((item) => (
        <Link
          to={`category/${item.id}`}
          style={{ textDecoration: "none" }}
          key={item.id}
        >
          <div className="col">
            <div
              className="card border border-success border-2 cursor-pointer"
              style={{
                border: "2px green solid",
                boxShadow: "5px 10px 18px grey",
              }}
            >
              <img
                height={"250px"}
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body border-top border-dark border-2">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCard;
