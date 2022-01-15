import React, {useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

const IndiretaPai = (props) => {
    const [a, b] = [1,2]
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)
    

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

        console.log(nome, idade,nerd)
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