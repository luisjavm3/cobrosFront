import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getAxios } from "../Utils/getAxios";

export default function Cobros() {
  const [cobros, setCobros] = useState([]);
  const { accessToken } = useSelector((store) => store.auth);
  const client = getAxios(accessToken);

  useEffect(() => {
    async function fetchCobros() {
      let response = await client.get("Cobros");
      console.log(response.data);
      setCobros(response.data);
    }

    fetchCobros();
  }, []);

  return (
    <div>
      <div className="cobros__table-wrapper">
        <table className="table">
          <thead className="table-head">
            <tr>
              <td>id</td>
              <td>nombre</td>
              <td>usuario</td>
              <td>cobrador</td>
              <td>creditos</td>
              <td>total</td>
            </tr>
          </thead>
          <tbody className="table-body">
            {cobros.map((cobro) => {
              return (
                <tr>
                  <td>{cobro.id}</td>
                  <td>{cobro.name}</td>
                  <td>{cobro.userId}</td>
                  <td>{cobro.debtCollectorId}</td>
                  <td>{cobro.loans}</td>
                  <td>{cobro.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
