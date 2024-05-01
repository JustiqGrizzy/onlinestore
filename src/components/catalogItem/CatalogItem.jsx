import React from "react";
import { Link } from "react-router-dom";
import "./catalogItem.css";

const CatalogItem = ({ catalogs }) => {
  //   const catalogsMapped = {
  //     id: catalogs.map((item) => item.id),
  //     name: catalogs.map((item) => item.name),
  //   };

  return (
    <div>
      {catalogs.map((item) => (
        <Link to={`/catalogs/${item.id}`} style={{ textDecoration: "none" }}>
          <div key={item.id} className="catalogBox ">
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

export default CatalogItem;
