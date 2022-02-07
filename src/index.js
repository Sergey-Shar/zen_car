import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import "./i18n";
import App from "./app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import "./firebase";
import { ThemeProvider, createTheme } from "@mui/material";
import { client } from "./api/AppoloInstance";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3cb7b4",
    },
  },
});

const store = createStore(reducer);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
