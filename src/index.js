import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./i18n";
import App from "./app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import "./firebase";
import { ThemeProvider, createTheme } from "@mui/material";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3cb7b4",
    },
  },
});

const client = new ApolloClient({
  uri: "https://zencar-backend-dev.dev.zen.car/graphql",
  cache: new InMemoryCache(),
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