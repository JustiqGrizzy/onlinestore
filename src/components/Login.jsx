import React, { useEffect, useState, useRef } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserStart,
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "../slice/auth";
import AuthService from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, loggedIn, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(signUserSuccess(response.user));
      modalRef.current && modalRef.current.click();
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
      setEmail("");
      setPassword("");
    }
  }, [loggedIn]);

  const registerNavigate = () => {
    navigate("/register");
    dispatch(registerUserStart());
  };

  return (
    <>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
              Please Login
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={modalRef}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row g-3">
                <ValidationError width={"60%"} />
                <div className="col-12">
                  <Input
                    label={"Email"}
                    state={email}
                    setState={setEmail}
                    type="email"
                    placeholder="YourEmail@example.com"
                  />
                </div>
                <div className="col-12">
                  <Input
                    label={"Password"}
                    type="password"
                    state={password}
                    setState={setPassword}
                  />
                </div>
              </div>
              <button
                className="w-100 btn btn-primary btn-lg mt-3"
                type="submit"
                onClick={loginHandler}
                disabled={isLoading}
                id="id01"
              >
                {isLoading ? "loading..." : "Login"}
              </button>
            </form>
          </div>
          <div className="modal-footer">
            If you do not have account{" "}
            <a
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "blue",
              }}
              data-bs-dismiss="modal"
              onClick={registerNavigate}
            >
              Click to Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
