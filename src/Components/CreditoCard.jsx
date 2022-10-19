import React, { useState } from "react";

const abonos = [
  { id: 1, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 2, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 3, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 4, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 5, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 6, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 7, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 8, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 9, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 10, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 11, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 12, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 13, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 14, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 15, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 16, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 17, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 18, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 19, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 20, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 21, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 22, fecha: "2020-12-12", valor: 12, saldo: 12 },
  { id: 23, fecha: "2020-12-12", valor: 12, saldo: 12 },
];

const isAdmin = true;

export default function CreditoCard() {
  const [cifra, setCifra] = useState("");

  const onKeyDownHandler = (e) => {
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Backspace",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
    ];

    if (!allowedKeys.includes(e.key)) e.preventDefault();
    if (!cifra && e.key === "0") e.preventDefault();
    setCifra(e.target.value);
  };

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
        <div className="lista-header">
          <div className="fecha same-width">fecha</div>
          <div className="valor same-width">valor</div>
          <div className="saldo same-width">saldo</div>
        </div>

        <ul className="lista-abonos">
          {abonos.map((abono) => {
            return (
              <li key={abono.id}>
                <div className="fecha same-width">{abono.fecha}</div>
                <div className="valor same-width">{abono.valor}</div>
                <div className="saldo same-width">{abono.saldo}</div>
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
              <input type="text" onKeyDown={onKeyDownHandler} />
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
