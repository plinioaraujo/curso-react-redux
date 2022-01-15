import React from 'react';

const IndiretaFilho = (props) => {
    
    const cb = props.quandoClicar
    const gerarIdade = () =>parseInt(Math.random() * (20)) + 50
    const gerarNerd = () =>Math.random() > 0.5
    
    return ( 
        <>
        <div>
            Filho
        </div>
            <button onClick={e=>cb('Jose', gerarIdade, gerarNerd)
                
            }>
                
                Fornecer Informações</button>
        </>

     );
}
 
export default IndiretaFilho;