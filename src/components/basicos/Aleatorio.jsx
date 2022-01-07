import React from 'react';

const Aleatorio = (props) => {
    const aleatorio = Math.floor(Math.random()*(props.maximo-props.minimo+1)+props.minimo)
    
    return ( 
        <h1>{aleatorio}</h1>

     );
}
 
export default Aleatorio;
