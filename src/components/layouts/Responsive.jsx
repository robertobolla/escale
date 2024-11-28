import React, { useState } from "react";
import item from "../../assets/fake-data/item";

const Responsive = () => {
  const [data] = useState({
    subtitle: "Responsive",
    title: "NOS ENCARGAMOS DE TODO",
    desc1: "Accesible de todos los dispositivos",
    desc2: "Celulares, tablets, notebooks, pc",
  });

  return (
    <section className="tf-section section-responsive" id="responsive">
      <div className="container">
        <div className="row reverse">
          <div className="col-xl-7 col-md-12">
            <div className="group-image">
              <div className="group-left">
                <div className="item-image item-logo">
                  <img src={item.itemLogo} alt="Monteno" />
                </div>
                <div className="item-image item-pc big">
                  <img src={item.itemPC1} alt="Monteno" />
                </div>
                <div className="item-image item-note">
                  <img src={item.itemNote1} alt="Monteno" />
                </div>
                <div className="item-image item-cel small">
                  <img src={item.itemCel1} alt="Monteno" />
                </div>
                <div className="item-image item-tablet">
                  <img src={item.itemTablet1} alt="Monteno" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-md-12">
            <div className="block-text mt-61 pt-12">
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
                className="fs-21 mb-33"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc1}
              </p>
              <ul data-aos="fade-up" data-aos-duration="1000">
                <li>
                  <i className="fa fa-check"></i>
                  <p className="fs-18">PC</p>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <p className="fs-18">Notebook</p>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <p className="fs-18">Celular</p>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <p className="fs-18">Tablet</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsive;
