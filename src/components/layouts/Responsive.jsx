import React , { useState } from 'react';
import item from '../../assets/fake-data/item';

const Responsive = () => {

    const [data] = useState(
        {
            subtitle: 'Responsive',
            title: 'NOS ENCARGAMOS DE TODO',
            desc1: 'Accesible de todos los dispositivos',
            desc2: 'Celulares, tablets, notebooks, pc',
        }
    )

  return (
    <section className="tf-section section-about" id='about'>
        <div className="container">
            <div className="row reverse">
                <div className="col-xl-7 col-md-12">
                    <div className="group-image">
                        <div className="left">
                            <div className="item bg-1 big"><img src={item.item27} alt="Monteno" /></div>
                        </div>
                        <div className="right">
                            <div className="item bg-2 small"><img src={item.item28} alt="Monteno" /></div>
                            <div className="item bg-3"><img src={item.item29} alt="Monteno" /></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-md-12">
                    <div className="block-text pt-12">
                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">{data.subtitle}</h5>
                        <h3 className="title mb-58" data-aos="fade-up" data-aos-duration="1000">{data.title}</h3>
                        <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration="1000">{data.desc1}</p>                       
                        <ul data-aos="fade-up" data-aos-duration="1000">
                            <li><i className="fa fa-check"></i><p className="fs-18">PC</p></li>
                            <li><i className="fa fa-check"></i><p className="fs-18">Notebook</p></li>
                            <li><i className="fa fa-check"></i><p className="fs-18">Celulares</p></li>
                            <li><i className="fa fa-check"></i><p className="fs-18">Tablets</p></li>                       
                        </ul>                  
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Responsive;