import React from "react";

import Fragmento from "./components/basicos/Fragmentos";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

import "./App.css";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/Usuario";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

const App = () => {
  return (
    <>
      <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

          <Card titulo="#13 - MegaSena" color="#B9006E">
            <Mega par="#ffd700" impar="#c04f66"/>
          </Card>
          <Card titulo="#12 - Contador" color="#ff4242">
           <Contador numeroInicial={10} passoInicial={5}/>
          </Card>
          <Card titulo="#11 - Componente Controlado (Input)" color="#e45f56">
            <Input/>
          </Card>
          <Card titulo="#10 - Comunicação Indireta" color="#aabb59">
            <IndiretaPai />
          </Card>
          <Card titulo="#09 - Comunicação Direta" color="#ac7b59">
            <DiretaPai />
          </Card>
          <Card titulo="#08 - Renderização Condicional #01" color="#982395">
            <ParOuImpar numero={20} />
            <UsuarioInfo user={{ nome: "João da Silva" }} />
            <UsuarioInfo user={{ email: "joao@email.com" }} />
          </Card>
          <Card titulo="#07 - Repetição - Produtos" color="#ffcbaa">
            <TabelaProdutos />
          </Card>
          <Card titulo="#06 - Repetição" color="#ccdd43">
            <ListaAlunos />
          </Card>
          <Card titulo="#05 - Componente Com Filho #01" color="#CD8A9C">
            <Familia sobrenome="Silva">
              <FamiliaMembro nome="João" />
              <FamiliaMembro nome="José" />
              <FamiliaMembro nome="Maria" />
              <FamiliaMembro nome="Isabel" />
            </Familia>
          </Card>
          <Card titulo="#04 - Desafio Aleatório" color="#FF7F50">
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
