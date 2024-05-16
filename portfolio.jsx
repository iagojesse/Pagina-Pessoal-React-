// PortfolioTrabalhos.jsx
import React from 'react';
import './style.css';

function PortfolioTrabalhos() {
  return (
    <div className="pagina2">
      <header>
        <div className="button-group">
          <button id="btnContato">Contato</button>
          <button id="btnPortfolio">Portfólio</button>
          <button id="btnCurriculo">Currículo</button>
        </div>
      </header>
      <div className="sections">
        <section>
          <li>Portfólio 1</li>
        </section>
        <section>
          <li>Portfólio 2</li>
        </section>
        <section>
          <li>Portfólio 3</li>
        </section>
        <section>
          <li>Portfólio 4</li>
        </section>
      </div>
    </div>
  );
}

export default PortfolioTrabalhos;
