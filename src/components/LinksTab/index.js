import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
};

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="tab-box"
      sx={{ width: "100%", display: { xs: "none", sm: "inline" } }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label={t("tabs.part1")} href="/drafts" />
        <LinkTab label={t("tabs.part2")} href="/trash" />
        <LinkTab label={t("tabs.part3")} href="/spam" />
      </Tabs>
    </Box>
  );
};

export default memo(NavTabs);