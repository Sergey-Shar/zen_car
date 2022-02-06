import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { createAction, logAut } from "../actions";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import RepairPage from "../pages/RepairWizardPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignIn from "../pages/SignInPage";
import SignUp from "../pages/SingUpPage";
import AccountProfile from "../pages/AccountProfile";
import { Container } from "@mui/material";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? dispatch(createAction("SET_USER", user)) : dispatch(logAut);
    });
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Container maxWidth="xl">
          <Header />
          <Switch>
            <Route path="/account">
              <AccountProfile />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/">
              <RepairPage />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Router>
    </Suspense>
  );
}