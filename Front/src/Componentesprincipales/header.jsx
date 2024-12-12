import React from "react";
import "./estilos.css";

function PrincipioHeader() {
  return (
    <header>
      <div className="logo">
        <img src="../src/img/logo.png" alt="Logo" />
      </div>
      <div className="titulo">
        <h1>Elixir de los Dioses</h1>
      </div>
    </header>
  );
}

export default PrincipioHeader;
