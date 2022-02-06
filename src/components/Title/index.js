import React, { memo } from "react";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  return <h3 style={{ fontSize: "1.5rem" }}>{t("title.title")}</h3>;
};

export default memo(Title);