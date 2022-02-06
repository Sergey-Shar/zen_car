import React, { memo, useCallback, useEffect, useState } from "react";
import Btn from "../Button";
import { useTranslation } from "react-i18next";
import { Box, TextField } from "@mui/material";

const AuthForm = ({
  text,
  handleClick,
  errorEmail,
  errorPass,
  erroeMessageEmail,
  erroeMessagePass,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disablet, setDisablet] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    email.length >= 5 ? setDisablet(false) : setDisablet(true);
  }, [email]);

  const onChancheEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const onChanchePass = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        p: "4rem 1rem",
        border: "1px solid #e4e7f0",
        borderRadius: "10px",
      }}
      noValidate
      aria-required
    >
      <TextField
        required
        error={errorEmail}
        id="outlined-email"
        label={t("auth.email")}
        value={email}
        variant="outlined"
        type={"email"}
        onChange={onChancheEmail}
        helperText={erroeMessageEmail}
        sx={{ pb: 1.5 }}
      />
      <TextField
        required
        error={errorPass}
        id="outlined-password"
        label={t("auth.pass")}
        value={password}
        variant="outlined"
        type={"password"}
        helperText={erroeMessagePass}
        onChange={onChanchePass}
      />
      <Btn
        text={text}
        variant={"contained"}
        isDisablet={disablet}
        click={() => handleClick(email, password)}
      />
    </Box>
  );
};

export default memo(AuthForm);