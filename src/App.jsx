import React from "react";

import Fragmento from "./components/basicos/Fragmentos";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

import "./App.css";
import Familia from "./components/basicos/Familia";

const App = () => {
  return (
    <>
      <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
          <Card titulo="#05 - Componente Com Filho" color="#CD8A9C" >
            <Familia sobrenome="Silva"/>
            
          </Card>
          <Card titulo="#04 - Desafio Aleatório" color="#FF7F50" >
            <Aleatorio minimo={1} maximo={10}></Aleatorio>
          </Card>
          <Card titulo="#03 - Fragmento" color="#6495ED">
            <Fragmento></Fragmento>
          </Card>
          <Card titulo="#02 - Com Parametro" color="#40E0D0">
            <ComParametro
              titulo="Situação do aluno"
              aluno="Joao Jose"
              nota={9.0}
            ></ComParametro>
          </Card>
          <Card titulo="#01 -  Primeiro Componente" color="#DFFF00">
            <Primeiro></Primeiro>
          </Card>
        </div>
      </div>
    </>
  );
};

export default App;
