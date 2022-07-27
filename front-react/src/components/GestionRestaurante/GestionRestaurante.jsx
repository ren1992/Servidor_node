import React from "react";
import {Navbar} from "../Navbar/Navbar";
import FondoRestaurante from "../../assets/img/fondoRestaurant.jpg";
import { Sidebar } from "../ui/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Funcionalidades } from "./Funcionalidades";


export const GestionRestaurante = () => {
  const {servicioMesa } = useSelector((state) => state);
  console.log(servicioMesa)
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <img src={FondoRestaurante} className="home-fondo" />
      <div className="container-fluid fondo-control-panel">
        <div className="row">
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-10">
            <Funcionalidades /> 
          </div>
        </div>
      </div>
    </>
  );
};
