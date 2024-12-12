import { ProductsModel } from "../models/ProductsModel.js";

export const getProducts = async (req, res) =>
  res.send(await ProductsModel.find());

export const createProduct = async (req, res) => {
  try {
    const resultado = await ProductsModel.insertMany([req.body]);
    res.send(resultado);
  } catch (e) {
    console.log(e);
  }
};

export const editProduct = async (req, res) => {
  try {
    const { imagen, nombre, descripcion, precio } = req.body;
    const id = parseInt(req.params.id);
    const product = {
      _id: id,
      imagen: imagen,
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
    };

    const resultado = await ProductsModel.updateOne(
      { _id: id },
      { $set: product }
    );
    res.send(resultado);
  } catch (e) {
    console.log(e);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const resultado = await ProductsModel.deleteOne({ _id: id });
    res.send(resultado);
  } catch (e) {
    console.log(e);
  }
};
