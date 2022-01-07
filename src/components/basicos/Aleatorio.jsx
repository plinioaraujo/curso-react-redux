import React from "react";

const Aleatorio = (props) => {
  // const min = props.minimo
  // const max = props.maximo

  const { minimo, maximo } = props;
  const aleatorio = parseInt(
    Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
  );

  return (
    <>
      <h1>Valor Aleatório</h1>
      <p><strong>Valor Mínimo:&nbsp; {minimo}</strong></p>
      <p><strong>Valor Máximo:&nbsp; {maximo}</strong></p>
      <p><strong>Valor escolhido:&nbsp;{aleatorio}</strong></p>
    </>
  );
};

export default Aleatorio;
