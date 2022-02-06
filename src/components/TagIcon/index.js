import React, { memo } from "react";

const Icon = ({ id, img, text }) => {
  return <img id={id} src={img} alt={text} style={{ width: "3rem" }}></img>;
};
export default memo(Icon);