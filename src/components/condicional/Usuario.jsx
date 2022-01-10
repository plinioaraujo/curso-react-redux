import React from 'react';
import Se from './Se';


const Usuario = (props) => {
    
    const user = props.user || {}    

    return ( 
        <>
        <br></br>
        <Se test={user && user.nome}>
            Seja bem vindo <strong>{user.nome}</strong>!
            Email <strong>{user.email}</strong>!
        </Se>
        <Se test={!user || !user.nome}>
            Seja bem vindo <strong>AMIGO</strong>!
        </Se>
        </>

     );
}
 
export default Usuario;