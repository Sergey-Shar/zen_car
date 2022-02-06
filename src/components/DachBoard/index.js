import React, { memo } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const DachBoard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Button
        sx={{ color: "#5e6674" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <LanguageIcon sx={{ color: "#5e6674", mr: "0.3rem" }} />
        <ArrowDropDownIcon sx={{ color: "#5e6674" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <span onClick={() => changeLanguage("ru")}>РУ</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span onClick={() => changeLanguage("en")}>EN</span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default memo(DachBoard);