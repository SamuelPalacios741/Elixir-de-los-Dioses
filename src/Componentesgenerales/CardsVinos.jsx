import React, { useState } from "react";
import { Vino } from "./CardsVinos1";

export function VinoCards({ nombre_vino, imagen, lo_compraste }) {
  const [comprar, setComprar] = useState(lo_compraste);
  const buytext = comprar ? "Eliminar del Carrito" : "Añadir al Carrito";

  const handleClick = () => {
    setComprar(!comprar);
  };

  return (
    <div className="cards">
      <div className="card">
        <div className="card-img">
          <img src={imagen} alt={nombre_vino} />
          <a className="filtro">
            <div className="filtro-content">
              <p>INFORMACIÓN</p>
              <button>Ver Más</button>
            </div>
          </a>
        </div>
        <div className="card-content">
          <h3>{nombre_vino}</h3>
          <p>$PRECIO$</p>
          <button
            onClick={handleClick}
            className={comprar ? "boton-Añadido" : "boton-Añadir"}
          >
            <span>{buytext}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
