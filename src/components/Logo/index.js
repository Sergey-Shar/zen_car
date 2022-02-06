import React, { memo } from "react";
import "./style.css";

const Logo = () => {
  return (
    <img
      className="logo"
      src="https://zen.car/logo_orange_unfilled.svg"
      alt="logo"
    />
  );
};

export default memo(Logo);