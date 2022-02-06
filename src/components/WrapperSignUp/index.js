import React, { memo, useState } from "react";
import { Container } from "@mui/material";
import AutnForm from "../AutnForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { createAction } from "../../actions";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import "./style.css";

const WrapperSignUp = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorEmailMess, setErrorEmailMess] = useState("");
  const [errorPassMess, setErrorPassMess] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSignUp = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      history.push("/account");
      dispatch(createAction("SET_USER", user));
    } catch (error) {
      const errorCode = error.code;
      if (errorCode.includes("email")) {
        setErrorEmail(true);
        setErrorEmailMess("адрес электронной почты введен не корректно");
      }
      if (errorCode.includes("pass")) {
        setErrorPass(true);
        setErrorPassMess("слишком короткий пароль");
      }
      if (errorCode.includes("internal")) {
        setErrorEmail(true);
        setErrorEmailMess("адрес электронной почты введен не корректно");
      }
    }
  };

  return (
    <div className="wrapper-form-auth">
      <Container maxWidth="xs">
        <AutnForm
          text={t("auth.part2")}
          handleClick={onSignUp}
          errorEmail={errorEmail}
          errorPass={errorPass}
          erroeMessageEmail={errorEmailMess}
          erroeMessagePass={errorPassMess}
        />
      </Container>
    </div>
  );
};

export default memo(WrapperSignUp);