import React from "react";

import produtos from "../../data/produtos";
import './TabelaProdutos.css';

const TabelaProdutos = () => {
  const tabProdutos = produtos.map((prod, i) => {
    return (
      <>
        <tr key={prod.id} className={i % 2 == 0 ? 'Par' : 'Impar' }>
          <td>{prod.id}</td>
          <td>{prod.produto}</td>
          <td>R$ {prod.preco.toFixed(2).replace('.',',')}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div className="tabelaProdutos">
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>Produto</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>{tabProdutos}</tbody>
        </table>
      </div>
    </>
  );
};

export default TabelaProdutos;
