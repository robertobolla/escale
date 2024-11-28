import React from "react";
import seating from "../../assets/images/tickera/seating2.png";

const Seating = () => {
  return (
    <div className="container">
      <div className="row ticket-seating">
        <div className="col-xl-6 col-md-12 col-12">
          <img src={seating} alt="Landing" />
        </div>
        <div className="col-xl-6 col-md-12 col-12">
          <div className="block-text pt-12">
            <h2 className="sub-title">DÉJELOS ELEGIR SUS ASIENTOS</h2>
            <p className="fs-24 mb-33">
              Cree impresionantes planos de planta de su lugar para que a sus
              asistentes les resulte más fácil elegir el mejor asiento para su
              espectáculo. Crea grupos de asientos, zonas de pie, mesas redondas
              o cuadradas, puntos de interés... lo que necesites, como quieras.
              Simplemente elija, arrastre y suelte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seating;
