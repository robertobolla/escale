import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import dataRoadMap from "../assets/fake-data/data-roadmap";
import ecommercePC from "../assets/images/pages/ecommercePC.png";
import eccomerceCel from "../assets/images/pages/eccomerceCel.png";
import Action from "../components/layouts/Action";
import RoadMap from "../components/layouts/RoadMap";
import ButtonWhatsapp from "../components/button/ButtonWhatsapp";
import mundo from "../assets/images/pages/mundo.png";
import satelites from "../assets/images/pages/satelites.png";
import { Helmet } from "react-helmet";

const Ecommerce = () => {
  return (
    <div className="service">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ecommerce - Escale Webs</title>
        <link rel="canonical" href="https://escalewebs.online/about" />
      </Helmet>
      <Header />
      <section className="tf-section service-subtitle">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-12">
              <div className="page-title__body rm">
                <div className="block-text pt-12">
                  <h2 className="sub-title mb-20">E-commerce</h2>
                  <p className="fs-24 mb-33">
                    Una tienda virtual completa para vender 24/7, con pasarela
                    de pagos, muy fácil de gestionar. Ideal para personas que
                    tienen un negocio fisico o venden por redes sociales y
                    quieren llevar su negocio al siguiente nivel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-12 column-right">
              <img src={ecommercePC} alt="Landing" />
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
                <img src={eccomerceCel} alt="eccomercePC" />
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
                  <span>Accesibilidad global:</span> Una tienda en línea te
                  permite llegar a clientes en cualquier parte del mundo, sin
                  importar su ubicación geográfica. Esto amplía
                  significativamente tu base de clientes potenciales y tus
                  oportunidades de venta.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span>Disponibilidad las 24 horas:</span> A diferencia de una
                  tienda física, un e-commerce está abierto las 24 horas del
                  día, los 7 días de la semana. Esto permite a los clientes
                  realizar compras en cualquier momento que les resulte
                  conveniente, lo que aumenta las ventas y la conveniencia para
                  ellos.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span>Reducción de costos operativos:</span> Un e-commerce
                  puede ser más económico de operar que una tienda física
                  tradicional. No tienes que preocuparte por los costos de
                  alquiler de local, mantenimiento, empleados de ventas, etc.
                  Esto puede conducir a mayores márgenes de beneficio.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span>Mayor comodidad para los clientes:</span> Los clientes
                  pueden explorar y comprar productos desde la comodidad de sus
                  hogares, evitando las molestias de desplazarse a una tienda
                  física. Esto les proporciona una experiencia de compra más
                  conveniente y satisfactoria.
                </p>
                <p
                  className="fs-16 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  En resumen, un e-commerce ofrece una serie de ventajas
                  significativas que pueden impulsar el crecimiento y la
                  rentabilidad de tu negocio, permitiéndote llegar a más
                  clientes, reducir costos operativos y mejorar la experiencia
                  de compra para tus clientes.
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
                  Ecommerce
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
                    <p className="fs-18">Tienda completa</p>
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
                    <p className="fs-18">Link a redes y a whatsapp</p>
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
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Pasarela de pago a tu cuenta bancaria
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Panel autoadministrable para subir, editar o eliminar
                      productos
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Sistema de estadísticas de ventas, pedidos y envíos para
                      poder controlar todas las métricas de tu negocio.
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Sistema autómatico que te avisa al email cuando hay
                      actividad en la tienda (se hace una venta, hacen una
                      consulta, etc.)
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

export default Ecommerce;
