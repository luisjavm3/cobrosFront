import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function TableFooter(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pagination } = props;
  const page = parseInt(searchParams.get("page"));
  const size = parseInt(searchParams.get("size"));
  const location = useLocation();

  const onSelectHandler = function (e) {
    setSearchParams({ page, size: e.target.value });
  };

  return (
    <div className="table-footer">
      <div className="table-footer-section">
        <span>
          pagina {page} de {pagination.totalPages}
        </span>
      </div>

      <div className="table-footer-section">
        <div className="page-size-wrapper">
          <label htmlFor="pageSize">Tamaño Pagina</label>
          <select
            name="pageSize"
            id="pageSize"
            onChange={(e) => onSelectHandler(e)}
            value={[10, 30, 50, 100].includes(size) ? size : "0"}
          >
            <option value="0">-</option>
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      <div className="table-footer-section">
        <div className="navigation">
          {page === 1 ? (
            <span>primera</span>
          ) : (
            <Link to={`${location.pathname}?page=1&size=${size}`}>
              <span>primera</span>
            </Link>
          )}

          {page === 1 ? (
            <span>
              <FontAwesomeIcon icon={faAngleLeft} />
            </span>
          ) : (
            <Link to={`${location.pathname}?page=${page - 1}&size=${size}`}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </Link>
          )}

          <span>{pagination.pageNumber}</span>

          {page >= pagination.totalPages ? (
            <span>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          ) : (
            <Link
              to={`${location.pathname}?page=${
                parseInt(page) + 1
              }&size=${size}`}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          )}

          {page === pagination.totalPages ? (
            <span>última</span>
          ) : (
            <Link
              to={`${location.pathname}?page=${pagination.totalPages}&size=${size}`}
            >
              <span>última</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
