import React from "react";

import Fragmento from "./components/basicos/Fragmentos";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

const App = () => {
  return (
    <>
      <div>
        <h1>Fundamentos React</h1>
        <Card titulo="#04 - Desafio Aleatório">
          <Aleatorio minimo={1} maximo={10}></Aleatorio>
        </Card>
        <Card titulo="#03 - Fragmento">
          <Fragmento></Fragmento>
        </Card>
        <Card titulo="#02 - Com Parametro">
          <ComParametro
            titulo="Situação do aluno"
            aluno="Joao Jose"
            nota={9.0}
          ></ComParametro>
        </Card>
        <Card titulo="#01 -  Primeiro Componente">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </>
  );
};

export default App;
