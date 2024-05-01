import React from "react";
import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div className="  container-lg d-flex align-items-center justify-content-center ">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img
          src="https://i0.wp.com/1.bp.blogspot.com/-ZMEUeb4z4rQ/YGFyIS1VAAI/AAAAAAAHvkc/ZgCMWV4XZkIWxcxJXpmukipdEOITd0AHgCLcBGAsYHQ/s1600/1.png?ssl=1"
          alt="img"
          width={"250px"}
          height={"70px"}
        />
      </Link>
    </div>
  );
};

export default Second;
