import React, { memo } from "react";
import Button from "@mui/material/Button";

const Btn = ({ click, text, icon, variant, isDisablet }) => {
  return (
    <Button
      disabled={isDisablet}
      variant={variant}
      startIcon={icon}
      onClick={click}
      sx={{ margin: "2.5rem 0 2.5rem 0" }}
    >
      {text}
    </Button>
  );
};

export default memo(Btn);