import React, { useState, memo, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import BurgerButton from "../BurgerButton";
import SimpleDialogDemo from "../Popup";
import LogAut from "../WrapperLogAut";
import { createAction } from "../../utils/helpers/actionsCreater";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ListItemButton } from "@mui/material";

const MenuBurger = () => {
  const [state, setState] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ top: open });
  };

  useEffect(() => {
    if (state.top === true) {
      dispatch(createAction("CHANGE_CLASS_NAME", "popupBurger"));
    } else {
      dispatch(createAction("CHANGE_CLASS_NAME", "popup"));
    }
  }, [state, dispatch]);

  const list = () => (
    <Box sx={{ width: "auto" }} role="presentation">
      <List>
        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          <SimpleDialogDemo />
        </ListItem>
        {user ? (
          <ListItem onClick={toggleDrawer(false)}>
            <LogAut />
          </ListItem>
        ) : (
          <>
            <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
              <Link
                style={{
                  color: "#ffffff",
                  backgroundColor: "#3cb7b4",
                  borderRadius: "5px",
                  padding: "0.7rem 2.5rem",
                }}
                to={"/sign-up"}
                onClick={toggleDrawer(false)}
              >
                {t("auth.part1")}
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
              <Link
                style={{ color: "#2196f3", paddingBottom: "1rem" }}
                to={"/sign-in"}
                onClick={toggleDrawer(false)}
              >
                {t("auth.part2")}
              </Link>
            </ListItemButton>{" "}
          </>
        )}
        <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
          <Link
            style={{ color: "#000", paddingBottom: "1rem" }}
            to={"/"}
            onClick={toggleDrawer(false)}
          >
            {t("auth.part3")}
          </Link>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <BurgerButton toggleDriver={toggleDrawer(true)} />
      <Drawer anchor={"top"} open={state["top"]} onClose={toggleDrawer(false)}>
        {list("top")}
      </Drawer>
    </>
  );
};

export default memo(MenuBurger);