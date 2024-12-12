import { combineReducers } from "@reduxjs/toolkit";
import sliceProductos from "../redux/Reducers/sliceProductos";
import carritoSlice from "../redux/Reducers/carritoSlice.jsx";

export const rootReducer = combineReducers({
  productos: sliceProductos,
  carrito: carritoSlice,
});
