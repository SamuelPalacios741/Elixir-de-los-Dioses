import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productosDelCarrito: [],
  precioTotal: 0,
};

const carritoSlice = createSlice({
  name: "Carrito",
  initialState,
  reducers: {
    agregarAlCarrito: (state, action) => {
      const producto = { ...action.payload };
      const productoExistente = state.productosDelCarrito.find(
        (item) => item.id == producto.id
      );

      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        producto.cantidad = 1;
        state.productosDelCarrito.push(producto);
      }
      state.precioTotal += producto.precio || productoExistente.precio;
    },
    eliminarDelCarrito: (state, action) => {
      const producto = { ...action.payload };
      const productoExistente = state.productosDelCarrito.find(
        (item) => item.id == producto.id
      );

      if (productoExistente.cantidad > 1) {
        productoExistente.cantidad -= 1;
      } else {
        const index = state.productosDelCarrito.indexOf(producto);
        state.productosDelCarrito.splice(index, 1);
      }
      state.precioTotal -= productoExistente.precio;
    },
    limpiarCarrito: (state, action) => {
      state.productosDelCarrito = initialState.productosDelCarrito;
      state.precioTotal = initialState.precioTotal;
    },
  },
});

export default carritoSlice.reducer;
export const { agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } =
  carritoSlice.actions;
