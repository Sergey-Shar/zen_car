import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SimpleDialogDemo from "../Popup";
import Logo from "../Logo";
import DachBoard from "../DachBoard";
import LinksTab from "../LinksTab";
import Auth from "../WrapperAuth";
import MenuBurger from "../MenuBurger";
import LogAut from "../WrapperLogAut";
import { useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user);
  const mediaQuery = useMediaQuery("(max-width: 760px)");

  return (
    <AppBar position="fixed" sx={{ background: "#f8f8fb", boxShadow: "none" }}>
      <Toolbar>
        <Link to={"/"}>
          <Logo />
        </Link>
        <MenuBurger />
        <SimpleDialogDemo />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "block", sm: "none" },
            color: "#202020",
            width: "30%",
          }}
        >
          {!user ? t("tabs.part4") : t("tabs.part5")}
        </Typography>
        <DachBoard />
        <LinksTab />
        {!mediaQuery ? !user ? <Auth /> : <LogAut /> : ""}
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);