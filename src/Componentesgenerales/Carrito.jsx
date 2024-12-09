import React from "react";
import CardCarrito from "./CardCarrito";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { limpiarCarrito } from "../Redux/Reducers/carritoSlice";
import Swal from "sweetalert2";

const Carrito = () => {
  const { productosDelCarrito, precioTotal } = useSelector(
    (state) => state.carrito
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    Swal.fire({
      icon: "question",
      title: "¿Estás seguro de querer eliminar todos los productos?",
      showCancelButton: true, // Habilita botón "No"
      confirmButtonText: "Sí", // Texto del botón "Sí"
      cancelButtonText: "No", // Texto del botón "No"
    }).then((respuesta) => {
      if (respuesta.isConfirmed) {
        dispatch(limpiarCarrito()); // Limpia el carrito
        Swal.fire({
          text: "Carrito vacío",
          icon: "success",
        });
      }
    });
  };

  return (
    <main>
      {/* Seccion superior para el precio y limpiar carrito */}
      <section className="cabecera-carrito">
        {productosDelCarrito.length == 0 ? (
          ""
        ) : (
          <>
            <span className="precio-carrito">${precioTotal}</span>
            <Button className="boton-carrito" onClick={handleClick}>
              Limpiar carrito
            </Button>
          </>
        )}
      </section>

      {/* Seccion para las tarjetas del carrito */}
      <section className="tarjetas-carrito">
        {productosDelCarrito.length == 0 ? (
          <span style={{ color: "white" }}>No hay productos....</span>
        ) : (
          ""
        )}
        {productosDelCarrito.map((item, index) => (
          <CardCarrito key={index} producto={item} accion={dispatch} />
        ))}
      </section>
    </main>
  );
};

export default Carrito;
