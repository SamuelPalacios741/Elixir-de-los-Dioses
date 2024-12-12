import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
  _id: Number,
  imagen: String,
  nombre: String,
  descripcion: String,
  precio: Number,
});

export const ProductsModel = mongoose.model("products", productsSchema);
