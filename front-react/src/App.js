import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import { Principal } from "./components/Principal";
import { Login } from "./components/Login";
import { RegistroRestaurante } from "./components/GestionRestaurante/RegistroRestaurante";
import { GestionRestaurante } from "./components/GestionRestaurante/GestionRestaurante";
import { ServicioMesa } from "./components/GestionRestaurante/ServicioMesa";
import { Restaurantes } from "./components/GestionRestaurante/Restaurantes";
import "./App.css";

function App() {
  let usuario = JSON.parse(sessionStorage.getItem("usuarioActivo"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RegistroRestaurante" element={<RegistroRestaurante />} />
        <Route path="/GestionRestaurante" element={<GestionRestaurante />} />
        <Route path="/ServicioMesas" element={<ServicioMesa />} />
        <Route path="/Restaurantes" element={<Restaurantes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
