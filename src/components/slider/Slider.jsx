import React , {useState } from 'react';
import { Link } from 'react-router-dom'


const Slider = () => {

    const [datatext] = useState({
        subtitle: 'Soluciones Digitales',
        title: 'TU NEGOCIO SIEMPRE CONECTADO',
        desc: 'Nunca fue tan fácil tener una tienda virtual'
    })

    return (
    
    <section className="tf-section hero-slider">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-md-12 col-12">
                    <div className="block-text pt-24" >
                        <h6 className="sub-title mb-6" data-aos="fade-up">{datatext.subtitle}</h6>
                        <h2 className="title mb-26" data-aos="fade-up">{datatext.title} </h2>
                        <p className="desc mb-43" data-aos="fade-up">{datatext.desc} </p>
                        <Link to="/contact" className="btn-action style-2" data-aos="fade-up" data-aos-duration="1200" >Contactanos</Link>
                    </div>
                </div>
                <div className="col-xl-7 col-md-12 col-12">
                    <div className="first-section" data-aos="zoom-in" data-aos-duration="2000">               
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}



export default Slider;