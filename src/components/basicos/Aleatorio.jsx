import React from 'react';

const Aleatorio = (props) => {
    // const min = props.minimo
    // const max = props.maximo

    const {minimo, maximo} = props
    const aleatorio = parseInt(Math.floor(Math.random()*(maximo-minimo+1)+minimo))
    
    return ( 
        <h1>{aleatorio}</h1>

     );
}
 
export default Aleatorio;
