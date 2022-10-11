import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  return (
    <div className="login-viewport">
      <div className="login">
        <div className="login__user-icon">
          <FontAwesomeIcon icon={faUserSecret} />
        </div>
        <div className="login__form-wrapper">
          <form className="login__form">
            <div className="login__form-group">
              <label htmlFor="username">
                <strong>Usuario</strong>
                <br />
                <input type="text" id="username" />
              </label>
            </div>
            <div className="login__form-group">
              <label htmlFor="password">
                <strong>Contraseña</strong>
                <br />
                <input type="password" id="password" />
              </label>
            </div>
            <div className="login__form-group login__button-wrapper">
              <button className="button">
                <strong>Entrar</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
