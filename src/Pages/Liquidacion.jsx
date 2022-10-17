import React from "react";
import Ruta from "../Components/Ruta";
import { getAxios } from "../Utils/getAxios";

export default function Liquidacion() {
  const client = getAxios();

  return (
    <div className="liquidacion-viewport">
      <div className="liquidacion">
        <div className="liquidacion__ruta">
          <Ruta client={client} />
        </div>
        <div className="liquidacion__credito">credita</div>
      </div>
    </div>
  );
}
