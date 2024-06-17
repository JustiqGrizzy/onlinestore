import React from "react";
import { CategoryItem, Login, SearchBar } from "./";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../slice/auth";
import { removeItem } from "../helpers/persistance-storage";

const Navbar = ({ categories }) => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    dispatch(logoutUser());
    removeItem("token");
    navigate("/");
  };

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
        {loggedIn ? (
          <div className="d-flex text-white">
            <p className="pt-2 me-2 text-capitalize fw-bold">{user.username}</p>
            <button className="btn btn-outline-danger" onClick={logoutHandler}>
              {" "}
              Logout
            </button>
          </div>
        ) : (
          <div
            className="d-flex text-white"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
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
        )}

        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <Login />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
