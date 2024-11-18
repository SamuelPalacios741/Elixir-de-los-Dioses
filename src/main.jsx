import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { PrincipioCards } from "./cards1.jsx";
import { FooterCards } from "./footer.jsx";
import "./cards.css";
import { Coctel } from "./CardsCocteles1.jsx";
import PrincipioHeader from "./header.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <PrincipioHeader />
    <PrincipioCards />
    <Coctel />

    <FooterCards />
  </>
);
