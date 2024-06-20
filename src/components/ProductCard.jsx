import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ categoryProducts }) => {
  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4">
      {categoryProducts.map((item) => (
        <Link
          to={`/product/${item?.id}`}
          style={{ textDecoration: "none" }}
          key={item.id}
        >
          <div
            className="card border rounded-5 border-secondary border-1 "
            style={{ height: "100%" }}
          >
            <img
              width={"100%"}
              height={"55%"}
              src="https://www.shutterstock.com/image-vector/img-vector-icon-design-on-260nw-2164648583.jpg"
              className="card-img-top"
              alt={item.name}
            />
            <div className="card-body" style={{ width: "100%", height: "45%" }}>
              <div style={{ width: "100%", height: "70%" }}>
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
              </div>
              <div className="card-footer d-flex">
                <h4 className="text-primary me-auto">
                  {"$"}
                  {item.price}
                </h4>
                <div
                  className="cartIcon"
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "blue",
                    borderRadius: "50%",
                    display: "flex",
                    textAlign: "center",
                    color: "white",
                    cursor: "pointer",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  <i className="bi bi-cart-plus-fill"></i>
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
