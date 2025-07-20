import { StrictMode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CustomTheme } from "./CustomTheme.tsx";

const client = new ApolloClient({
  uri: "http://localhost:8000/",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <CustomTheme>
        <App />
      </CustomTheme>
    </ApolloProvider>
  </StrictMode>
);
