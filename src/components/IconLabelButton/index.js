import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { createAction } from "../../utils/helpers/actionsCreater";
import { useTranslation } from "react-i18next";
import Btn from "../Button";

const IconLabelBtn = ({ text, arrow }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onRedirect = useCallback(
    (event) => {
      if (event.target.textContent === t("button.addServices")) {
        dispatch(createAction("IS_WIZARD_CHILDREN", true));
      } else if (event.target.textContent === t("button.backServices")) {
        dispatch(createAction("GET_PARENT_ID", null));
        dispatch(createAction("SHOW_SEARCH", true));
        dispatch(createAction("IS_WIZARD_CHILDREN", false));
      }
    },
    [dispatch, t]
  );

  return (
    <Btn variant={"outlined"} click={onRedirect} icon={arrow} text={text} />
  );
};

export default memo(IconLabelBtn);