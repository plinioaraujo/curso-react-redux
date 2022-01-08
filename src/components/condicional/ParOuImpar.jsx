import React from 'react';

const ParOuImpar  = (props) => {
    const isPar = props.numero % 2 === 0 
    return ( 
        <>
            { isPar ?  <span>Par</span> : <span>Impar</span>}
        </>
     );
}
 
export default ParOuImpar;


