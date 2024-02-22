import React from 'react';
import './button.scss';
import wsp from '../../assets/images/whatsapp/wsp.png'


const ButtonWhatsapp = () => {
    return (
          <a href="https://wa.link/r60yqc"  target="_blank" rel="noopener noreferrer" >        
             <div className="button-whatsapp" src={wsp} alt="iconoWhatsapp" >
                  <p className="chateame">Chateanos</p>
             </div>
             
          </a>
    );
  }
  
  export default ButtonWhatsapp;