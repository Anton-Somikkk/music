import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

import {
    useGetTokenMutation,
    useUserLoginMutation,
} from "../../services/musicApi";
import * as S from "./styles";
// import logo from "../../img/LogoBlack.png";
import { setLogin, setToken } from "../../Slices/authorizationSlice";


// eslint-disable-next-line import/prefer-default-export
export function Authorization() {
    const navigate = useNavigate();
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
            navigate("/tracks");
            document.cookie = `username=${data?.username}`;
            dispatch(setToken(token?.access));
            document.cookie = `token=${token?.refresh}`;
            dispatch(setLogin());

            console.log(token);
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

                        <S.FormButton
                            type="button"
                            onClick={(evt) => onSubmitForm(evt)}
                        >
                            Войти
                        </S.FormButton>

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
