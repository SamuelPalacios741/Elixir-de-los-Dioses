import React, { useState } from "react";
import { agregarAlCarrito } from "../Redux/Reducers/carritoSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export function Tarjetas({ producto }) {
  const { nombre, imagen, precio, lo_compraste } = producto;

  const [comprar, setComprar] = useState(false);
  const buytext = comprar ? "Se añadio al carrito" : "Añadir al Carrito";

  const dispatch = useDispatch();

  const handleClick = () => {
    Swal.fire({
      icon: "success",
      title: "Producto añadido al carrito",
      text: `añadimos el producto, ${nombre}`,
    });
    dispatch(agregarAlCarrito(producto));
    setComprar(true);
  };

  return (
    <div className="cards-Normal">
      <div className="card-Normal">
        <div className="card-img-Normal">
          <img src={imagen} alt={nombre} />
          <a className="filtro">
            <div className="filtro-content">
              <p>INFORMACIÓN</p>
              <button>Ver Más</button>
            </div>
          </a>
        </div>
        <div className="card-content-Normal">
          <h3>{nombre}</h3>
          <p>{precio}</p>
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
