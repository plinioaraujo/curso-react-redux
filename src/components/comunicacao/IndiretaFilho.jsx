import React from 'react';

const IndiretaFilho = (props) => {
    
    return ( 
        <>
        <div>
            Filho
        </div>
            <button onClick={e=>props.quandoClicar('Joao', 53, true)
                
            }>
                
                Fornecer Informações</button>
        </>

     );
}
 
export default IndiretaFilho;