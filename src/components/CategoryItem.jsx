import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ categories }) => {
  return (
    <div>
      {categories.map((item) => (
        <Link
          to={`category/${item.id}`}
          style={{ textDecoration: "none" }}
          key={item.id}
        >
          <div className="catalogBox ">
            <h6
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {item.name}
            </h6>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryItem;
