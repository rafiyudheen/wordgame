import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WordGame from "./pages/WordGame.jsx";

import GameComponent from "./Componets/GameComponent.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameComponent />
  </StrictMode>
);
