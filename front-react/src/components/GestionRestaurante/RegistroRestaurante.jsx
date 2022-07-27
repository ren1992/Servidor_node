import {Navbar} from "../Navbar/Navbar";
import FondoRestaurante from "../../assets/img/fondoRestaurant.jpg";
import FondoRegistro from "../../assets/img/registroRes.png";
import btnRegistroRes from "../../assets/img/btn-siguiente.png";
import { BiRestaurant } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {gestionAñadirNombre} from "../../actions/events"


export const RegistroRestaurante = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegistro =()=>{
    dispatch(gestionAñadirNombre(nombreRestaurante))
    navigate("/GestionRestaurante")
  }

  const handleGestionRestaurante = () => {
    nombreRestaurante != "" && direccionRestaurante != ""
      ? 
      handleRegistro()
      : Swal.fire(
          "Error",
          "Por favor ingrese el nombre y dirección de su restaurante",
          "error"
        );
  };

  const [values, handleInnputChange] = useForm({
    nombreRestaurante: "",
    direccionRestaurante: "",
  });

  const { nombreRestaurante, direccionRestaurante } = values;

  
  return (
    <>
      <Navbar />
      <img src={FondoRestaurante} className="home-fondo" />
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center minh-100 ">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="card card-gestion">
              <div className="card-head">
                <h5 className="titulo-gestion">GESTIONAR TU RESTAURANTE</h5>
              </div>
              <div className="card-boby">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8">
                  <h3 className="subtitulo-gestion">
                    Comencemos con el nombre y la dirección de tu restaurante
                  </h3>
                  <div className="row text-center input-restaurante">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                      <BiRestaurant size={40} />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                      <input
                        style={{ width: "17rem", height: "3rem" }}
                        name="nombreRestaurante"
                        value={nombreRestaurante}
                        onChange={handleInnputChange}
                        type="text"
                        className="form-control "
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        placeholder="Nombre de tu restaurante"
                      />
                    </div>
                  </div>

                  <div className="row text-center input-restaurante">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                      <MdLocationOn size={40} />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <input
                        style={{ width: "17rem", height: "3rem" }}
                        name="direccionRestaurante"
                        value={direccionRestaurante}
                        onChange={handleInnputChange}
                        type="text"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        placeholder="Dirección de su restaurante"
                      />
                      <img
                        src={btnRegistroRes}
                        className="btn-comienza"
                        style={{
                          marginTop: "1.5rem",
                          marginBottom: "1.5rem",
                          marginLeft: "2.5rem",
                        }}
                        onClick={handleGestionRestaurante}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img src={FondoRegistro} className="resgistro-restaurante" />
          </div>
        </div>
      </div>
    </>
  );
};
