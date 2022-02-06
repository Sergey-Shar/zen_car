import React, { memo } from "react";

const TagName = ({ id, name }) => {
  return <p id={id}>{name}</p>;
};

export default memo(TagName);