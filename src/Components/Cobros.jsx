import React, { useEffect, useState } from "react";

import { getAxios } from "../Utils/getAxios";

export default function Cobros() {
  const [cobros, setCobros] = useState([]);
  const client = getAxios();

  useEffect(() => {
    async function fetchCobros() {
      try {
        let response = await client.get("Cobros");
        setCobros(response.data);
      } catch (error) {
        console.log("Error fetching cobros");
      }
    }

    fetchCobros();
  }, []);

  return (
    <div>
      <div className="cobros__table-wrapper">
        <table className="table">
          <thead className="table-head">
            <tr>
              <td>&nbsp;id</td>
              <td>&nbsp;nombre</td>
              <td>&nbsp;usuario</td>
              <td>&nbsp;cobrador</td>
              <td>&nbsp;creditos</td>
              <td>&nbsp;total</td>
            </tr>
          </thead>
          <tbody className="table-body">
            {cobros.map((cobro) => {
              return (
                <tr key={cobro.id}>
                  <td>&nbsp;{cobro.id}</td>
                  <td>&nbsp;{cobro.name}</td>
                  <td>&nbsp;{cobro.userId}</td>
                  <td>&nbsp;{cobro.debtCollectorId}</td>
                  <td>&nbsp;{cobro.loans}</td>
                  <td>&nbsp;{cobro.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
