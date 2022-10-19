import React from "react";
import { useParams } from "react-router-dom";
import CreditoCard from "../Components/CreditoCard";
import Ruta from "../Components/Ruta";
import { getAxios } from "../Utils/getAxios";

export default function Liquidacion() {
  const client = getAxios();
  const { id } = useParams();

  return (
    <div className="liquidacion-viewport">
      <div className="liquidacion">
        <div className="liquidacion__ruta">
          <Ruta client={client} id={id} />
        </div>
        <div className="liquidacion__creditos">
          <div className="credito-actual">
            <CreditoCard />
          </div>

          <div className="container">
            <div className="nuevos-creditos">nuevos</div>
            <div className="creditos-pagos">pagos</div>
          </div>
        </div>
      </div>
    </div>
  );
}
