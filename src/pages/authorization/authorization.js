import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import {
    useGetTokenMutation,
    useUserLoginMutation,
} from "../../services/musicApi";
import * as S from "./styles";
// import logo from "../../img/LogoBlack.png";
import { setLogin, setToken } from "../../Slices/authorizationSlice";

let path = "/authorization";
// eslint-disable-next-line import/prefer-default-export
export function Authorization() {
    const dispatch = useDispatch();
    const [login, { data, isSuccess }] = useUserLoginMutation();
    const [getToken, { data: token }] = useGetTokenMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = ({ target }) => {
        setEmail(target.value);
    };

    const handlePassword = ({ target }) => {
        setPassword(target.value);
    };

    // function handleChange(event) {
    //     setValue(event.target.value);

    //     if (document.cookie === `token=${event.target.value}`) {
    //         path = "/";
    //     }
    // }

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        if (!email || !password) {
            alert("Введите свои учетные данные или зарегистрируйтесь");
        } else {
            login({
                email,
                password,
            });
            getToken({
                email,
                password,
            });
        }
    };

    useEffect(() => {
        if (isSuccess) {
            path = "/";
            document.cookie = `username=${data?.username}`;
            dispatch(setToken(token?.access));
            document.cookie = `token=${token?.refresh}`;
            dispatch(setLogin());
            console.log(data);
        }
    }, [token]);

    return (
        <div>
            <S.Container>
                <S.FormWrapper>
                    <S.Form>
                        <S.Logo src="" alt="logo" />
                        <S.Input
                            placeholder="Email"
                            type="text"
                            onChange={handleEmail}
                        />
                        <S.Input
                            placeholder="Пароль"
                            type="password"
                            onChange={handlePassword}
                        />
                        <NavLink
                            className="link"
                            to={path}
                            onClick={(evt) => onSubmitForm(evt)}
                        >
                            <S.FormButton type="button">Войти</S.FormButton>
                        </NavLink>
                        <NavLink className="link" to="/registration">
                            <S.SignupButton type="button">
                                Зарегистрироваться
                            </S.SignupButton>
                        </NavLink>
                    </S.Form>
                </S.FormWrapper>
            </S.Container>
        </div>
    );
}
