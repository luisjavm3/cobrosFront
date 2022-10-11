import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { login } from '../Features/Auth/authSlice';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitHandler = function (e) {
    e.preventDefault();

    dispatch(login({ username, password }));
  };

  const changeHandler = function (e) {
    const value = e.target.value;
    const type = e.target.id;

    switch (type) {
      case 'username':
        setUsername(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="login-viewport">
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
              <button className="button" onClick={submitHandler}>
                <strong>Entrar</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
