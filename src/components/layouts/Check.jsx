import React from "react";
import mobile from "../../assets/images/tickera/mobile-apps.png";

const Check = () => {
  return (
    <div className="container">
      <div className="row ticket-check">
        <div className="col-xl-7 col-md-12 col-12">
          <div className="block-text pt-12">
            <h2 className="sub-title">REGISTRE FÁCILMENTE A LOS ASISTENTES</h2>
            <p className="fs-24 mb-33">
              La página viene junto con Checkinera, un sistema que le permite
              verificar los boletos de manera rápida, fácil e incluso sin
              conexión. Checkinera está disponible como aplicación para Android
              y dispositivos iOS. También está disponible como una aplicación
              web para que pueda convertir cualquier navegador web en un sistema
              de registro completo, independientemente de la plataforma o el
              navegador preferido.
            </p>
          </div>
        </div>
        <div className="col-xl-5 col-md-12 col-12">
          <img src={mobile} alt="Landing" />
        </div>
      </div>
    </div>
  );
};

export default Check;
