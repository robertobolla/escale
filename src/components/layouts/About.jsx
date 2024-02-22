import { React, useState } from "react";
import { Link } from "react-router-dom";

import item from "../../assets/fake-data/item";

const About = () => {
  const [data] = useState({
    subtitle: "Nuestra misión",
    title: "Que tu negocio crezca",
    desc1:
      "En ESCALE WEBS, nuestra misión es potenciar el crecimiento y el éxito de los negocios que confían en nosotros para su presencia en línea. Nos comprometemos a ofrecer soluciones digitales innovadoras y estratégicas que no solo mejoren la visibilidad y la reputación de nuestros clientes en internet, sino que también impulsen sus ventas, leads y conversiones.",
    desc2:
      "Nos esforzamos por ser el aliado de confianza que trabaja incansablemente para entender las necesidades únicas de cada negocio y proporcionar soluciones personalizadas que generen resultados tangibles y sostenibles. Estamos dedicados a ser el motor que impulsa el crecimiento y la prosperidad de nuestros clientes en el competitivo mundo digital.",
  });

  return (
    <section className="tf-section section-about">
      <div className="container">
        <div className="row reverse">
          <div className="col-xl-6 col-md-12">
            <div className="group-image">
              <div className="left">
                <div className="item cel-animation">
                  <img src={item.itemCel12} alt="tienda Online" />
                  <img
                    className="capture"
                    src={item.itemCapture}
                    alt="tienda Online"
                  />
                  <img
                    className="capture"
                    src={item.itemCapture}
                    alt="tienda Online"
                  />
                  <img
                    className="capture"
                    src={item.itemCapture}
                    alt="tienda Online"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="block-text pt-12">
              <h5
                className="sub-title mb-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.subtitle}
              </h5>
              <h3
                className="title mb-58"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.title}
              </h3>
              <p
                className="fs-22 mb-33"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc1}
              </p>
              <p
                className="fs-22  mb-41"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc2}
              </p>
              <Link
                to="/contact"
                className="btn-action style-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
