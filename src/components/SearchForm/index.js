import React, { memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAction, actionClearInput } from "../../utils/helpers/actionsCreater";
import Search from "../SearchBar";
import { GET_NAME_WORKS } from "../../query/queryNameWorks";
import { useQuery } from "@apollo/client";
import AutoComplete from "../SearchAutoComplete";
import "./style.css";

const SearchForm = () => {
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.searchInputValue);

  const { data, loading } = useQuery(GET_NAME_WORKS, {
    variables: {
      name: {
        contain: inputValue,
      },
    },
  });

  const onChengeValue = useCallback(
    (event) => {
      dispatch(createAction("CHANGE_INPUT_VALUE", event.target.value));
    },
    [dispatch]
  );

  const onAutoComplete = useCallback(
    (id) => {
      dispatch(createAction("GET_PARENT_ID", id));
      dispatch(createAction("SHOW_SEARCH", false));
      dispatch(actionClearInput);
    },
    [dispatch]
  );

  return (
    <form className="form" style={{ position: "relative" }}>
      <Search
        type={"search"}
        value={inputValue}
        onChengeValue={onChengeValue}
      />
      <div className="auto-complete-wrapper">
        {!loading &&
          data.wizardWorks.map(({ id, name }) => {
            return (
              inputValue && (
                <AutoComplete
                  key={id}
                  onSearch={() => onAutoComplete(id)}
                  text={name}
                />
              )
            );
          })}
      </div>
    </form>
  );
};

export default memo(SearchForm);