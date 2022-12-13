import React from 'react';
import dataFaq from '../assets/fake-data/data-faq';
import dataServices from '../assets/fake-data/data-services';
import dataClients from '../assets/fake-data/data-clients';
import Header from '../components/header/Header'
import Responsive from '../components/layouts/Responsive';
import Footer from '../components/footer/Footer'
import FAQ from '../components/layouts/FAQ';
import Services from '../components/layouts/Services';
import Clients from '../components/layouts/Clients';
import Slider from '../components/slider/Slider';
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';



const Home = () => {
  return (
    <div className='home-3'>
        <Header />
        <Slider />
        <Services data={dataServices} />
        <Responsive />           
        <Clients data={dataClients} />           
        <FAQ data={dataFaq} />
        <ButtonWhatsapp/>
        <Footer />
    </div>
  );
}

export default Home;