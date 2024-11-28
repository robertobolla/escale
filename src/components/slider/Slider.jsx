import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Slider = () => {
  const { t } = useTranslation();

  return (
    <section className="tf-section hero-slider">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-12 col-12">
            <div className="block-text up pt-24">
              <h6 className="sub-title mb-6" data-aos="fade-up">
                {t("sliderSubTitle")}
              </h6>
              <h2 className="title mb-26" data-aos="fade-up">
                {t("sliderTitle")}
                <br></br>
                <span></span>
              </h2>
              <p className="desc mb-43" data-aos="fade-up">
                {t("sliderDesc")}
              </p>
              <a
                href="https://calendly.com/escalewebs/consultoria-servicios-webs"
                className="btn-action style-2"
                data-aos="fade-up"
                data-aos-duration="1200"
                target="_blank"
                rel="noreferrer"
              >
                Reserva una reunión
              </a>
            </div>
          </div>
          <div className="col-xl-7 col-md-12 col-12">
            <div className="envoltura">
              <div className="cubo">
                <div className="cara">
                  <p className="cara1">
                    Tu <span>Web</span>
                    <br></br>genera valor
                  </p>
                  <br></br>
                  <p>
                    <i className="fa-solid fa-globe"></i>
                  </p>
                </div>
                <div className="cara">
                  <p>
                    Crea<br></br>
                    <span>Confianza</span>
                  </p>
                  <br></br>
                  <p>
                    <i className="fa-solid fa-award marginExtra"></i>
                  </p>
                </div>
                <div className="cara">
                  <p>
                    <span>Automatiza</span>
                    <br></br>Procesos
                  </p>
                  <br></br>
                  <p>
                    <i className="fa-solid fa-gears marginExtra2"></i>
                  </p>
                </div>
                <div className="cara">
                  <p>
                    Crea<br></br>
                    <span>Confianza</span>
                  </p>
                  <br></br>
                  <p>
                    <i className="fa-solid fa-chart-line"></i>
                  </p>
                </div>
                <div className="cara">
                  <p>
                    Posiciona<br></br>Tu<span> Marca</span>
                  </p>
                  <br></br>
                  <p>
                    <i className="fa-solid fa-rocket marginExtra"></i>
                  </p>
                </div>
                <div className="cara">
                  <p className="cara1">
                    Vende <span>Online</span>
                    <br></br>24<span></span>/7
                  </p>
                  <p>
                    <i className="fa-solid fa-chart-line"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
