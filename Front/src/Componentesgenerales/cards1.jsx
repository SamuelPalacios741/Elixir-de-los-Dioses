import React from "react";
import "./cards.css";
import { Tarjetas } from "./Tarjetas.jsx";

const VinoName = [
  {
    id: 1,
    nombre: "Único",
    precio: 120000,
    imagen:
      "https://api.lalicorera.com/storage/productos/licores/84071872-chateau-ste-michelle-merlot.webp?t=1727655337000://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    lo_compraste: true,
  },

  {
    id: 2,
    nombre: "Old Fashioned",
    precio: 120000,
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    lo_compraste: false,
  },

  {
    id: 3,
    nombre: "Rioja",
    precio: 120000,
    imagen:
      "https://heredadaduna.com/wp-content/uploads/2017/02/vinos_de_la_rioja.jpg",
    lo_compraste: false,
  },

  {
    id: 4,
    nombre: "Negroni",
    precio: 120000,
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    lo_compraste: true,
  },
  {
    id: 5,
    nombre: "Château Margaux Premier Grand Cru",
    precio: 120000,
    imagen:
      "https://resize.bidforwine.co.uk/resized/images/w590/lots/0/256836.jpg",
    lo_compraste: false,
  },
  {
    id: 6,
    nombre: "Dry Martini",
    precio: 120000,
    imagen:
      "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
    lo_compraste: true,
  },
  {
    id: 7,
    nombre: "Louis Jadot Pouilly-Fuissé",
    precio: 120000,
    imagen:
      "https://static.wixstatic.com/media/46fa11_f8cc090d696046da84b28f71fc662230~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/46fa11_f8cc090d696046da84b28f71fc662230~mv2.jpg",
    lo_compraste: true,
  },
];

export function PrincipioCards() {
  return (
    <section className="cards-Normal">
      {VinoName.map((item, index) => (
        <Tarjetas key={index} producto={item} />
      ))}
    </section>
  );
}
