import React, { useState } from "react";
import { Vino } from "./CardsVinos1";
import Swal from "sweetalert2";

export function VinoCards({ nombre_vino, imagen, lo_compraste, precio }) {
  const [comprar, setComprar] = useState(lo_compraste);
  const buytext = comprar ? "Eliminar del Carrito" : "Añadir al Carrito";

  const Alerta = () => {
    if (!comprar) {
      Swal.fire({
        icon: "success",
        title: "Producto añadido al carrito",
        text: `añadimos el producto, ${nombre_vino}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Producto eliminado del carrito",
        text: `eliminamos el producto, ${nombre_vino}`,
      });
    }
    setComprar(!comprar); // esto lo que hace es cambiar el estado del boton al hacer click
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
          <p>{precio}</p>
          <button
            onClick={Alerta}
            className={comprar ? "boton-Añadido" : "boton-Añadir"}
          >
            <span>{buytext}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
