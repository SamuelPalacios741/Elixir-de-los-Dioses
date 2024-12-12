import React from "react";
import { Tarjetas } from "./Tarjetas.jsx";

const Vinoname = [
  {
    id: 8,
    nombre: "Unico",
    precio: 120000,
    imagen:
      "https://api.lalicorera.com/storage/productos/licores/84071872-chateau-ste-michelle-merlot.webp?t=1727655337000://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    lo_compraste: true,
  },

  {
    id: 9,
    nombre: "Rioja",
    precio: 120000,
    imagen:
      "https://heredadaduna.com/wp-content/uploads/2017/02/vinos_de_la_rioja.jpg",
    lo_compraste: false,
  },

  {
    id: 10,
    nombre: "Château Margaux Premier Grand Cru",
    precio: 120000,
    imagen:
      "https://resize.bidforwine.co.uk/resized/images/w590/lots/0/256836.jpg",
    lo_compraste: false,
  },
  {
    id: 11,
    nombre: "Louis Jadot Pouilly-Fuissé",
    precio: 120000,
    imagen:
      "https://static.wixstatic.com/media/46fa11_f8cc090d696046da84b28f71fc662230~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/46fa11_f8cc090d696046da84b28f71fc662230~mv2.jpg",
    lo_compraste: true,
  },
  {
    id: 12,
    nombre: "Moët Impérial Brut",
    precio: 120000,
    imagen:
      "https://www.obrienswine.ie/cdn/shop/files/sparkling-moet-chandon-brut-imperial-nv-51018730635598.webp?v=1688638926&width=500",
    lo_compraste: false,
  },
  {
    id: 13,
    nombre: "Romanée-Conti",
    precio: 120000,
    imagen:
      "https://wainscottmain.com/cdn/shop/products/image_4a9f6ef6-ee24-4d8e-91c8-34ed95d81124.jpg?v=1654212929",
    lo_compraste: true,
  },
  {
    id: 14,
    nombre: "Tignanello",
    precio: 120000,
    imagen:
      "https://www.foodandwine.com/thmb/f5lx3b-_5wBpPlgxlAwGdWqPrCY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tignanello-tasting-FT-BLOG1019-c7a3a86c0f354dadb85ed91e05fd53ff.jpg",
    lo_compraste: true,
  },
];

export function Vino() {
  return (
    <section className="cards-Normal">
      {Vinoname.map((item, index) => (
        <Tarjetas key={index} producto={item} />
      ))}
    </section>
  );
}
