import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WordGame from "./pages/WordGame.jsx";
import RegForm from "./Componets/regForm.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameComponent from "./Componets/GameComponent.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WordGame />,
    children: [{ path: "/", element: <GameComponent></GameComponent> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
