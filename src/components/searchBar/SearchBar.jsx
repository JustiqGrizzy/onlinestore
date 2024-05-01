import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="input-group">
      <div className="form-outline">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Search..."
        />
      </div>
      <button type="button" className="btn btn-primary">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
