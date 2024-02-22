import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import dataRoadMap from "../assets/fake-data/data-roadmap";
import landingPC from "../assets/images/pages/landingPC.png";
import landingCel from "../assets/images/pages/landingCel.png";
import Action from "../components/layouts/Action";
import RoadMap from "../components/layouts/RoadMap";
import ButtonWhatsapp from "../components/button/ButtonWhatsapp";
import mundo from "../assets/images/pages/mundo.png";
import satelites from "../assets/images/pages/satelites.png";
import { Helmet } from "react-helmet";

const Landing = () => {
  return (
    <div className="service">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Landing Page - Escale Webs</title>
        <link rel="canonical" href="https://escalewebs.online/about" />
      </Helmet>
      <Header />
      <section className="tf-section service-subtitle">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-12">
              <div className="page-title__body rm">
                <div className="block-text pt-12">
                  <h2 className="sub-title mb-20">Landing Page</h2>
                  <p className="fs-24 mb-33">
                    Una landing page, o página de aterrizaje, es una página web
                    diseñada específicamente para convertir visitantes en leads
                    o clientes potenciales, generalmente a través de una llamada
                    a la acción (CTA) clara y enfocada. Toda tu información en
                    una página, atractiva y profesional. Ideal para webs
                    informativas o funnels de ventas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-12 column-right">
              <img src={landingPC} alt="Landing" />
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section visions">
        <div className="container">
          <div className="row reverse">
            <div className="col-xl-7 col-md-12">
              <div
                className="group-image"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img src={landingCel} alt="Monteno" />
              </div>
            </div>
            <div className="col-xl-5 col-md-12">
              <div className="block-text pt-12">
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Conectate al mundo
                </h5>
                <h3
                  className="title mb-26"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Características
                </h3>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span>Enfoque claro:</span> Se centra en un objetivo
                  específico, lo que permite una comunicación clara y directa
                  sobre una oferta, producto o servicio en particular.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span>Mejora las conversiones: </span>Al eliminar
                  distracciones y enfocarse en una oferta concreta, las landing
                  pages tienden a tener tasas de conversión más altas que las
                  páginas de inicio u otras páginas web.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span>Facilidad de navegación: </span>Al eliminar elementos de
                  navegación adicionales, como menús complejos, las landing
                  pages ofrecen una experiencia de usuario más simple y directa,
                  lo que puede reducir la posibilidad de que los visitantes se
                  distraigan o se desvíen de tu objetivo principal.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  En resumen, una landing page bien diseñada puede ser una
                  herramienta poderosa para aumentar las conversiones, mejorar
                  la relevancia de tus mensajes y optimizar tus esfuerzos de
                  marketing en línea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section services">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-12">
              <div className="block-text pt-12">
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Landing
                </h5>
                <h3
                  className="title mb-37"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  El servicio incluye
                </h3>
                <ul data-aos="fade-up" data-aos-duration="1000">
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">Hasta 6 secciones</p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Diseño responsivo (se adapta a pc, tablet y celular)
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Diseño adapatado a la estética de tu empresa
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">Mail con el nombre de tu empresa</p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">Link a redes</p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">Link a whatsapp</p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">Formulario de contacto</p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">Posicionamiento SEO en buscadores</p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Dominio .online o .shop gratuito por un año
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-md-12">
              <div className="group-image">
                <a
                  href="https://wa.link/r60yqc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-world"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Contactanos
                </a>
                <div className="image2">
                  <img src={satelites} alt="Landing" />
                </div>
                <div className="image1">
                  <img src={mundo} alt="Landing" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RoadMap data={dataRoadMap} />
      <Action />
      <ButtonWhatsapp />
      <Footer />
    </div>
  );
};

export default Landing;
