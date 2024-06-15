import React from "react";

const PriceCard = ({ item }) => {
  return (
    <div className="border border-dark-subtle rounded-5 col-4 p-0">
      <div className="px-4 py-2" style={{ height: "30%" }}>
        <span
          className="text-decoration-line-through text-secondary "
          style={{ fontSize: "35px" }}
        >
          ${Math.round(item.price * 1.1)}
        </span>
        <span className="text-primary  ms-3 " style={{ fontSize: "35px" }}>
          -${item.price * 0.1}
        </span>
        <p className=" mb-0 fw-bold" style={{ fontSize: "40px" }}>
          ${item.price}
        </p>
        <button className="buyButton rounded-4 fw-bold">BUY</button>
        <hr />
      </div>
      <div className="px-4 py-2" style={{ height: "25%" }}>
        <p className="" style={{ fontSize: "25px" }}>
          from{" "}
          <span className="fw-bold" style={{ fontSize: "35px" }}>
            ${Math.round((item.price * 1.15) / 12)}
          </span>{" "}
          a month
        </p>
        <button
          className="buyButton rounded-4 fw-bold"
          style={{ fontSize: "15px" }}
        >
          BUY IN INSTALLMENTS
        </button>
      </div>
      <div className="bg-dark rounded-bottom-5 p-0" style={{ height: "45%" }}>
        <div
          className="text-white d-flex fw-bold py-3 my-0 px-4"
          style={{ height: "25%", fontSize: "23px" }}
        >
          <i className="bi bi-coin me-3"></i> Cashback
          <i className=" bi bi-info-circle-fill ms-auto"></i>
        </div>
        <div
          className="text-white d-flex fw-bold py-3 my-0 px-4"
          style={{ height: "25%", fontSize: "23px" }}
        >
          <i className="bi bi-shield-check me-3"></i> Warranty of 2 years
          <i className=" bi bi-info-circle-fill ms-auto"></i>
        </div>
        <div
          className="text-white d-flex fw-bold py-3 my-0 px-4"
          style={{ height: "25%", fontSize: "23px" }}
        >
          <i className="bi bi-truck me-3"></i> Free Shipping
          <i className=" bi bi-info-circle-fill ms-auto"></i>
        </div>
        <div
          className="text-white d-flex fw-bold py-3 my-0 px-4"
          style={{ height: "25%", fontSize: "23px" }}
        >
          <i className="bi bi-tools me-3"></i> Free Installation
          <i className=" bi bi-info-circle-fill ms-auto"></i>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
