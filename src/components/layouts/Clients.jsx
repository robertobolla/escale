import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper";

const Clients = (props) => {
  const data = props.data;

  return (
    <section className="tf-section clients" id="clients">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text up center">
              <h5
                className="sub-title mb-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Ultimos trabajos
              </h5>
              <h3
                className="title mb-28"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Algunos de Nuestros <br /> Clientes
              </h3>
            </div>
          </div>
        </div>
        <div className="row mt-53">
          <div className="col-md-12">
            <Swiper
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
              }}
              scrollbar={{ draggable: true }}
            >
              {data.slice(0, 11).map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="clients-box">
                    <div className="img-clients">
                      <img src={data.img} alt="escale" />
                    </div>
                    <div className="clients-info">
                      <a
                        href={data.web}
                        target="_blank"
                        rel="noreferrer"
                        className="h5"
                      >
                        {data.name}
                      </a>
                      <p className="fs-16">{data.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
