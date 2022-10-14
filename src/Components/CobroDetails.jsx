import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

function CobroDetails(props) {
  const { client } = props;
  const { id } = useParams();
  const [cobro, setCobro] = useState({ user: {}, debtCollector: {} });
  const [creditos, setCreditos] = useState([]);

  useEffect(() => {
    async function fetchCobro() {
      try {
        const response = await client.get(`Cobros/${id}`);
        const data = response.data;
        setCobro(data);
      } catch (error) {
        console.log("Error fetching cobro with ID: " + id);
      }
    }

    async function fetchCreditos() {
      try {
        const response = await client.get(`Cobros/${id}/Loans`);
        const creditos = response.data.data;
        setCreditos(creditos);
      } catch (error) {
        console.log("Error fetching Loans in Cobro with ID: " + id);
      }
    }

    fetchCobro();
    fetchCreditos();
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
              <td>&nbsp;saldo</td>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr key={cobro.id}>
              <td>&nbsp;{cobro.id}</td>
              <td>&nbsp;{cobro.name}</td>
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
          </tbody>
        </table>
      </div>

      <div className="cobros__table-wrapper">
        <table className="table">
          <thead className="table-head">
            <tr>
              <td>&nbsp;id</td>
              <td>&nbsp;creacion</td>
              <td>&nbsp;cliente</td>
              <td>&nbsp;posicion ruta</td>
              <td>&nbsp;valor</td>
              <td>&nbsp;interes</td>
              <td>&nbsp;total credito</td>
              <td>&nbsp;total pago</td>
              <td>&nbsp;saldo</td>
            </tr>
          </thead>
          <tbody className="table-body">
            {creditos.map((credito) => {
              return (
                <tr key={credito.id}>
                  <td>&nbsp;{credito.id}</td>
                  <td>&nbsp;{credito.createdAt}</td>
                  <td>&nbsp;{credito.customerId}</td>
                  <td>&nbsp;{`${credito.routePosition}`}</td>
                  <td>&nbsp;{credito.value}</td>
                  <td>&nbsp;{`${credito.loanInterest}`}</td>
                  <td>&nbsp;{credito.total}</td>
                  <td>&nbsp;{credito.totalPaid}</td>
                  <td>&nbsp;{credito.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="table-footer">
          <h4>table footer</h4>
        </div>
      </div>
    </div>
  );
}

CobroDetails.propTypes = {
  client: PropTypes.func,
};

export default CobroDetails;
