import React from "react";
import { CoctelesCards } from "./CardsCocteles";

const Cocteles = [
  {
    id: 8,
    nombre_coctel: "Mojito",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    lo_compraste: false,
    precio: "15$",
  },

  {
    id: 9,
    nombre_coctel: "Old Fashioned",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    lo_compraste: false,
    precio: "20$",
  },

  {
    id: 10,
    nombre_coctel: "Long Island Tea",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg",
    lo_compraste: false,
    precio: "22$",
  },
  {
    id: 11,
    nombre_coctel: "Negroni",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    lo_compraste: false,
    precio: "15$",
  },
  {
    id: 12,
    nombre_coctel: "Whiskey Sour",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
    lo_compraste: false,
    precio: "9$",
  },
  {
    id: 13,
    nombre_coctel: "Dry Martini",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
    lo_compraste: false,
    precio: "35$",
  },
  {
    id: 14,
    nombre_coctel: "Daiquiri",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
    lo_compraste: false,
    precio: "10$",
  },
];

export function Coctel() {
  return (
    <section className="cards">
      {Cocteles.map(({ id, nombre_coctel, imagen, lo_compraste, precio }) => (
        <CoctelesCards
          key={id}
          nombre_coctel={nombre_coctel}
          imagen={imagen}
          lo_compraste={lo_compraste}
          precio={precio}
        />
      ))}
    </section>
  );
}
