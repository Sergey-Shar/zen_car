import React, { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Title from "../Title";
import ToggleBtn from "../ToggleButton";
import SearchForm from "../SearchForm";
import { useDispatch } from "react-redux";
import { actionToggle } from "../../utils/helpers/actionsCreater";

const SearchWrapper = () => {
  const isSearchShow = useSelector((state) => state.isSearchShow);
  const dispatch = useDispatch();

  const onToggle = useCallback(() => {
    dispatch(actionToggle);
  }, [dispatch]);

  return (
    <>
      {isSearchShow && (
        <>
          {" "}
          <Grid
            container
            rowSpacing={2}
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
            sx={{ pb: "2rem", pt: "1rem", gap: "1rem" }}
          >
            <Grid item xs={12} md={6}>
              <Title />
            </Grid>
            <ToggleBtn onToggle={onToggle} />
          </Grid>
          <SearchForm />
        </>
      )}
    </>
  );
};

export default memo(SearchWrapper);