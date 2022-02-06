import React, { memo, useCallback } from "react";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { createAction } from "../../actions";

const ArrowBtn = () => {
  const dispatch = useDispatch();
  const parentId = useSelector((state) => state.parentId);
  const id = useSelector((state) => state.id);

  const onBack = useCallback(() => {
    if (parseInt(parentId) !== id) {
      dispatch(createAction("GET_PARENT_ID", id));
    } else {
      dispatch(createAction("GET_PARENT_ID", null));
    }
  }, [parentId, id, dispatch]);

  return (
    <IconButton
      aria-label="delete"
      sx={{ background: "#dde1ec" }}
      onClick={onBack}
    >
      <ArrowBack />
    </IconButton>
  );
};

export default memo(ArrowBtn);