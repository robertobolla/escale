import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import dataRoadMap from "../assets/fake-data/data-roadmap";
import webTotalCel from "../assets/images/pages/webTotalCel.png";
import Action from "../components/layouts/Action";
import RoadMap from "../components/layouts/RoadMap";
import ButtonWhatsapp from "../components/button/ButtonWhatsapp";
import webTotalPC from "../assets/images/pages/webTotalPC.png";
import mundo from "../assets/images/pages/mundo.png";
import satelites from "../assets/images/pages/satelites.png";
import { Helmet } from "react-helmet";

const WebTotal = () => {
  return (
    <div className="service">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Web Total - Escale Webs</title>
        <link rel="canonical" href="https://escalewebs.online/about" />
      </Helmet>
      <Header />
      <section className="tf-section service-subtitle">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-12">
              <div className="page-title__body rm">
                <div className="block-text pt-12">
                  <h2 className="sub-title mb-20">Web Total</h2>
                  <p className="fs-24 mb-33">
                    Una web completa, con multiples páginas, con diseño
                    atractivo y profesional. Ideal para webs con bastante
                    información donde una landing no es suficinte.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-12 column-right">
              <img src={webTotalPC} alt="Landing" />
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section visions">
        <div className="container">
          <div className="row reverse">
            <div className="col-xl-6 col-md-12">
              <div
                className="group-image"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img src={webTotalCel} alt="webPC" />
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="block-text pt-12">
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Objetivo
                </h5>
                <h3
                  className="title mb-37"
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
                  <span>Organización de contenido:</span> Con varias páginas,
                  puedes organizar tu contenido de manera estructurada y
                  fácilmente accesible para los visitantes. Cada página puede
                  estar dedicada a un tema específico, lo que facilita la
                  navegación y la búsqueda de información relevante.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span>Mayor capacidad de información: </span> Con más páginas,
                  tienes más espacio para proporcionar información detallada
                  sobre tu empresa, productos, servicios, políticas,
                  testimonios, y más. Esto permite una comunicación más completa
                  y detallada con tus clientes potenciales.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span>Mejora la credibilidad: </span>Un sitio web con varias
                  páginas transmite una imagen de profesionalismo y
                  credibilidad. Muestra que tienes una presencia estable y bien
                  establecida en línea, lo que puede generar confianza en tus
                  visitantes y clientes potenciales.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span>Mejora la experiencia del usuario:</span> Al dividir tu
                  contenido en varias páginas, puedes evitar la congestión y el
                  desorden en una sola página, lo que mejora la experiencia del
                  usuario y facilita la búsqueda de información para tus
                  visitantes.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  En resumen, tener un sitio web con varias páginas te permite
                  organizar tu contenido de manera efectiva, mejorar la
                  experiencia del usuario, optimizar tu presencia en línea y
                  aumentar las oportunidades de generar leads y convertir
                  visitantes en clientes.
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
                  Web Total
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
                    <p className="fs-18">
                      Hasta 5 páginas (secciones ilimitadas)
                    </p>
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
                    <p className="fs-18">Cambios ilimitados</p>
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

export default WebTotal;
