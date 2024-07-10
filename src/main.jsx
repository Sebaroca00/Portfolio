// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
import "./index.css";
import "./App.css"; // Asegúrate de importar tus estilos personalizados

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
