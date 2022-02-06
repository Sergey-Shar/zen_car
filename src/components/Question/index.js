import React, { memo } from "react";

const Question = ({ text }) => {
  return (
    <h2 style={{ paddingTop: "1rem", marginBottom: "1rem" }}>{`${text}`}</h2>
  );
};

export default memo(Question);