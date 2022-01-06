import ReactDom from "react-dom";
import React from "react";

import Fragmento from "./components/basicos/Fragmentos";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import './index.css';

const el = document.getElementById('root'); 

ReactDom.render(
    
    <div>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Joao Jose"
            nota={6.0}>
        </ComParametro>  
        <Primeiro></Primeiro>
        <Fragmento></Fragmento>
            
      
        
    </div>
    
    ,el
);