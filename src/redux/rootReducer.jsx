import { combineReducers } from "@reduxjs/toolkit";
import carritoSlice from "./Reducers/carritoSlice";

export const rootReducer = combineReducers({
  carrito: carritoSlice,
});
