import React from "react";
import "./tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { hydrate, render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
    rootElement
  );
} else {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
    rootElement
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
