import React from "react";
import { CategoryItem, SearchBar } from "./";

const Navbar = ({ categories }) => {
  return (
    <div className="container-fluid bg-dark ">
      <nav className="container-lg navbar navbar-dark bg-dark px-2 d-flex align-items-center">
        <button
          className="navbar-toggler border border-1"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              All Catalogs
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <CategoryItem categories={categories} />
          </div>
        </div>
        <SearchBar />
        <div
          className="d-flex text-white"
          style={{
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          <p className="pt-2">Login</p>
          <i
            className="bi bi-person-circle ms-2"
            style={{ fontSize: "30px" }}
          ></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
