import { NavLink } from "react-router-dom";

// eslint-disable-next-line import/prefer-default-export
export function Registration() {
    return (
      <div>
        <h1>Регистрация</h1>
        <input placeholder="login" />
      <input placeholder="password" />
      <input placeholder="confirm password" />
      <NavLink className="link" to="/authorization">
            Enter
          </NavLink>  
      </div>
    );
  }