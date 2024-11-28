import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet";
import entrada from "../assets/images/tickera/mail-entrada.png";
import Features from "../components/layouts/Features";
import Seating from "../components/layouts/Seating";
import Check from "../components/layouts/Check";
import Theme from "../components/layouts/Theme";
import CreditCard from "../components/layouts/CreditCard";
import React from "react";

const Ticket = () => {
  return (
    <div className="ticket">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ticket - Escale Webs</title>
        <link rel="canonical" href="https://escalewebs.online/about" />
      </Helmet>
      <Header />
      <section className="tf-section ticket">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-md-12 col-12">
              <div className="block-text pt-12">
                <h2 className="sub-title">ESCALE TICKET</h2>
                <p className="fs-24 mb-33">
                  Una web completa, con generación instantánea de códigos QR,
                  integración con sistemas de pago seguros, y estadísticas
                  detalladas de ventas son solo algunas de las funcionalidades
                  que hacen que nuestra aplicación sea imprescindible para
                  cualquier productora de eventos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-md-12 col-12 display ">
            <img className="ticket-hero" src={entrada} alt="Landing" />
          </div>
          <div className="row no-comissions">
            <div className="col-xl-12 col-md-12 col-12">
              <div className="block-text pt-12">
                <h2 className="sub-title">
                  TU DINERO ES TUYO, NO ACEPTAMOS PARTE
                </h2>
                <p className="fs-24">
                  Si desea vender entradas para eventos y entregárselas a sus
                  compradores digitalmente, nuestro servicio Escale Ticket es
                  exactamente lo que necesita. Creamos su web pensada para ser
                  una solución de venta de entradas, donde puede controlar las
                  ganancias sin necesidad enviar parte a un tercero, es
                  totalmente libre de comisiones, para que pueda maximizar su
                  rentabilidad.
                </p>
              </div>
            </div>
          </div>
          <div className="row no-comissions">
            <div className="col-xl-12 col-md-12 col-12">
              <div className="block-text ">
                <h2 className="sub-title">PRUEBA UNA DEMO</h2>
                <p className="fs-24 mb-33">
                  Haz click en DEMO y haz una simulación de compra, utilizando
                  una tarjeta de prueba que te daremos a continuación e
                  instantáneamente recibirás la entrada en tu correo
                  electrónico. Así podrás tener una idea de la experiencia de
                  usuario de tus clientes.
                </p>
              </div>
              <div className="demo-button">
                <a
                  href="https://nowticket.online"
                  className="btn-action2 style-2"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  DEMO
                </a>
              </div>
              <div className="demo-container">
                <div className="col-xl-12 col-md-12  display demo-card">
                  <p className="col-xl-12 col-md-12 col-12 demo-numbers">
                    5031 7557 3453 0604
                  </p>
                  <p className="demo-vto ">Vto: 11/25</p>
                  <p className="demo-cvc ">CVC:123</p>
                  <p className="demo-name">Pago aprobado</p>
                </div>
              </div>
            </div>
            <p className="fs-24 center">Nombre de prueba: Pago aprobado</p>
            <p className="fs-24 center">DNI de prueba: 12345678</p>
          </div>
        </div>
      </section>
      <Check />
      <Seating />
      <CreditCard />
      <Features />
      <Theme />
      <Footer />
    </div>
  );
};

export default Ticket;
