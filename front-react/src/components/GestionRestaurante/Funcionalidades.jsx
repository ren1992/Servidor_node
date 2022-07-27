import fondoMesas from "../../assets/img/fondoMesas.jpeg";
import fondoMenu from "../../assets/img/fondoMenu.jpg";
import nominaFondo from "../../assets/img/nominaFondo.jpg";
import fondoServicioMesa from "../../assets/img/fondoServicioMesa.jpg";
import fondoDomicilios from "../../assets/img/fondoDomicilios.jpg";
import fondoServiRapi from "../../assets/img/fondoServiRapi.jfif";
import fondoVentas from "../../assets/img/fondoVentas.jpg";
import fondoInventario from "../../assets/img/fondoInventario.png";
import controlPanel from "../../assets/img/controlPanel.png";
import { useDispatch, useSelector } from "react-redux";
import {OpenUiServicioMesa} from "../../actions/events"
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export const Funcionalidades = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nick } = useSelector((state) => state);
  const [servicioMesas, setServicioMesas] = useState(false);

  const handleServicioMesa =()=>{
    navigate("/ServicioMesas")
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-12">
            <h2 className="titulo-bienvenida">
              Bienvenido Gerente <span>{nick}</span>
            </h2>
          </div>
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-1">
           <img src={controlPanel} className="controlPanel"/>
          </div>
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-6">
            <h4 className="subtitulo-bienvenida">
              Desde el panel de control podras administrar tu restaurante con
              las diferentes funcionalidades a su servicio.
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-1"></div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
            <div className="card card-gestion-funcionalidades" onClick={handleServicioMesa}>
              <div className="card-head card-head-gestion text-center">
                <img src={fondoMesas} className="fondoMesas" style={{}} />
              </div>
              <div className="card-body card-informacion">
                <h5 className="titulo-card-gestion">Mesas</h5>
                <p>Crea y gestiona las mesas de tu negocio.</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
            <div className="card card-gestion-funcionalidades">
              <div className="card-head card-head-gestion text-center">
                <img src={fondoMenu} className="fondoMenu" style={{}} />
              </div>
              <div className="card-body card-informacion">
                <h5 className="titulo-card-gestion">Menú</h5>
                <p>Crea y gestiona los platos y bebidas de tu negocio.</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
            <div className="card card-gestion-funcionalidades">
              <div className="card-head card-head-gestion text-center">
                <img src={nominaFondo} className="fondoNomina" style={{}} />
              </div>
              <div className="card-body card-informacion">
                <h5 className="titulo-card-gestion">Nomina</h5>
                <p>Gestiona el personal del negocio.</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
            <div className="card card-gestion-funcionalidades">
              <div className="card-head card-head-gestion text-center">
                <img
                  src={fondoServicioMesa}
                  className="fondoServicioMesa"
                  style={{}}
                />
              </div>
              <div className="card-body card-informacion">
                <h5 className="titulo-card-gestion">Servicio en mesa</h5>
                <p>Gestiona el personal del negocio.</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2"></div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-1"></div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
            <div className="card card-gestion-funcionalidades">
              <div className="card-head card-head-gestion text-center">
                <img
                  src={fondoDomicilios}
                  className="fondoServicioMesa"
                  style={{}}
                />
              </div>
              <div className="card-body card-informacion">
                <h5 className="titulo-card-gestion">Domicilios</h5>
                <p>Gestiona el personal del negocio.</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
            <div className="card card-gestion-funcionalidades">
              <div className="card-head card-head-gestion text-center">
                <img
                  src={fondoServiRapi}
                  className="fondoServicioMesa"
                  style={{}}
                />
              </div>
              <div className="card-body card-informacion">
                <h5 className="titulo-card-gestion">Rapi service</h5>
                <p>Gestiona el personal del negocio.</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
            <div className="card card-gestion-funcionalidades">
              <div className="card-head card-head-gestion text-center">
                <img src={fondoVentas} className="fondoVentas" style={{}} />
              </div>
              <div className="card-body card-informacion">
                <h5 className="titulo-card-gestion">Ventas</h5>
                <p>Gestiona el personal del negocio.</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
            <div className="card card-gestion-funcionalidades">
              <div className="card-head card-head-gestion text-center">
                <img
                  src={fondoInventario}
                  className="fondoInventario"
                  style={{}}
                />
              </div>
              <div className="card-body card-informacion">
                <h5 className="titulo-card-gestion">Inventario</h5>
                <p>Gestiona el personal del negocio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
