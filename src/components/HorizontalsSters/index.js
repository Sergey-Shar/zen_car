import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const HorizontalsSteps = () => {
  const { t } = useTranslation();

  const steps = [t("steps.part1"), t("steps.part2"), t("steps.part3")];

  return (
    <Box sx={{ width: "100%", pt: "3rem", pb: "0.5rem" }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{`${label}`}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default memo(HorizontalsSteps);