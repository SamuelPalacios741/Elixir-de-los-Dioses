import React from "react";
import { VinoCard } from "./cards.jsx";
import "./cards.css";

const VinoName = [
  {
    id: 1,
    nombre_vino: "Mojito",
    imagen:
      "../src/img/fondo.jpg",
    lo_compraste: true,
  },

  {
    id: 2,
    nombre_vino: "Old Fashioned",
    imagen:
      "../src/img/fondo.jpg",
    lo_compraste: false,
  },

  {
    id: 3,
    nombre_vino: "Long Island Tea",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg",
    lo_compraste: false,
  },
  {
    id: 4,
    nombre_vino: "Negroni",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    lo_compraste: true,
  },
];

export function Vino() {
  return (
    <section className="cards">
      {VinoName.map(({ id, nombre_vino, imagen, lo_compraste }) => (
        <VinoCard
          key={id}
          nombre_vino={nombre_vino}
          imagen={imagen}
          lo_compraste={lo_compraste}
        />
      ))}
    </section>
  );
}
