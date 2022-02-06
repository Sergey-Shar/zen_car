import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const RadioBtnGroup = () => {
  const { t } = useTranslation();
  const isWizardChildren = useSelector((state) => state.isWizardChildren);
  return (
    <>
      {isWizardChildren && (
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="g"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value={t("button.part1")}
              control={<Radio sx={{ "&.Mui-checked": { color: "red" } }} />}
              label={t("button.part1")}
            />
            <FormControlLabel
              value={t("button.part2")}
              control={<Radio sx={{ "&.Mui-checked": { color: "red" } }} />}
              label={t("button.part2")}
            />
            <FormControlLabel
              value={t("button.part3")}
              control={<Radio sx={{ "&.Mui-checked": { color: "red" } }} />}
              label={t("button.part3")}
            />
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
};

export default memo(RadioBtnGroup);