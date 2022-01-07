import React from "react";

const FamiliaMembro = (props) => {
  return (
    <>
      <p>
        <strong>
          {props.nome} {props.sobrenome}
         
        </strong>
      </p>
    </>
  );
};

export default FamiliaMembro;
