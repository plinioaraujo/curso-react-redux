import React, { cloneElement } from "react";

const Familia = (props) => {
  return(
  <>
    {props.children.map((child, i) => {
      return cloneElement(child, {...props, key: i});
    })}
  </>
  )
};

export default Familia;
