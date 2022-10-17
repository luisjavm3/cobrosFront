import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import TableFooter from "./TableFooter";

function CobroDetails(props) {
  const { client } = props;
  const { id } = useParams();
  const [cobro, setCobro] = useState({ user: {}, debtCollector: {} });
  const [creditos, setCreditos] = useState([]);
  const [pagination, setPagination] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  moment.locale("es");

  const page = searchParams.get("page");
  const size = searchParams.get("size");

  if (!page || !size) setSearchParams({ page: 1, size: 30 });

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
        const response = await client.get(
          `Cobros/${id}/Loans?PageNumber=${page}&PageSize=${size}`
        );
        const { data: creditos, ...rest } = response.data;
        setCreditos(creditos);
        setPagination(rest);
      } catch (error) {
        console.log("Error fetching Loans in Cobro with ID: " + id);
      }
    }

    fetchCobro();
    fetchCreditos();
  }, [page, size, id, client]);

  const onLiquidarHandler = () => {
    console.log("liquidar");
    navigate(`/cobros/${id}/liquidacion`);
  };

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
              <td>saldo</td>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr key={cobro.id}>
              <td className="same-width">{cobro.id}</td>
              <td>{cobro.name}</td>
              <td>
                {
                  <Link className="clickeable">{`${cobro.user.name} ${cobro.user.lastName}`}</Link>
                }
              </td>
              <td>
                <Link className="clickeable">
                  {`${cobro.debtCollector.name} ${cobro.debtCollector.lastName}`}
                </Link>
              </td>
              <td className="same-width">{cobro.loans}</td>
              <td className="same-width">
                <strong>{cobro.balance}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="cobros__table-wrapper">
        <div className="table-options">
          <div className="title-wrapper">
            <h2>Creditos</h2>
          </div>

          <div className="stretch"></div>

          <div className="table-buttons">
            <button className="button" onClick={onLiquidarHandler}>
              liquidar
            </button>
          </div>
        </div>

        <table className="table">
          <thead className="table-head">
            <tr>
              <td>id</td>
              <td>creacion</td>
              <td>cliente</td>
              <td>ruta</td>
              <td>valor</td>
              <td>interes</td>
              <td>total credito</td>
              <td>total pago</td>
              <td>saldo</td>
            </tr>
          </thead>
          <tbody className="table-body">
            {creditos.map((credito) => {
              return (
                <tr key={credito.id}>
                  <td className="same-width">
                    <Link className="clickeable">{credito.id}</Link>
                  </td>
                  <td>{moment(credito.createdAt).fromNow()}</td>
                  <td>
                    <Link className="clickeable">
                      {`${credito.customer.name} ${credito.customer.lastName}`}
                    </Link>
                  </td>
                  <td className="same-width">{`${credito.routePosition}`}</td>
                  <td className="same-width">{credito.value}</td>
                  <td className="same-width">{`${credito.loanInterest}`}</td>
                  <td className="same-width">{credito.total}</td>
                  <td className="same-width">{credito.totalPaid}</td>
                  <td className="same-width">
                    <strong>{credito.balance}</strong>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <TableFooter pagination={pagination} />
      </div>
    </div>
  );
}

CobroDetails.propTypes = {
  client: PropTypes.func,
};

export default CobroDetails;
