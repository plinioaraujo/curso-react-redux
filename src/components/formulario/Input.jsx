import React, { useState } from "react";

import "./Input.css";

const Input = (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <div className="Input">
        <h2>{valor}</h2>
        <div className="divflex">
          <input value={valor} onChange={quandoMudar} />
          <input value={valor} readOnly />
          <input value={undefined} />

        </div>
      </div>
    </>
  );
};

export default Input;
