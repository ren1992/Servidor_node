import fondoMesas from "../../assets/img/fondoMesas.jpeg";
import {Navbar} from "../Navbar/Navbar";
import { Sidebar } from "../ui/Sidebar";
import FondoRestaurante from "../../assets/img/fondoRestaurant.jpg";
import { IoIosAddCircle } from "react-icons/io";
import { ModalAgregarMesas } from "../Modales/ModalAgregarMesas";
import React,{useState} from "react";
export const ServicioMesa = () => {
  const [modalAgregarMesas, setModalAgregarMesas] = useState(false);
  const handleAgregarMesas =()=>{
    setModalAgregarMesas(!modalAgregarMesas);
  }
  return (
    <>
      <Navbar />
      <img src={FondoRestaurante} className="home-fondo" />
      <div className="container-fluid fondo-control-panel">
        <div className="row  ">
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-10 ">
            <div className="container-fluid">
              <div className="row justify-content-center align-items-center minh-100 text-center">
                <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4">
                  <div className="card card-gestion-funcionalidades">
                    <div className="card-head card-head-gestion text-center">
                      <img src={fondoMesas} className="fondoMesas" style={{}} />
                    </div>
                    <div className="card-body card-informacion">
                      <h5 className="titulo-card-gestion">Mesas</h5>
                      <p>Mesas disponibles:40</p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4">
                  <div className="card card-gestion-funcionalidades" onClick={handleAgregarMesas}>
                    <div className="card-head card-head-gestion text-center ">
                      <IoIosAddCircle size={90} style={{ marginTop: "40%" }} />
                    </div>
                    <div className="card-body card-informacion">
                      <h5 className="titulo-card-gestion text-center">
                        Agregar Mesas
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAgregarMesas
        modalAgregarMesas={modalAgregarMesas}
        setModalAgregarMesas={setModalAgregarMesas}
      />
    </>
  );
};
