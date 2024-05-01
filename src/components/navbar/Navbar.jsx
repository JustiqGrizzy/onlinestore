import React from "react";
import SearchBar from "../searchBar/SearchBar";
import "./navbar.css";
import { CatalogItem } from "../";

const Navbar = ({ catalogs }) => {
  return (
    <div className="container-fluid bg-dark ">
      <nav className="container-lg navbar navbar-dark bg-dark px-2  ">
        <div className="d-flex">
          <button
            className="navbar-toggler"
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
              <CatalogItem catalogs={catalogs} />
            </div>
          </div>
          <SearchBar />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
