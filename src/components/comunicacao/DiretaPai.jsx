import React from 'react';

import DiretaFilho from './DiretaFilho';

const DiretaPai = (props) => {
    return ( 
        <>
            <div>
                <DiretaFilho nome="Jose" idade={25} nerd={true} />
                <DiretaFilho nome="João" idade={16} nerd={false} />
            </div>
        </>
     );
}
 
export default DiretaPai;