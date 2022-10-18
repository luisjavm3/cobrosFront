import React from "react";

export default function CreditoCard() {
  return (
    <div className="credito-card">
      <div className="header">
        <div className="header__posicion">
          <span>124</span>
        </div>
        <div className="contenedor">
          <div className="header__cliente">cliente</div>
          <div className="header__fecha">fecha</div>
          <div className="header__numeros">
            <div className="credito">
              <span>credito</span>
              <span>100</span>
            </div>
            <div className="interes">
              <span>interes</span>
              <span>20%</span>
            </div>
            <div className="total">
              <span>total</span>
              <span>120</span>
            </div>
            <div className="saldo">
              <span>saldo</span>
              <span>65</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
