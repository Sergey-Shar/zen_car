import React, { memo } from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const Search = ({ type, value, onChengeValue }) => {
  const { t } = useTranslation();
  return (
    <>
      <TextField
        label={t("title.label")}
        variant="outlined"
        fullWidth
        sx={{ mb: "1rem", boxShadow: "1px 1px 5px rgba(0,0,0,0.15)" }}
        type={type}
        value={value}
        onChange={onChengeValue}
      />
    </>
  );
};

export default memo(Search);