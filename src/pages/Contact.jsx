import React from 'react';
import img from '../assets/images/items/group-ntf-04.png'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';

const Contact = () => {
    return (
        <div className='page-contact'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Contacto</h2>
                                <p className="fs-24 mb-33" >Comunicate por cualquiera de nuestros medios de <br/>contacto para contratar nuestros servicios o resolver <br/> cualquier duda. Te responderemos a la brevedad.</p>
                            </div>
                            <img className="s2" src={img} alt="escale" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-section contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>escale</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Envía un mensaje</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Nos comunicaremos contigo<br /> a la brevedad</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-left">
                                <ul>
                                    <li data-aos="fade-up">
                                        <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                                        <div className="info">
                                            <h5>Dirección</h5>
                                            <p className="fs-18">Santiago 572, San Miguel de Tucumán</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="icon"><i className="fas fa-phone-alt"></i></div>
                                        <div className="info">
                                            <h5>Celular (whatsapp)</h5>
                                            <p className="fs-18">3816480083</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="icon"><i className="fas fa-envelope"></i></div>
                                        <div className="info">
                                            <h5>Email</h5>
                                            <p className="fs-18">info@escalewebs.online</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="contact__form" action="https://formsubmit.co/robertobolla9@gmail.com" method="POST">

                                <div className="form-group">
                                    <input className="form-control" id="nombre" name="nombre"  type="text" placeholder="Tu nombre" required />
                                    <input className="form-control mr-0"  id="email" name="email" type="email" placeholder="Tu email" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="celular" name="celular" type="text" placeholder="Tu celular" required />
                                    <select className="form-control mr-0" id="motivo" name="motivo" >                                     
                                        <option>Consulta General</option>
                                        <option>Landing Page</option>
                                        <option>Web Total</option>
                                        <option>Ecommerce</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="mensaje" name="mensaje" rows="3" placeholder="Tu mensaje aquí"></textarea>
                                </div>
                                <button type="submit" className="btn-action style-2"><span>Enviar</span></button>
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </section>

            <section className="map">
                <div className="container">
                    <div className="col-12">
                        <p data-aos="fade-up"><iframe title='map' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Santiago%20del%20Estero%20572,%20San%20miguel%20de%20Tucum%C3%A1n+(escal-E)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="600" height="450"  allowFullScreen="" loading="lazy"></iframe></p>
                    </div>
                </div>
            </section>
            <ButtonWhatsapp />          
            <Footer />
        </div>
    );
}

export default Contact;