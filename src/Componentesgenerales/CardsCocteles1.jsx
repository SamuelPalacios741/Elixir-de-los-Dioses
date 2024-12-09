import React from "react";
import { Tarjetas } from "./Tarjetas";

const Cocteles = [
  {
    id: 8,
    nombre: "Mojito",
    precio: 120000,
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    lo_compraste: true,
  },

  {
    id: 9,
    nombre: "Old Fashioned",
    precio: 120000,
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    lo_compraste: false,
  },

  {
    id: 10,
    nombre: "Long Island Tea",
    precio: 120000,
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg",
    lo_compraste: false,
  },
  {
    id: 11,
    nombre: "Negroni",
    precio: 120000,
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    lo_compraste: true,
  },
  {
    id: 12,
    nombre: "Whiskey Sour",
    precio: 120000,
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
    lo_compraste: true,
  },
  {
    id: 13,
    nombre: "Dry Martini",
    precio: 120000,
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
    lo_compraste: true,
  },
  {
    id: 14,
    nombre: "Daiquiri",
    precio: 120000,
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
    lo_compraste: true,
  },
];

export function Coctel() {
  return (
    <section className="cards-Normal">
      {Cocteles.map((item, index) => (
        <Tarjetas key={index} producto={item} />
      ))}
    </section>
  );
}
