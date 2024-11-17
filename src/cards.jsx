import React, { useState } from "react";
import "./cards.css";

export function VinoCard({ nombre_vino, imagen, button='Añadir Al Carrito' }) {
  const [Añadir, setComprando] = useState(false);

  const handleClick = () => {
    setComprando(!Añadir);
  };

  return (

    <div className="cards">
      <div className="card">
        <div className="card-img">
          <img src={imagen} alt=""/>
          <a className="filtro">
            <div className="filtro-content">
              <p>INFORMACION</p>
              <button>Ver Más</button>
            </div>
          </a>
        </div>
        <div className="card-content">
          <h3>
            TITULO
          </h3>
          <p>
            $PRECIO$
          </p>
          <button
            onClick={handleClick}
            className={Añadir ? 'boton-Añadido' : 'boton-Añadir'}
          >
            {Añadir ? 'Quitar Del Carrito' : button}
          </button>
        </div>
      </div>
    </div>

  );
}
