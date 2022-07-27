import fondoMesas from "../../assets/img/fondoMesas.jpeg";
import {Navbar} from "../Navbar/Navbar";
import { Sidebar } from "../ui/Sidebar";
import FondoRestaurante from "../../assets/img/fondoRestaurant.jpg";
import { IoIosAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { SiGooglemybusiness } from "react-icons/si";

export const Restaurantes =()=>{
    const { nombreRestaurante } = useSelector((state) => state);
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
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4">
                                        <SiGooglemybusiness size={25}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-12  col-md-12 col-lg-6">
                                    <h5 className="titulo-card-gestion">{nombreRestaurante}</h5>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4">

                                    </div>
                                </div>
                            </div>
                     
                          <p>Mesas disponibles:40</p>
                        </div>
                      </div>
                    </div>
    
                    <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4">
                      <div className="card card-gestion-funcionalidades">
                        <div className="card-head card-head-gestion text-center ">
                          <IoIosAddCircle size={90} style={{marginTop:'40%'}}/>
                        </div>
                        <div className="card-body card-informacion">
                          <h5 className="titulo-card-gestion text-center">
                            Agregar un nuevo Restaurante
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}