import React from "react";
import { CoctelesCards } from "./CardsCocteles";

const Cocteles = [
  {
    id: 1,
    nombre_coctel: "Mojito",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    lo_compraste: true,
  },

  {
    id: 2,
    nombre_coctel: "Old Fashioned",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    lo_compraste: false,
  },

  {
    id: 3,
    nombre_coctel: "Long Island Tea",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg",
    lo_compraste: false,
  },
  {
    id: 4,
    nombre_coctel: "Negroni",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    lo_compraste: true,
  },
  {
    id: 5,
    nombre_coctel: "Whiskey Sour",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
    lo_compraste: true,
  },
  {
    id: 6,
    nombre_coctel: "Dry Martini",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
    lo_compraste: true,
  },
  {
    id: 7,
    nombre_coctel: "Daiquiri",
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
    lo_compraste: true,
  },
];

export function Coctel() {
  return (
    <section className="cards">
      {Cocteles.map(({ id, nombre_coctel, imagen, lo_compraste }) => (
        <CoctelesCards
          key={id}
          nombre_coctel={nombre_coctel}
          imagen={imagen}
          lo_compraste={lo_compraste}
        />
      ))}
    </section>
  );
}
