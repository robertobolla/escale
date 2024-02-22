import React from 'react';
import { Link } from 'react-router-dom';


import './button.scss';

const ButtonOne = () => {
  return (
        <Link to='./escale.pdf' className="btn-action" target="_blank" rel="noopener noreferrer" download="Resumen.pdf">        
            Resumen     
        </Link>
  );
}

export default ButtonOne;