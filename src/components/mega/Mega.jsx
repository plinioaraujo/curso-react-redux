import React, { useState } from "react";
import './Mega.css'
const Mega = (props) => {
  
    function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numeros;
  }
  const [qtde,setQtde] = useState(props.qtde || 6)
//   const numerosIniciais = Array(qtde).fill(0) //inicializa com zeros e gera os números após clicar no botão
  const numerosIniciais = gerarNumeros(qtde) //inicializa o form com os números da Mega
  const [numeros, setNumeros] = useState(numerosIniciais)
 
  return (
    <>
      <div>
        <h2>MegaSena</h2>
        <h3 className="resultado" >{ numeros.join(' ')}</h3>
        <div className="Mega">
            <label>Qtde de Números</label>
            <input 
                min={6}
                max={15}
                type="number" 
                value={qtde} 
                onChange={(e) => {
                setQtde(+e.target.value)
                setNumeros(gerarNumeros(+e.target.value))}
            } 
            />
        </div>
        <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Numeros</button>
      </div>
    </>
  );
};

export default Mega;
