import React from 'react';
import { Link } from 'react-router-dom'

const Services = (props) => {

    const data = props.data;

    return (
        <section className="tf-section montono" id='portfolio'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Servicios</span></h1>
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Elegí Tu Plan</h5>
                            <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Nuestros Servicios</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-52">
                    {
                        data.slice(0,3).map((data,index) => (
                            <div key={index} className="col-xl-4 col-md-6">
                                <div className="image-box" data-aos="fade-up" data-aos-duration="1000">
                                    <img src={data.img} alt="Servicios" />
                                    <div className="image-box__title">
                                        <Link to={data.url} className="h6">{data.title}</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }                    
                </div>
            </div>
        </section>
    );
}

export default Services;