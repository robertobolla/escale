import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import dataRoadMap from '../assets/fake-data/data-roadmap';
import landingPC from '../assets/images/pages/landingPC.png'
import landingCel from '../assets/images/pages/landingCel.png'
import Action from '../components/layouts/Action';
import RoadMap from '../components/layouts/RoadMap';
import img from '../assets/images/items/group-ntf-03.png'
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';

const Landing = () => {
    return (
        <div className='service'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Landing Page</h2>
                                <p className="fs-24 mb-33" >Toda tu información en una página,<br /> atractiva y profesional. Ideal para webs <br /> informativas.  </p>
                            </div>
                            <img className="s2" src={img} alt="Landing" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section visions">
                <div className="container">
                    <div className="row reverse">
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <img src={landingPC} alt="Landing" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Objetivo</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">Tu Imágen Digital</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">Es la forma en que conocerán tu negocio o servicio, tu ventana a infinitos clientes. Por eso, nada debe estar librado al azar, con diseños pensados según las necesidades del cliente, dinámicos y con posicionamiento SEO. <b>Landing Page</b> es el servicio ideal para quién necesite una web simple, de una página, de alta calidad.</p>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section services">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Landing</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">El servicio incluye </h3>
                                <ul data-aos="fade-up" data-aos-duration="1000">
                                    <li><i className="fa fa-check"></i><p className="fs-18">Hasta 6 secciones</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Diseño responsivo (se adapta a pc, tablet y celular)</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Diseño adapatado a la estética de tu empresa</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Mail con el nombre de tu empresa</p></li>                       
                                    <li><i className="fa fa-check"></i><p className="fs-18">Link a redes</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Link a whatsapp</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Formulario de contacto</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Posicionamiento SEO en buscadores</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Cambios ilimitados</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Dominio .online o .shop gratuito por un año</p></li>                            
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <img src={landingCel} alt="Monteno" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RoadMap data={dataRoadMap} />
            <Action />
            <ButtonWhatsapp/>
            <Footer />
        </div>
    );
}

export default Landing;