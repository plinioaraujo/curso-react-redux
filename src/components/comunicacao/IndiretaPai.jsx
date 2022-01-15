import React from 'react';
import IndiretaFilho from './IndiretaFilho';

const IndiretaPai = (props) => {

    let nome = '?'
    let idade = 0
    let nerd = false

    function fornecerInformacoes(nome, idade, nerd) {
        nome = nome;
        idade = idade
        nerd = nerd
    }

    return ( 
        <>
           <span>{nome} </span>
           <span><strong>{idade}</strong>   </span>
           <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </>

     );
}
 
export default IndiretaPai;