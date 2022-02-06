import React, { memo } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const LinearIndeterminate = () => {
  return (
    <Box sx={{ width: "100%", pt: "4rem" }}>
      <LinearProgress />
    </Box>
  );
};

export default memo(LinearIndeterminate);