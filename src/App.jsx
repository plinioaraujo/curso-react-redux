import React from 'react';

import Fragmento from "./components/basicos/Fragmentos";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import Aleatorio from './components/basicos/Aleatorio';


const App = () => {
    return (  

        <div>
        <Aleatorio minimo={1} maximo={10}></Aleatorio>
        <Fragmento></Fragmento>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Joao Jose"
            nota={6.0}>
        </ComParametro>  
        <Primeiro></Primeiro>
    </div>
    

     );
}
 
export default App;