import React, { Component } from "react";

const CardsCarouselPrincipal = (props) => {
  return (
    <div className="card card-carousel text-center" style={{ background: "transparent" }}>
      <div className="card-head card-headC  ">
        
         
            <img
              className="imagesPrincipal center-block"
              style={{  marginTop: "0.5rem", zIndex: 0 }}
              src={props.image}
            ></img>
         
          
       
      </div>
      <div className="card-body card-carousel-p ">
        <div className="row">
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-12">
            <div className="titulo-carousel " >
              <p>{props.titulo}</p>
            </div>
            <div className="descripcion-carousel text-left" >
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
      <h6></h6>
    </div>
  );
};

export default CardsCarouselPrincipal;
