import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import img from "../assets/images/items/group-ntf.png";
import About from "../components/layouts/About";
import ButtonWhatsapp from "../components/button/ButtonWhatsapp";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="about">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sobre Nosotros - Escale Webs</title>
        <link rel="canonical" href="https://escalewebs.online/about" />
      </Helmet>
      <Header />
      <section className="tf-section page-title">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-12">
              <div className="block-text pt-12">
                <h2 className="sub-title mb-20">Sobre Nosotros</h2>
                <p className="fs-22 mb-33">
                  Somos un equipo profesional de analistas de datos,
                  programadores y diseñadores gráficos, con sólida experiencia
                  en el mundo digital, con la calidad como objetivo tanto en
                  nuestros productos como en el servicio al cliente en cada uno
                  de nuestros proyectos.
                </p>
                <p className="fs-22 mb-33">
                  Creemos en el poder transformador de la tecnología y el
                  diseño. Somos apasionados, creativos y expertos en marketing
                  digital, nos esforzamos por superar las expectativas en cada
                  proyecto que emprendemos.
                </p>
                <p className="fs-22 mb-33">
                  Desde nuestra fundación en 2019, nos hemos dedicado a ayudar a
                  más de 130 empresas a alcanzar sus objetivos en línea de
                  manera efectiva.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-12 column-right">
              <img className="about-img" src={img} alt="nosotros" />
            </div>
          </div>
        </div>
      </section>
      <About />
      <ButtonWhatsapp />
      <Footer />
    </div>
  );
};

export default AboutUs;
