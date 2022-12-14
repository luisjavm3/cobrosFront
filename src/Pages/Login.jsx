import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/Auth/authSlice";
import Spinner from "../Components/Spinner";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const submitHandler = function (e) {
    e.preventDefault();

    dispatch(login({ username, password }));
  };

  const changeHandler = function (e) {
    const value = e.target.value;
    const type = e.target.id;

    switch (type) {
      case "username":
        setUsername(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return !isAuth ? (
    <div className="login-viewport">
      {!loading ? (
        <div className="login">
          <div className="login__user-icon">
            <FontAwesomeIcon icon={faUserSecret} />
          </div>
          <div className="login__form-wrapper">
            <form className="login__form" onSubmit={(e) => submitHandler(e)}>
              <div className="login__form-group">
                <label htmlFor="username">
                  <strong>Usuario</strong>
                  <br />
                  <input
                    type="text"
                    id="username"
                    onChange={(e) => changeHandler(e)}
                  />
                </label>
              </div>
              <div className="login__form-group">
                <label htmlFor="password">
                  <strong>Contraseña</strong>
                  <br />
                  <input
                    type="password"
                    id="password"
                    autoComplete="true"
                    onChange={(e) => changeHandler(e)}
                  />
                </label>
              </div>
              <div className="login__form-group login__button-wrapper">
                <button
                  className="button button--primary"
                  onClick={submitHandler}
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  ) : (
    <Navigate to="/cobros" />
  );
}
