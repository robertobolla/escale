import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import img from '../assets/images/items/group-ntf.png'
import About from '../components/layouts/About';
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';


const AboutUs = () => {
    return (
        <div className='about'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body ab">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Sobre Nosotros</h2>
                                <p className="fs-24 mb-33" >Somos un equipo profesional de analistas <br/> de datos, programadores y diseñadores<br/> gráficos, con sólida experiencia en el mundo<br/> digital, con la calidad como objetivo tanto<br/> en nuestros productos como en el servicio<br/> al cliente en cada uno de nuestros proyectos. </p>
                            </div>
                            <img src={img} alt="nosotros" />
                        </div>
                    </div>
                </div>
            </section>
            <About />        
            <ButtonWhatsapp/>                     
            <Footer />
        </div>
    );
}

export default AboutUs;