import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useSearchParams } from "react-router-dom";

export default function TableFooter(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pagination } = props;
  const page = searchParams.get("page");
  const size = searchParams.get("size");

  const onSelectHandler = function (e) {
    setSearchParams({ page, size: e.target.value });
    window.location.reload();
  };

  return (
    <div className="table-footer">
      <div className="table-footer-section"></div>

      <div className="table-footer-section">
        <div className="page-size-wrapper">
          <label htmlFor="pageSize">Tamaño Pagina</label>
          <select
            name="pageSize"
            id="pageSize"
            onChange={(e) => onSelectHandler(e)}
            value={["10", "30", "50", "100"].includes(size) ? size : "0"}
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
          <Link className={page == 1 ? "inactive" : ""}>
            <span>primera</span>
          </Link>

          <Link className="icon">
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>

          <Link className="inactive">
            <span>{pagination.pageNumber}</span>
          </Link>

          <Link className="icon">
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>

          <Link>
            <span>última</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
