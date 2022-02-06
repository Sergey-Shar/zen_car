import React, { memo } from "react";
import "./style.css";

const AutoComplete = ({ text, onSearch }) => {
  return (
    <>
      <li className="auto-complete-item" onClick={onSearch}>
        {text}
      </li>
    </>
  );
};

export default memo(AutoComplete);