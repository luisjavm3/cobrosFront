import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CobroList(props) {
  const { client } = props;
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
                    <Link to={`/cobros/${cobro.id}?page=1&size=30`}>
                      {cobro.name}
                    </Link>
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

CobroList.propTypes = {
  client: PropTypes.func,
};

export default CobroList;
