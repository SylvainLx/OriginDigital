import { React } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import App from "./App";

const { REACT_APP_ACCOUNT_KEY_PASS } = process.env;
const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_ENDPOINT_URL}`,
});

const authLink = setContext(() => ({
  headers: { "x-account-key": REACT_APP_ACCOUNT_KEY_PASS },
}));
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>{" "}
  </BrowserRouter>
);
