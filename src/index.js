import ReactDom from "react-dom";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import './index.css';

const el = document.getElementById('root'); 

ReactDom.render(
    
    <div>
       
       
           <Primeiro></Primeiro>
            
      
        
    </div>
    
    ,el
);