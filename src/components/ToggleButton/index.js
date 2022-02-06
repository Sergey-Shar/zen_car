import React, { useState, memo, useCallback } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useTranslation } from "react-i18next";

const ToggleBtn = ({ onToggle }) => {
  const { t } = useTranslation();

  const [alignment, setAlignment] = useState(t("button.services"));

  const handleChange = useCallback(
    (event, newAlignment) => {
      setAlignment(newAlignment);
    },
    [setAlignment]
  );

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      onClick={onToggle}
    >
      <ToggleButton value={t("button.services")}>
        {t("button.services")}
      </ToggleButton>
      <ToggleButton value={t("button.symptoms")}>
        {t("button.symptoms")}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default memo(ToggleBtn);