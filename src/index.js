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

const httpLink = new HttpLink({
  uri: "https://staging-graphql-service.onrewind.tv/graphql",
});

const authLink = setContext(() => ({
  headers: { "x-account-key": "SyT0uHf3I" },
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
