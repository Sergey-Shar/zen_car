import React, { useCallback, useEffect, useState, memo } from "react";
import { useQuery } from "@apollo/client";
import HorizontalsSteps from "../HorizontalsSters";
import { GET_ID_WORKS } from "../../query/queryIdWorks";
import { GET_ID_SYMPTOMS } from "../../query/queryIdSymptoms";
import { Container, Grid } from "@mui/material";
import LinearIndeterminate from "../Progress";
import ArrowBtn from "../ArrowButton";
import QuestionTittle from "../QuestionTittle";
import Question from "../Question";
import IconLabelBtn from "../IconLabelButton";
import { ArrowBack } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ListServices from "../ListServices";
import RadioBtnGroup from "../RadioBtnGroup";
import WrapperBtnLabelIcon from "../WrapperBtnLabelIcon";
import SearchWrapper from "../SearchWrapper";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../utils/helpers/actionsCreater";
import { uniqBy } from "lodash";
import { useTranslation } from "react-i18next";
import WrapperTag from "../WrapperTag";
import "./style.css";

const WrapperRepair = () => {
  const dispatch = useDispatch();
  const parentId = useSelector((state) => state.parentId);
  const isShowQuestion = useSelector((state) => state.isShowQuestion);
  const isWizardChildren = useSelector((state) => state.isWizardChildren);
  const loading = useSelector((state) => state.isLoading);
  const isToggle = useSelector((state) => state.isToggle);

  const { t } = useTranslation();

  const { data: idData, loading: idLoader } = useQuery(GET_ID_WORKS, {
    variables: {
      id: {
        eq: parseInt(parentId),
      },
    },
  });

  const { data: idSymptoms, loading: loadingSymptom } = useQuery(
    GET_ID_SYMPTOMS,
    {
      variables: {
        id: {
          eq: parseInt(parentId),
        },
      },
    }
  );

  const [list, setList] = useState([]);
  const [isCheckedLocalStorage, setIsCheckedLocalStorage] = useState(false);
  const [question, setQuestion] = useState("");
  const [questionTittle, setQuestionTittle] = useState("");
  const [iconBtn, setIconBtn] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [arrLocalStorage, setArrLocalStorage] = useState([]);
  const [idWork, setIdWork] = useState(null);
  const [idSymptom, setIdSymptom] = useState(null);
  const [id, setId] = useState([]);

  useEffect(() => {
    !idLoader && setIdWork(idData.wizardWorks);
    !loadingSymptom && setIdSymptom(idSymptoms.wizardSymptoms);
  }, [idLoader, loadingSymptom, idData, idSymptoms]);

  useEffect(() => {
    !isToggle ? setId(idWork) : setId(idSymptom);
  }, [isToggle, idWork, idSymptom]);

  useEffect(() => {
    setIsCheckedLocalStorage(!!list.length);
  }, [list]);

  useEffect(() => {
    const raw = localStorage.getItem("listWorks") || "[]";
    setList(JSON.parse(raw));
  }, []);

  useEffect(() => {
    const set = uniqBy(list);
    setArrLocalStorage(set);
    localStorage.setItem("listWorks", JSON.stringify(set));
  }, [list]);

  useEffect(() => {
    arrLocalStorage.length &&
      dispatch(createAction("IS_WIZARD_CHILDREN", true));
  }, [arrLocalStorage, dispatch]);

  useEffect(() => {
    if (parentId === null) {
      dispatch(createAction("SHOW_SEARCH", true));
      dispatch(createAction("IS_SHOW_QUESTION", false));
    }
  }, [parentId, dispatch]);

  useEffect(() => {
    if (!isCheckedLocalStorage) {
      dispatch(createAction("GET_PARENT_ID", null));
      dispatch(createAction("IS_WIZARD_CHILDREN", false));
    }
  }, [isCheckedLocalStorage, dispatch]);

  useEffect(() => {
    if (id) {
      id.length &&
        id.forEach((i) => {
          setQuestionTittle(i.name);
          setQuestion(i.question);
          if (!i.children.length) {
            dispatch(createAction("IS_WIZARD_CHILDREN", true));
            setList([...list, ...i.vehicleWorks]);
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (isWizardChildren) {
      setButtonText(t("button.backServices"));
      dispatch(createAction("IS_SHOW_QUESTION", false));
      dispatch(createAction("SHOW_SEARCH", false));
      dispatch(createAction("IS_SHOW_TAG", false));
    } else {
      setButtonText(t("button.addServices"));
      setIconBtn(<ArrowBack />);
      dispatch(createAction("SHOW_SEARCH", true));
      dispatch(createAction("IS_SHOW_TAG", true));
    }
  }, [isWizardChildren, dispatch, t]);

  const onDeleteItemLocalStorage = useCallback(
    (id) => {
      const newArr = [...list].filter((i) => i.id !== id);
      setList(newArr);
    },
    [list]
  );

  return (
    <div className="wrapper">
      <HorizontalsSteps />

      <Container maxWidth="lg" sx={{ mt: "1rem" }}>
        <SearchWrapper />

        {isShowQuestion && !loading && (
          <>
            {" "}
            <QuestionTittle text={questionTittle} />
            <ArrowBtn />
            <Question text={question} />{" "}
          </>
        )}

        <WrapperBtnLabelIcon
          icon={<ShoppingCartOutlinedIcon color="disabled" />}
          text={t("title.part1")}
        />

        {loading && <LinearIndeterminate />}

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
          sx={{ pt: "1.5rem", pb: "2rem" }}
        >
          <ListServices
            list={arrLocalStorage}
            onDelete={onDeleteItemLocalStorage}
          />

          <WrapperTag />
        </Grid>

        <WrapperBtnLabelIcon icon={<SettingsIcon />} text={t("title.part2")} />

        <RadioBtnGroup />

        {isCheckedLocalStorage && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconLabelBtn text={buttonText} arrow={iconBtn} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default memo(WrapperRepair);