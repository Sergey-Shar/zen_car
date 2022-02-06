import React, { memo } from "react";
import { useSelector } from "react-redux";
import Question from "../Question";
import "./style.css";

const WrapperBtnLabelIcon = ({ icon, text, paddingBottom }) => {
  const isWizardChildren = useSelector((state) => state.isWizardChildren);
  return (
    <>
      {isWizardChildren && (
        <div
          className="wrapper-btn-label"
          style={{ paddingBottom: { paddingBottom } }}
        >
          {icon}
          <Question text={text} />
        </div>
      )}
    </>
  );
};

export default memo(WrapperBtnLabelIcon);