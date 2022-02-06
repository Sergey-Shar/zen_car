import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { signOut } from "firebase/auth";
import { logAut } from "../../utils/helpers/actionsCreater";
import { auth } from "../../firebase";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";

const LogAut = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const onLogAut = () => {
    signOut(auth).then(() => {
      dispatch(logAut);
      history.push("/");
    });
  };

  return (
    <div className="log-aut">
      <Link to={"/account"}>
        <IconButton aria-label="User" sx={{ background: "#dde1ec" }}>
          <AccountCircleOutlinedIcon />
        </IconButton>
        <Typography
          variant="h8"
          sx={{
            color: "#5e6674",
            p: "1rem",
            cursor: "pointer",
          }}
        >
          {`${t("auth.client")}: ${user?.email}`}
        </Typography>
      </Link>

      <IconButton
        aria-label="LogAut"
        sx={{ background: "#dde1ec", ":hover": { color: "red" } }}
        onClick={onLogAut}
      >
        <LogoutIcon />
      </IconButton>
      <Typography
        variant="h8"
        onClick={onLogAut}
        sx={{
          color: "#5e6674",
          p: "1rem",
          cursor: "pointer",
          ":hover": { color: "red" },
        }}
      >
        {t("auth.logAut")}
      </Typography>
    </div>
  );
};

export default memo(LogAut);