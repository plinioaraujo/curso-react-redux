import React from 'react';

const ComParametro = (props) => {
    const nota = Math.ceil(props.nota);
    const resultado = nota >= 7 ? "Aprovado" : "Reprovado"
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.aluno}</h3>
            <h3>{resultado}</h3>
        </div>

     );

        
    }
 
export default ComParametro;