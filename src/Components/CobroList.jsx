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
  }, [client]);

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
                <tr key={cobro.id}>
                  <td>{cobro.id}</td>
                  <td>
                    <Link to={`/cobros/${cobro.id}?page=1&size=30`}>
                      {cobro.name}
                    </Link>
                  </td>
                  <td>
                    {<Link>{`${cobro.user.name} ${cobro.user.lastName}`}</Link>}
                  </td>
                  <td>
                    <Link>
                      {`${cobro.debtCollector.name} ${cobro.debtCollector.lastName}`}
                    </Link>
                  </td>
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

CobroList.propTypes = {
  client: PropTypes.func,
};

export default CobroList;
