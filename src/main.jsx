import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// 1. THESE THREE LINES ARE THE MAGIC ENGINE LINK! 
// If these are missing, your app will look like raw HTML.
import "./assets/styles/variables.css";
import "./assets/styles/reset.css";
import "./assets/styles/layout.css";

// 2. Import our root component
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);