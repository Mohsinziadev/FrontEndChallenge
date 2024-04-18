import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>
);
