import React from "react";
import tuEntrada from "../../assets/images/tickera/tu-entrada.png";
import { Link } from "react-router-dom";

const TicketHome = () => {
  return (
    <div className="ticket">
      <section className="tf-section section-ticket">
        <div className="container">
          <div className="row">
            <h3 className="new-title">Nuevo Servicio</h3>
            <div className="col-xl-7 col-md-12 col-12">
              <div className=" ">
                <div className="block-text pt-12">
                  <h2 className="sub-title mb-20">ESCALE TICKET</h2>
                  <p className="fs-21 mb-33">
                    Si tenés una productora de eventos y vendés las entradas
                    físicas o utilizas apps de terceros para venderlas online
                    ESCALE TICKET es la solución para vos.
                  </p>
                  <p className="fs-21 mb-33">
                    Creamos una web que te permite vender entradas sin
                    intermediarios. Al comprar la entrada le llega al cliente un
                    email con un QR (entrada), mientras que el dinero de la
                    venta instantáneamente va directamente a tu cuenta bancaria,
                    donde no estas alquilando un servicio, sino que eres el
                    dueño de la web evitando pagar comisiones en cada venta.
                  </p>
                  <Link
                    to="/ticket"
                    className="btn-action style-2 btn-ticket"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    Ver más...
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-7 col-12 ticket-contenedor">
              <img className="ticket-img" src={tuEntrada} alt="Landing" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketHome;
