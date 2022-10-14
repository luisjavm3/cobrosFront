import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { getAxios } from "../Utils/getAxios";

export default function Cobros() {
  const client = getAxios();
  const location = useLocation();
  console.log(location);
  const [cobros, setCobros] = useState([]);

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
                  <td>
                    &nbsp;
                    {cobro.id}
                  </td>
                  <td>
                    &nbsp;
                    <Link to={`/cobros/${cobro.id}`}>{cobro.name}</Link>
                  </td>
                  <td>
                    &nbsp;
                    {<Link>{`${cobro.user.name} ${cobro.user.lastName}`}</Link>}
                  </td>
                  <td>
                    &nbsp;
                    <Link>
                      {`${cobro.debtCollector.name} ${cobro.debtCollector.lastName}`}
                    </Link>
                  </td>
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
