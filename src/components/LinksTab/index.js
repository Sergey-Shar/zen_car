import React, { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useHistory } from "react-router-dom";

const NavTabs = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const { t } = useTranslation();

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  },[])

  const onRouter = useCallback(
    (path) => {
      history.push(`/${path}`);
    },
    [history]
  );

  return (
    <Box
      className="tab-box"
      sx={{ width: "100%", display: { xs: "none", sm: "inline" } }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab label={t("tabs.part1")} onClick={() => onRouter("workshops")} />
        <Tab label={t("tabs.part2")} onClick={() => onRouter("fromzencar")} />
        <Tab label={t("tabs.part3")} onClick={() => onRouter("worktypes")} />
      </Tabs>
    </Box>
  );
};

export default memo(NavTabs);
