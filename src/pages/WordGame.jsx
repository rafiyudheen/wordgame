import React, { useState } from "react";
import RegForm from "../Componets/regForm";
import "../Style.css";
import { Outlet } from "react-router-dom";

const WordGame = () => {
  const [regFormClass, setRegFormClass] = useState("regFormVisble");

  return (
    <>
      <h3>Word Game</h3>
      <GameComponent />
    </>
  );
};

export default WordGame;
