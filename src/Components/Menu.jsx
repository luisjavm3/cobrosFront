import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { closeSession } from "../Features/Auth/authSlice";

export default function Menu() {
  const dispatch = useDispatch();

  const onExitHandler = () => {
    dispatch(closeSession());
  };

  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__list-item">
          <Link to="cobros">Cobros</Link>
        </li>
        <li className="menu__list-item">
          <Link to="creditos">Creditos</Link>
        </li>
        <li className="menu__list-item">
          <Link to="clientes">Clientes</Link>
        </li>
        <li className="menu__list-item">
          <Link to="cobradores">Cobradores</Link>
        </li>
        <li className="menu__list-item">
          <Link to="usuarios">Usuarios</Link>
        </li>
      </ul>

      <div className="menu__user">
        <ul className="menu__list">
          <li className="menu__list-item">
            <Link to="/any">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li className="menu__list-item">
            <Link onClick={onExitHandler}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
