import React, { useState } from "react";
import "./cards.css";

export function VinoCard({ nombre_vino, imagen, lo_compraste }) {
  const [comprar, setComprando] = useState(lo_compraste);
  const buyText = comprar ? "Eliminar del carrito" : "Añadir al carrito";

  const handleClick = () => {
    setComprando(!comprar);
  };

  return (
    <div className="Cards">
      <div className="VinoCard-Container">
        <div className="VinoCard-Img">
          <img src={imagen} alt="" className="VinoCard-Img" />
          <h3>{nombre_vino}</h3>
        </div>

        <div className="">
          <button className="VinoCard-Button" onClick={handleClick}>
            <span>{buyText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
