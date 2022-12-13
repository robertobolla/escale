import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import dataRoadMap from '../assets/fake-data/data-roadmap';
import ecommercePC from '../assets/images/pages/ecommercePC.png'
import eccomerceCel from '../assets/images/pages/eccomerceCel.png'
import Action from '../components/layouts/Action';
import RoadMap from '../components/layouts/RoadMap';
import img from '../assets/images/items/group-ntf-03.png'
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';

const Ecommerce = () => {
    return (
        <div className='service'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">E-commerce</h2>
                                <p className="fs-24 mb-33" >Una tienda virtual completa para vender 24/7, con <br/>pasarela de pagos, muy fácil de gestionar. Ideal <br/> para negocios que venden por redes sociales y <br/> quieren llevar su negocio al siguiente nivel.</p>
                            </div>
                            <img className="s2" src={img} alt="ecommerce" />
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
                                <img src={ecommercePC} alt="eccomercePC" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Objetivo</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">Tu Negocio Siempre Abierto </h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">Una vidriera en internet, vendé a todo el mundo, productos físicos o virtuales, las 24 hs, todos los días. El <b>e-commerce</b> es un trabajador incansable a la hora de vender o mostrar tu cátalogo, aumentá tus ventas mientras mejoras tu perfil digital. </p>                        
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
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Ecommerce</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">El servicio incluye </h3>                              
                                <ul data-aos="fade-up" data-aos-duration="1000">
                                <li><i className="fa fa-check"></i><p className="fs-18">Tienda completa</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Diseño responsivo (se adapta a pc, tablet y celular)</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Diseño adapatado a la estética de tu empresa</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Mail con el nombre de tu empresa</p></li>                       
                                    <li><i className="fa fa-check"></i><p className="fs-18">Link a redes y a whatsapp</p></li>                                    
                                    <li><i className="fa fa-check"></i><p className="fs-18">Formulario de contacto</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Posicionamiento SEO en buscadores</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Cambios ilimitados</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Dominio .online o .shop gratuito por un año</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Pasarela de pago a tu cuenta bancaria</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Panel autoadministrable para subir, editar o eliminar productos</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Sistema autómatico que te avisa al email cuando hay actividad en la tienda (se hace una venta, hacen una consulta, etc.)</p></li> 
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <img src={eccomerceCel} alt="ecommerceMovil" />
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

export default Ecommerce;