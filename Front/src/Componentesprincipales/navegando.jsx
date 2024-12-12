import React from "react";
import "./estilos.css";
import "./navegar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Coctel } from "../Componentesgenerales/CardsCocteles1.jsx";
import { PrincipioCards } from "../Componentesgenerales/cards1.jsx";
import { Vino } from "../Componentesgenerales/CardsVinos1.jsx";
import Carrito from "../Componentesgenerales/Carrito.jsx";
import { Crud } from "./crud.jsx";

export function Navegar() {
  return (
    <Router>
      <nav>
        <Link className="rayita" to="/">
          INICIO
        </Link>
        <Link className="rayita" to="/coctel">
          COCTELES
        </Link>
        <Link className="rayita" to="/vino">
          VINO
        </Link>
        <Link className="rayita" to="/marcas">
          MARCAS
        </Link>
        <Link className="rayita" to="/nosotros">
          NOSOTROS
        </Link>
        <Link className="rayita" to="/Carrito">
          CARRITO
        </Link>
        <Link className="rayita" to="/Crud">
          CRUD
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<PrincipioCards />} />
        <Route path="/coctel" element={<Coctel />} />
        <Route path="/vino" element={<Vino />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Crud" element={<Crud />} />
      </Routes>
    </Router>
  );
}
