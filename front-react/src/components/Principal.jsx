import React from "react";
import { Navbar } from "./Navbar/Navbar";
import FondoRestaurante from "../assets/img/fondoRestaurant.jpg";
import btnComienza from "../assets/img/btn-comienza.png";
import fondoGestion from "../assets/img/fondoGestion.png";
import Carousel from "react-elastic-carousel";
import { imgPrincipal } from "../helpers/helpers";
import CardsCarouselPrincipal from "./Cards/CardsCarouselPrincipal";
import { useNavigate } from "react-router-dom";

export const Principal = () => {
  const navigate = useNavigate();
  const breakpoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  const handleLogin = () => {
    navigate("/Login");
  };
  return (
    <>
      <div className="principal">
        <Navbar />
        <img src={FondoRestaurante} className="home-fondo" />
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center minh-100 text-center">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card card-p">
                <div className="card-head card-principal">
                  <div className="titulo-principal">
                    <h3 className="">
                      ¡GESTIONA TU RESTAURANTE DE LA MEJOR MANERA!
                    </h3>
                  </div>
                </div>
                <div className="card-body card-cuerpo">
                  <div className="texto-principal">
                    <p>
                      Con nuestros servicios tu restaurante optimizara
                      diferentes servicios al cliente y lograrad mayor
                      competitivad y productividad en tu negocio.
                    </p>
                    <img
                      src={btnComienza}
                      className="btn-comienza"
                      onClick={handleLogin}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="subtitulo-principal ">
                <h3 className="">SERVICIOS</h3>
              </div>
              <div className="carousel-principal">
                <Carousel
                  style={{ background: "transparent", border: 0 }}
                  breakPoints={breakpoint}
                  className=" text-center"
                >
                  {imgPrincipal.map((imagePrincipal) => (
                    <>
                      <div key={imagePrincipal.id}>
                        <CardsCarouselPrincipal
                          id={imagePrincipal.id}
                          image={imagePrincipal.image}
                          titulo={imagePrincipal.title}
                          description={imagePrincipal.description}
                        />
                      </div>
                    </>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
