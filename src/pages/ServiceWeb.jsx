import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import dataRoadMap from '../assets/fake-data/data-roadmap';
import webTotalPC from '../assets/images/pages/webTotalPC.png'
import webTotalCel from '../assets/images/pages/webTotalCel.png'
import Action from '../components/layouts/Action';
import RoadMap from '../components/layouts/RoadMap';
import img from '../assets/images/items/group-ntf-03.png'
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';

const WebTotal = () => {
    return (
        <div className='service'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Web Total</h2>
                                <p className="fs-24 mb-33" >Una web completa, con multiples páginas, <br/> con diseño atractivo y profesional. Ideal para<br/> webs con bastante información donde una <br/> landing   no es suficinte.  </p>
                            </div>
                            <img className="s2" src={img} alt="WebTotal" />
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
                                <img src={webTotalPC} alt="webPC" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Objetivo</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">Identidad Digital</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">Porque es importante destacar, <b>Web Total</b> es un servicio con diseños orientados a las necesidades del cliente, donde la cantidad de información no es un problema. Dinámica y con posicionamiento SEO, es la opción ideal para grandes emprendimientos o empresas que quieran marcar una fuerte presencia en internet.</p>                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section servicesvjvj">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Web Total</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">El servicio incluye</h3>
                                <ul data-aos="fade-up" data-aos-duration="1000">
                                <li><i className="fa fa-check"></i><p className="fs-18">Hasta 5 páginas (secciones ilimitadas)</p></li>
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
                                <img src={webTotalCel} alt="WebMovil" />
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

export default WebTotal;