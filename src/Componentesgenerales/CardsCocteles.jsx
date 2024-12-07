import React, { useState } from "react";
import "./cards.css";
import Swal from "sweetalert2";

export function CoctelesCards({ nombre_coctel, imagen, lo_compraste, precio }) {
  const [comprar, setComprar] = useState(lo_compraste); //este es nuestro estado inicial
  const buytext = comprar ? "Eliminar del Carrito" : "Añadir al carrito";

  const Alerta = () => {
    if (!comprar) {
      Swal.fire({
        icon: "success",
        title: "Producto añadido al carrito",
        text: `añadimos el producto, ${nombre_coctel}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Producto eliminado del carrito",
        text: `eliminamos el producto, ${nombre_coctel}`,
      });
    }
    setComprar(!comprar); // esto lo que hace es cambiar el estado del boton al hacer click
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
