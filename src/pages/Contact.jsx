import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ButtonWhatsapp from "../components/button/ButtonWhatsapp";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="page-contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contacto - Escale Webs</title>
        <link rel="canonical" href="https://escalewebs.online/contact" />
      </Helmet>
      <Header />
      <section className="tf-section page-title2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-12">
              <div className="page-title__body rm">
                <div className="block-text pt-12">
                  <h2 className="sub-title mb-20">Contacto</h2>
                  <p className="fs-24 mb-33">
                    Comunicate por cualquiera de nuestros medios de <br />
                    contacto para contratar nuestros servicios o resolver <br />{" "}
                    cualquier duda. Te responderemos a la brevedad.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-12 column-right ">
              <div className="s3 column-top"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Envía un mensaje
                </h5>
                <h3
                  className="title mb-28"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Nos comunicaremos contigo
                  <br /> a la brevedad
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-left">
                <ul>
                  <li data-aos="fade-up">
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="info">
                      <h5>Celular (whatsapp)</h5>
                      <p className="fs-18">+54 (381) 6480083</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info">
                      <h5>Email</h5>
                      <p className="fs-18">info@escalewebs.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <form
                className="contact__form"
                action="https://formsubmit.co/info@escalewebs.com"
                method="POST"
              >
                <div className="form-group">
                  <input
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                  <input
                    className="form-control mr-0"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Tu email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="celular"
                    name="celular"
                    type="text"
                    placeholder="Tu celular"
                    required
                  />
                  <select
                    className="form-control mr-0"
                    id="motivo"
                    name="motivo"
                  >
                    <option>Consulta General</option>
                    <option>Landing Page</option>
                    <option>Web Total</option>
                    <option>Ecommerce</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                    rows="3"
                    placeholder="Tu mensaje aquí"
                  ></textarea>
                </div>
                <button type="submit" className="btn-action style-2">
                  <span>Enviar</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ButtonWhatsapp />
      <Footer />
    </div>
  );
};

export default Contact;
