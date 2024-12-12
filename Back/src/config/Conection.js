import mongoose from "mongoose";

const getConection = () =>
  mongoose.connect("mongodb://127.0.0.1:27017/Elixir-de-los-Dioses");

export default getConection;
