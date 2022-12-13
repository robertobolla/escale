import { React , useState } from 'react';
import { Link } from 'react-router-dom'

import item from '../../assets/fake-data/item';

const About = () => {

    const [data] = useState(
        {
            subtitle: 'Nuestra misión',
            title: 'Que tu negocio crezca',
            desc1: 'Parece algo obvio, pero mucha gente no lo tiene claro aún, no tener presencia en internet, es no existir como negocio en el mundo moderno.',
            desc2: 'Queremos darte todas las herramientas, para que crezcas junto a nosotros. Las redes sociales son necesarias en el contexto actual y el siguiente paso es una tienda online.',
        }
    )

    return (
        <section className="tf-section section-about">
            <div className="container">
                <div className="row reverse">
                    <div className="col-xl-7 col-md-12">
                        <div className="group-image">
                            <div className="left">
                                <div className="item bg-1"><img src={item.item8} alt="tienda Online" /></div>
                            </div>
                            <div className="right">
                                <div className="item bg-2"><img src={item.item9} alt="compra Online" /></div>
                                <div className="item bg-3"><img src={item.item10} alt="compra Movil" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-12">
                        <div className="block-text pt-12">
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">{data.subtitle}</h5>
                            <h3 className="title mb-58" data-aos="fade-up" data-aos-duration="1000">{data.title}</h3>
                            <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration="1000">{data.desc1}</p>
                            <p className="fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration="1000">{data.desc2}</p>
                            <Link to="/contact" className="btn-action style-2"  data-aos="fade-up" data-aos-duration="1200">Contactanos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;