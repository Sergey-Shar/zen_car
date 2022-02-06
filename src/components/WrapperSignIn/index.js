import React, { memo, useState } from "react";
import AutnForm from "../AutnForm";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createAction } from "../../actions";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const WrapperSignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorEmailMess, setErrorEmailMess] = useState("");
  const [errorPassMess, setErrorPassMess] = useState(false);

  const onSignIn = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      dispatch(createAction("SET_USER", user));
      history.push("/account");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      if (errorCode.includes("user")) {
        setErrorEmail(true);
        setErrorEmailMess("вам необходимо зарегестрироваться");
      }
      if (errorCode.includes("pass")) {
        setErrorPass(true);
        setErrorPassMess("введен неверный пароль");
      }
      if (errorCode.includes("internal")) {
        setErrorEmail(true);
        setErrorEmailMess("необходимо заполнить все поля");
      }
    }
  };

  return (
    <div className="wrapper-form-auth">
      <Container maxWidth="xs">
        <AutnForm
          text={t("auth.part1")}
          handleClick={onSignIn}
          errorEmail={errorEmail}
          errorPass={errorPass}
          erroeMessageEmail={errorEmailMess}
          erroeMessagePass={errorPassMess}
        />
      </Container>
    </div>
  );
};

export default memo(WrapperSignIn);