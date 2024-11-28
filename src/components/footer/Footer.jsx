import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../assets/fake-data/logo";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer__body">
              <Link to="/">
                <img
                  className="logoEscale"
                  src={logo}
                  alt="ESCALE"
                  data-aos="slide-right"
                  data-aos-duration="3200"
                />
              </Link>

              <p className="desc fs-18" data-aos="fade-in">
                Porque sabemos que tener presencia en internet no solo es
                importante, es necesario. Te ayudamos a posicionarte de manera
                profesional para que puedas escalar tu negocio y llevarlo al
                siguiente nivel. Queremos ser parte de tu crecimiento.
              </p>
              <ul className="social">
                <li data-aos="slide-right" data-aos-duration="1200">
                  <a
                    href="https://wa.link/r60yqc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li data-aos="slide-right" data-aos-duration="1200">
                  <a
                    href="https://www.instagram.com/escalewebs/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_bottom">
              <p className="fs-16">
                Copyright © 2024 ESCALE. Diseñado por ESCALE
              </p>
              <ul>
                <li>
                  <Link to="#">Terminos & Condiciones</Link>
                </li>
                <li>
                  <Link to="#">Política de Privacidad</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
    </>
  );
};

export default Footer;
