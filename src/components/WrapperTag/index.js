import React, { memo, useCallback, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PARENT_ID_WORKS } from "../../query/queryParentIdWorks";
import { GET_PARENT_ID_SYMPTOMS } from "../../query/queryParentIdSymptoms";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import Tag from "../Tag";
import { createAction } from "../../actions";

const WrapperTag = () => {
  const dispatch = useDispatch();

  const currentData = useSelector((state) => state.currentData);
  const isShowTag = useSelector((state) => state.isShowTag);
  const parentId = useSelector((state) => state.parentId);
  const isToggle = useSelector((state) => state.isToggle);

  const [queryDataWizard, setQueryDataWizard] = useState(null);
  const [queryDataSymptom, setQueryLDataSymptom] = useState(null);

  const { data, loading } = useQuery(GET_PARENT_ID_WORKS, {
    variables: {
      parentId: {
        eq: parseInt(parentId),
      },
    },
  });

  const { data: dataParentIdSymptoms, loading: loadingParentIdSymptoms } =
    useQuery(GET_PARENT_ID_SYMPTOMS, {
      variables: {
        parentIdSymptoms: {
          eq: parseInt(parentId),
        },
      },
    });

  useEffect(() => {
    !loading && setQueryDataWizard(data.wizardWorks);
    !loadingParentIdSymptoms &&
      setQueryLDataSymptom(dataParentIdSymptoms.wizardSymptoms);
  }, [loading, loadingParentIdSymptoms, data, dataParentIdSymptoms]);

  useEffect(() => {
    !isToggle
      ? dispatch(createAction("CHANGE_DATA", queryDataWizard))
      : dispatch(createAction("CHANGE_DATA", queryDataSymptom));
  }, [isToggle, queryDataWizard, queryDataSymptom, dispatch]);

  useEffect(() => {
    dispatch(createAction("IS_LOADING", loading));
  }, [loading, dispatch]);

  const onGetIdWorks = useCallback(
    (event, id) => {
      dispatch(createAction("GET_PARENT_ID", event.target.id));
      dispatch(createAction("GET_ID", id));
      dispatch(createAction("SHOW_SEARCH", false));
      dispatch(createAction("IS_SHOW_QUESTION", true));
    },
    [dispatch]
  );

  return (
    <>
      {currentData &&
        isShowTag &&
        currentData.map((works) => {
          return (
            <Grid key={works.id} item xs={12} md={3}>
              <Tag
                id={works.id}
                idWorks={(event) => onGetIdWorks(event, works.parentId)}
                isImage={works.image}
                urlImage={works?.image?.file.url}
                alt={works?.name}
                discription={works?.name}
              />
            </Grid>
          );
        })}
    </>
  );
};

export default memo(WrapperTag);