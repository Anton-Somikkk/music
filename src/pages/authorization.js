import { useState } from "react";
import { NavLink } from "react-router-dom";

let path = "/authorization";
// eslint-disable-next-line import/prefer-default-export
export function Authorization() {
    const [value, setValue] = useState("login");

    function handleChange(event) {
        setValue(event.target.value);

        if (document.cookie === `token=${event.target.value}`) {
            path = "/";
        }
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <input value={value} onChange={handleChange} />
            <input placeholder="password" />
            <NavLink className="link" to={path}>
                Enter
            </NavLink>

            <NavLink className="link" to="/registration">
                Register
            </NavLink>
        </div>
    );
}
