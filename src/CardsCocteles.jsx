import React, { useState } from "react";
import "./cards.css";

export function CoctelesCards({ nombre_coctel, imagen, lo_compraste }) {
  const [comprar, setComprar] = useState(lo_compraste); //este es nuestro estado inicial
  const buytext = comprar ? "Eliminar del carrito" : "Añadir al carrito";

  const handleClick = () => {
    setComprar(!comprar); // con esto cambiamos el estado al hacer click
  };

  return (
    <div className="cards">
      <div className="card">
        <div className="card-img">
          <img src={imagen} alt={nombre_coctel} />
          <a className="filtro">
            <div className="filtro-content">
              <p>INFORMACIÓN</p>
              <button>Ver Más</button>
            </div>
          </a>
        </div>
        <div className="card-content">
          <h3>{nombre_coctel}</h3>
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
