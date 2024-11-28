import React from "react";
import theme from "../../assets/images/tickera/themetick.png";

const Theme = () => {
  return (
    <div className="container">
      <div className="row ticket-theme">
        <div className="col-xl-12 col-md-12 col-12">
          <div className="block-text pt-12">
            <h2 className="sub-title">Sitio Web Profesional</h2>
            <p className="fs-24 mb-33">
              Creamos una web profesional con la estetica de tu empresa,
              marcando una fuerte identidad digital. Un sitio web bien diseñado
              y funcional transmite profesionalismo y confianza a tus clientes.
              Es tu carta de presentación en el mundo digital, mostrando que te
              tomas en serio tu negocio y la satisfacción de tus clientes.
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-md-12 col-12 display ">
        <img className="ticket-hero" src={theme} alt="Landing" />
      </div>
    </div>
  );
};

export default Theme;
