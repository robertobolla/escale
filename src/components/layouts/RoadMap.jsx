import React from "react";

const RoadMap = (props) => {
  const data = props.data;

  return (
    <section className="tf-section road-map">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h5
                className="sub-title mb-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Hoja de Ruta
              </h5>
              <h3
                className="title mb-28"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                El Proceso de <br />
                Trabajo
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="road-map__content s1">
              {data.map((data, index) => (
                <div key={index} className={`box-time ${data.class}`}>
                  <span>
                    <i className="fa fa-check"></i>
                  </span>
                  <p className="fs-16 color-main mb-0">{data.time}</p>
                  <h5 className="title mb-20">{data.title}</h5>
                  <p className="fs-18">{data.desc} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
