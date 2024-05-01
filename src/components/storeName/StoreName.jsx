import React from "react";
import { Link } from "react-router-dom";

const StoreName = () => {
  return (
    <div
      className="bg-primary d-flex align-items-center justify-content-center"
      style={{ height: "5vh" }}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h4 className=" text-white fw-bold ">
          <i className="bi bi-display"></i> IQ-store online market
        </h4>
      </Link>
    </div>
  );
};

export default StoreName;
