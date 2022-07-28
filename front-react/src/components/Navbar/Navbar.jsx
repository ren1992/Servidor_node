import React, { useState } from "react";
import LogoVisual from "../../assets/img/logo.png";
import LogoOpen from "../../assets/img/logoOpen.png";
import fondo from "../../assets/img/openFondo.png";
import iconoUsuario from "../../assets/img/directivo.png";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { TiUserOutline } from "react-icons/ti";
import { RiLockPasswordLine } from "react-icons/ri";
import { GestionUsuario } from "../../actions/eventsUser";
import Swal from "sweetalert2";
import axios from "axios";

export const Navbar = () => {
  /**
   * Variables de la Storange
   */
  const { user } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const toggelDropdown = () => {
    setDropdown(!dropdown);
  };
  const [values, handleInnputChange] = useForm({
    nickUsuario: "",
    contrasenaUsuario: "",
  });
  const { nickUsuario, contrasenaUsuario } = values;

  /**
   * Metodos de navegación
   */

  const handlePrincipal = () => {
    navigate("/");
  };
  const handleGestion = () => {
    navigate("/GestionRestaurante");
  };

  /**
   * Metodo para validar rol de un usuario y direccionarlo a correspondinete navegación.
   * @param {*} usuario
   */
  const validarUsuario = (usuario) => {
    if (usuario.rol === "Gerente") {
      console.log("deberia estar aqui");
      handleGestion();
      dispatch(GestionUsuario(true));
    } else {
      Swal.fire("Error", "Usuario o contraseña incorrecta", "error");
    }
  };
  /**
   * Metodo para consumir la Api
   * @param {*} nickUsuario
   * @param {*} contrasenaUsuario
   */
  const consultarUsuario = async (nickUsuario, contrasenaUsuario) => 
  {
    await axios.get(
        "http://localhost:8000/usuario/login/"+
          nickUsuario +
          "/" +
          contrasenaUsuario
      )
      .then((resJson) => {
        let usuario = resJson.data[0];
        validarUsuario(usuario);
        sessionStorage.setItem("usuarioActivo", JSON.stringify(resJson.data));
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "Usuario o contraseña incorrectos", "error");
      });
  };
  /**
   * Metodo que se acciona cuando el usuario da clic en iniciar sesión.
   */
  const handleIniciarSesion = () => {
    if (nickUsuario.toString("") && contrasenaUsuario.toString("")) {
      consultarUsuario(nickUsuario, contrasenaUsuario);
    } else {
      Swal.fire("Error", "Por favor ingrese los campos correctamente", "error");
    }
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={LogoOpen}
            className="logoOpen"
            onClick={handlePrincipal}
            style={{ marginLeft: "-20rem" }}
          />
        </NavLink>
        <NavLink to="/">
          <img
            src={LogoVisual}
            className="logo"
            onClick={handlePrincipal}
            style={{ marginLeft: "-15rem" }}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink className="item" to="/about" activeStyle>
            Servicios
          </NavLink>
          <NavLink to="/services" activeStyle>
            Soporte
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Acerca de nosotros
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Contactos
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {user ? (
          <Dropdown isOpen={dropdown} toggle={toggelDropdown}>
            <DropdownToggle
              style={{
                background: "rgb(48, 47, 47)",
                border: 0,
                width: "15rem",
              }}
              className="dropdown_user"
            >
              <div className="row">
                <div
                  className="col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center"
                  style={{ marginLeft: "1rem", marginTop: "1rem" }}
                >
                  Perfil
                </div>

                <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                  <img className="usuario" src={iconoUsuario} alt="user" />
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu className="container-login">
              <div className="container-fluid">
                <div className="row" style={{ marginTop: "1rem" }}>
                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                    <TiUserOutline size={30} style={{ color: "white" }} />
                  </div>
                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-10">
                    <input
                      name="nickUsuario"
                      value={nickUsuario}
                      onChange={handleInnputChange}
                      type="email"
                      className="form-control"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      placeholder="Nick"
                    />
                  </div>
                </div>

                <div className="row" style={{ marginTop: "1rem" }}>
                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                    <RiLockPasswordLine size={30} style={{ color: "white" }} />
                  </div>
                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-10">
                    <input
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

                <NavBtn>
                  <NavBtnLink
                    to="#"
                    onClick={handleIniciarSesion}
                    style={{ marginTop: "1rem", background: "black" }}
                  >
                    Cerrar sesión
                  </NavBtnLink>
                </NavBtn>
              </div>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Dropdown isOpen={dropdown} toggle={toggelDropdown}>
            <DropdownToggle
              style={{
                background: "rgb(48, 47, 47)",
                border: 0,
                width: "15rem",
              }}
              className="dropdown_user"
            >
              <div className="row">
                <div
                  className="col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center"
                  style={{ marginLeft: "1rem" }}
                >
                  Inciar Sesión
                </div>

                <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                  <img className="usuario" src={iconoUsuario} alt="user" />
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu className="container-login">
              <div className="container-fluid">
                <div className="row" style={{ marginTop: "1rem" }}>
                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                    <TiUserOutline size={30} style={{ color: "white" }} />
                  </div>
                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-10">
                    <input
                      name="nickUsuario"
                      value={nickUsuario}
                      onChange={handleInnputChange}
                      type="email"
                      className="form-control"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      placeholder="Nick"
                    />
                  </div>
                </div>

                <div className="row" style={{ marginTop: "1rem" }}>
                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                    <RiLockPasswordLine size={30} style={{ color: "white" }} />
                  </div>
                  <div className="col-xs-12 col-sm-12  col-md-12 col-lg-10">
                    <input
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

                <NavBtn>
                  <NavBtnLink
                    to="#"
                    onClick={handleIniciarSesion}
                    style={{ marginTop: "1rem", background: "black" }}
                  >
                    Iniciar sesión
                  </NavBtnLink>
                </NavBtn>
              </div>
            </DropdownMenu>
          </Dropdown>
        )}
      </Nav>
    </>
  );
};
