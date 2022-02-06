import React, { memo } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const BurgerButton = ({ toggleDriver }) => {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={toggleDriver}
    >
      <MenuIcon sx={{ display: { xs: "block", sm: "none" }, color: "#000" }} />
    </IconButton>
  );
};

export default memo(BurgerButton);