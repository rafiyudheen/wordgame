import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegForm = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <Link to={`/wordGame/${name}`}>Start</Link>
    </div>
  );
};

export default RegForm;
