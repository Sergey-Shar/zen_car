import React, { memo } from "react";
import { useTranslation } from "react-i18next";

const AccountProfile = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        background: "#ffffff",
        paddingTop: "100px",
        textAlign: "center",
      }}
    >
      <h1>{t("profile.title")}</h1>
    </div>
  );
};
export default memo(AccountProfile);