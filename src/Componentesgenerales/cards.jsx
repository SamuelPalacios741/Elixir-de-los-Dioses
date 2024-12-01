import React, { useState } from "react";
import "./cards.css";

export function Principio({ nombre_vino, imagen, lo_compraste }) {
  const [añadir, setAñadir] = useState(lo_compraste); // Estado inicial basado en lo_compraste
  const buyText = añadir ? "Eliminar del carrito" : "Añadir al carrito";

  const handleClick = () => {
    setAñadir(!añadir); // Cambia el estado al hacer clic
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
            className={añadir ? "boton-Añadido" : "boton-Añadir"}
          >
            <span>{buyText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
