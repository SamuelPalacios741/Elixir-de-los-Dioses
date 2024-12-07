import React from "react";
import { VinoCards } from "./CardsVinos.jsx";

const Vinoname = [
  {
    id: 15,
    nombre_vino: "Unico",
    imagen:
      "https://api.lalicorera.com/storage/productos/licores/84071872-chateau-ste-michelle-merlot.webp?t=1727655337000://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    lo_compraste: false,
    precio: "45$",
  },

  {
    id: 16,
    nombre_vino: "Rioja",
    imagen:
      "https://heredadaduna.com/wp-content/uploads/2017/02/vinos_de_la_rioja.jpg",
    lo_compraste: false,
    precio: "55$",
  },

  {
    id: 17,
    nombre_vino: "Château Margaux Premier Grand Cru",
    imagen:
      "https://resize.bidforwine.co.uk/resized/images/w590/lots/0/256836.jpg",
    lo_compraste: false,
    precio: "25$",
  },
  {
    id: 18,
    nombre_vino: "Louis Jadot Pouilly-Fuissé",
    imagen:
      "https://static.wixstatic.com/media/46fa11_f8cc090d696046da84b28f71fc662230~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/46fa11_f8cc090d696046da84b28f71fc662230~mv2.jpg",
    lo_compraste: false,
    precio: "45$",
  },
  {
    id: 19,
    nombre_vino: "Moët Impérial Brut",
    imagen:
      "https://www.obrienswine.ie/cdn/shop/files/sparkling-moet-chandon-brut-imperial-nv-51018730635598.webp?v=1688638926&width=500",
    lo_compraste: false,
    precio: "65$",
  },
  {
    id: 20,
    nombre_vino: "Romanée-Conti",
    imagen:
      "https://wainscottmain.com/cdn/shop/products/image_4a9f6ef6-ee24-4d8e-91c8-34ed95d81124.jpg?v=1654212929",
    lo_compraste: false,
    precio: "15$",
  },
  {
    id: 21,
    nombre_vino: "Tignanello",
    imagen:
      "https://www.foodandwine.com/thmb/f5lx3b-_5wBpPlgxlAwGdWqPrCY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tignanello-tasting-FT-BLOG1019-c7a3a86c0f354dadb85ed91e05fd53ff.jpg",
    lo_compraste: false,
    precio: "20$",
  },
];

export function Vino() {
  return (
    <section className="cards">
      {Vinoname.map(({ id, nombre_vino, imagen, lo_compraste, precio }) => (
        <VinoCards
          key={id}
          nombre_vino={nombre_vino}
          imagen={imagen}
          lo_compraste={lo_compraste}
          precio={precio}
        />
      ))}
    </section>
  );
}
