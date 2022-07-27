import React, { useState } from "react";
import { SiGooglemybusiness } from "react-icons/si";
import { PanelVistaArbol } from "../GestionRestaurante/PanelVistaArbol";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [despliegueRestaurantes, setDespliegueRestaurantes] = useState(true);

  const handleChangeRestaurantes = () => {
    navigate("/Restaurantes");
  };
  return (
    <>
      <div className="sidebar">
        <div className="container-fluid">
          <div
            className="row restaurante-true"
           // onClick={handleChangeRestaurantes}
          >
            <div className="col-xs-12 col-sm-12  col-md-12 col-lg-1"></div>
            <div className="col-xs-12 col-sm-12  col-md-12 col-lg-3 row-restaurantes-sidebar">
              <SiGooglemybusiness size={40} />
            </div>

            <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4 row-restaurantes-sidebar">
              <h5 className="titulo-uno-sidebar">Restaurantes</h5>
              <PanelVistaArbol />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
