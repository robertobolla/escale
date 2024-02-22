import React from "react";
import { Link } from "react-router-dom";

const Services = (props) => {
  const data = props.data;

  return (
    <section className="tf-section montono" id="portfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h5
                className="sub-title mb-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Elegí Tu Plan
              </h5>
              <h3
                className="title mb-28"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Nuestros Servicios
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-52">
          {data.slice(0, 3).map((data, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <div
                className="image-box"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="card">
                  <h3 className="card-title">{data.title}</h3>
                  <div className="card-caracteristica">
                    {data.caracteristica1}
                    <br></br>
                    <div className="separador"></div>
                    {data.caracteristica2}
                    <br></br>
                    <div className="separador"></div>
                    {data.caracteristica3}
                    <br></br>
                    <div className="separador"></div>
                    {data.caracteristica4}
                    <br></br>
                    <div className="separador"></div>
                    {data.caracteristica5}
                    <br></br>
                    <div className="separador"></div>
                    {data.caracteristica6}
                    <br></br>
                    <div className="separador"></div>
                    {data.caracteristica7}
                    <br></br>
                    {data.caracteristica8}
                    <br></br>
                  </div>
                </div>
                <Link to={data.url} className="image-box__button h66">
                  {data.button}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
