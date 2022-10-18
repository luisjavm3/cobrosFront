import React from "react";

const abonos = [
  { id: 1, valor: 12, saldo: 12 },
  { id: 2, valor: 12, saldo: 12 },
  { id: 3, valor: 12, saldo: 12 },
  { id: 4, valor: 12, saldo: 12 },
  { id: 5, valor: 12, saldo: 12 },
  { id: 6, valor: 12, saldo: 12 },
  { id: 7, valor: 12, saldo: 12 },
  { id: 8, valor: 12, saldo: 12 },
  { id: 9, valor: 12, saldo: 12 },
  { id: 10, valor: 12, saldo: 12 },
  { id: 11, valor: 12, saldo: 12 },
  { id: 12, valor: 12, saldo: 12 },
  { id: 13, valor: 12, saldo: 12 },
  { id: 14, valor: 12, saldo: 12 },
  { id: 15, valor: 12, saldo: 12 },
  { id: 16, valor: 12, saldo: 12 },
  { id: 17, valor: 12, saldo: 12 },
  { id: 18, valor: 12, saldo: 12 },
];

const isAdmin = true;

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
              <span className="texto">credito</span>
              <span className="cifra">100</span>
            </div>
            <div className="interes">
              <span className="texto">interes</span>
              <span className="cifra">20%</span>
            </div>
            <div className="total">
              <span className="texto">total</span>
              <span className="cifra">120</span>
            </div>
            <div className="saldo">
              <span className="texto">saldo</span>
              <span className="cifra">65</span>
            </div>
          </div>
        </div>
      </div>

      <div className="abonos">
        <ul className="lista-abonos">
          {abonos.map((abono) => {
            return (
              <li key={abono.id}>
                {abono.valor}&nbsp;{abono.saldo}{" "}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="panel-liquidacion">
        <div className="input-contenedor">
          <div className="saldo same-width">
            <span>saldo</span>
            <span className="cifra">100</span>
          </div>
          <div className="input-wrapper">
            <form>
              <input type="text" />
            </form>
          </div>
          <div className="nuevo-saldo same-width">
            <span>nuevo saldo</span>
            <span className="cifra">95</span>
          </div>
        </div>

        <div className="button-wrapper">
          <button>abonar</button>
        </div>

        {isAdmin ? (
          <div className="dos-opciones">
            <div className="button-wrapper">
              <button>nuevo credito</button>
            </div>
            <div className="button-wrapper">
              <button>perdonar</button>
            </div>
          </div>
        ) : (
          <div className="button-wrapper ">
            <button>nuevo credito</button>
          </div>
        )}
      </div>
    </div>
  );
}
