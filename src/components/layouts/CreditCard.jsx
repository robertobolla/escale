import React from "react";
import creditCard from "../../assets/images/tickera/credit-card.png";

const CreditCard = () => {
  return (
    <div className="container">
      <div className="row ticket-pay">
        <div className="col-xl-7 col-md-12 col-12">
          <div className="block-text pt-12">
            <h2 className="sub-title">VENDE Y REGISTRA TODO</h2>
            <p className="fs-24 mb-33">
              Vende entradas online las 24 horas de forma segura y sin
              intermediarios, acepta pagos con tarjetas de débito y crédito. Lo
              mejor de todo es que, al hacer una venta, el dinero se transfiere
              automáticamente a tu cuenta bancaria sin comisiones. Te permite
              llevar el control de las ventas de una manera sencilla e
              intuitiva.
            </p>
          </div>
        </div>
        <div className="col-xl-5 col-md-12 col-12">
          <img src={creditCard} alt="Landing" />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
