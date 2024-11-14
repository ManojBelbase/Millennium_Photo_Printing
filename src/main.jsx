import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyState from "./context/MyState.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <MyState>
        <App />
        <Toaster position="bottom-center" />
      </MyState>
    </StrictMode>
  </BrowserRouter>
);
