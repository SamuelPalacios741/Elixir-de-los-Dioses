import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { PrincipioCards } from "./Componentesgenerales/cards1.jsx";
import { FooterCards } from "./Componentesprincipales/footer.jsx";
import "./Componentesgenerales/cards.css";
import { Coctel } from "./Componentesgenerales/CardsCocteles1.jsx";
import PrincipioHeader from "./Componentesprincipales/header.jsx";
import { Navegar } from "./Componentesprincipales/navegando.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <PrincipioHeader />
    <Navegar />
    <FooterCards />
  </>
);
