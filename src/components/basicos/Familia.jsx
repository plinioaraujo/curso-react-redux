import React from "react";

import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
  return (
    <>
      <FamiliaMembro nome="João" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="José" {... props} />
      <FamiliaMembro nome="Maria" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Isabel" sobrenome={props.sobrenome} />
    </>
  );
};

export default Familia;
