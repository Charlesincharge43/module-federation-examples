import React from "react";
import { createRoot } from "react-dom/client";
import { SaltProvider, Spinner } from "@salt-ds/core";
import '@salt-ds/theme/index.css'

const App = () => {
  return (
    <div style={{ padding: 100, display: "flex", justifyContent: "center" }}>
      <Spinner size="medium" />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(
    <SaltProvider>
        <App />
    </SaltProvider>
);