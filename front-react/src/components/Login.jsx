import React from "react";
import {Navbar} from "./Navbar/Navbar";
import FondoRestaurante from "../assets/img/fondoRestaurant.jpg";
import login from "../assets/img/directivo.png";
import { TiUserOutline } from "react-icons/ti";
import { RiLockPasswordLine } from "react-icons/ri";
import btnRegistro from "../assets/img/btn-registro.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {gestionAñadirNick} from "../actions/events"
export const Login = () => {
   const dispatch = useDispatch();
    const navigate = useNavigate();
    const registrarUsuario=()=>{
      dispatch(gestionAñadirNick(nickUsuario))
      navigate("/RegistroRestaurante")
    }

    const handleGestionRestaurante=()=>{
      nickUsuario!="" && contrasenaUsuario!="" ? 
      registrarUsuario()
      :
      Swal.fire(
        "Error",
        "Por favor ingrese el nick y contraseña",
        "error"
      );
        
    }
    const [values, handleInnputChange] = useForm({
      nickUsuario: "",
      contrasenaUsuario: "",
    });
    const { nickUsuario, contrasenaUsuario } = values;
  return (
    
    <>
      <Navbar />
      <img src={FondoRestaurante} className="home-fondo" />
      <div className="container-fluid  text-center">
        <div className="card card-login">
          <div className="card-head">
            <h1 style={{ marginTop: "1.5rem" }}>Registro de usuario</h1>
            <img src={login} className="login" />
            <div className="row" style={{ marginTop: "2rem" }}>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                <TiUserOutline size={40} />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <input
                  style={{ width: "17rem", height: "3rem" }}
                  name="nickUsuario"
                  value={nickUsuario}
                  onChange={handleInnputChange}
                  type="text"
                  className="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  placeholder="Ingresa tu nick"
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: "2rem" }}>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                <RiLockPasswordLine size={40} />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <input
                  style={{ width: "17rem", height: "3rem" }}
                  name="contrasenaUsuario"
                  value={contrasenaUsuario}
                  onChange={handleInnputChange}
                  type="password"
                  className="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <img
              src={btnRegistro}
              className="btn-comienza"
              style={{ marginTop: "3rem" }}
              onClick={handleGestionRestaurante}
            />
          </div>
        </div>
      </div>
    </>
  );
};
