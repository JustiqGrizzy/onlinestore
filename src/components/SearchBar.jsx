import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`search/${value}`);
      setValue("");
    }
  };
  return (
    <form role="search" onSubmit={submitHandler}>
      <div className="d-flex ">
        <input
          type="text"
          id="form1"
          className="form-control me-2 "
          style={{ width: "450px" }}
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
