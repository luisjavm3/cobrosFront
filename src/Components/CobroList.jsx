import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CobroList(props) {
  const { cobros } = props;

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

CobroList.propTypes = {
  cobros: PropTypes.array,
};

export default CobroList;
