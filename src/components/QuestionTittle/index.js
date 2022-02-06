import React, { memo } from "react";

const QuestionTittle = ({ text }) => {
  return (
    <h4 style={{ paddingBottom: "1rem", paddingTop: "0.5rem" }}>{text}</h4>
  );
};

export default memo(QuestionTittle);