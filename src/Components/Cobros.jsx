import React from "react";

export default function Cobros() {
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
          <tbody className="table-body"></tbody>
        </table>
      </div>
    </div>
  );
}
