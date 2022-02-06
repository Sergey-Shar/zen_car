import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Typography } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import "./style.css";

const Auth = () => {
  const { t } = useTranslation();

  return (
    <div className="auth">
      <Link to={"/sign-in"}>
        <IconButton
          aria-label="signIn"
          sx={{ background: "#dde1ec", ":hover": { color: "red" } }}
        >
          <LoginIcon />
        </IconButton>
        <Typography
          variant="h8"
          sx={{
            color: "#5e6674",
            p: " 0 2rem 0 1rem",
            cursor: "pointer",
            ":hover": { color: "red" },
          }}
        >
          {t("auth.part1")}
        </Typography>
      </Link>
      <Link to={"/sign-up"}>
        <IconButton
          aria-label="signUp"
          sx={{ background: "#dde1ec", ":hover": { color: "red" } }}
        >
          <LockOpenIcon />
        </IconButton>
        <Typography
          variant="h8"
          sx={{
            color: "#5e6674",
            p: "1rem",
            cursor: "pointer",
            ":hover": { color: "red" },
          }}
        >
          {t("auth.part2")}
        </Typography>
      </Link>
    </div>
  );
};

export default memo(Auth);