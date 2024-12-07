import React, { useState } from "react";
import "./cards.css";
import Swal from "sweetalert2";

export function Principio({ nombre_vino, imagen, lo_compraste, precio }) {
  const [añadir, setAñadir] = useState(lo_compraste); // Estado inicial basado en lo_compraste
  const buyText = añadir ? "Eliminar del carrito" : "Añadir al carrito";

  const Alerta = () => {
    if (!añadir) {
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
    setAñadir(!añadir); // esto lo que hace es cambiar el estado del boton al hacer click
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
            className={añadir ? "boton-Añadido" : "boton-Añadir"}
          >
            <span>{buyText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
