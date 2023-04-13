import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useUserRegistrationMutation } from "../../services/musicApi";
// import logo from '../../img/LogoBlack.png'
import * as S from "./styles";

export default function Registration() {
    const [registration, { isSuccess, error }] = useUserRegistrationMutation();

    const [userValues, setUserValues] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [validatePassword, setValidatePassword] = useState("");

    const onRegistration = (evt) => {
        evt.preventDefault();
        if (userValues.password === validatePassword) {
            registration(userValues);
        } else {
            alert("Пароли не совпадают");
        }
    };

    const handleLogin = (evt) => {
        setUserValues({
            ...userValues,
            username: evt.target.value,
        });
    };

    const handleEmail = (evt) => {
        setUserValues({
            ...userValues,
            email: evt.target.value,
        });
    };

    const handlePassword = (evt) => {
        setUserValues({
            ...userValues,
            password: evt.target.value,
        });
    };

    const handleValidatePassword = (evt) => {
        setValidatePassword(evt.target.value);
    };

    return (
        <S.Container>
            <S.FormWrapper>
                <S.Form>
                    <S.Logo src="" alt="logo" />
                    <S.Input
                        placeholder="Имя"
                        type="text"
                        onChange={handleLogin}
                    />
                    {error && error.data.username && (
                        <S.ErrorNameMessage>
                            {error.data.username[0]}
                        </S.ErrorNameMessage>
                    )}
                    <S.Input
                        placeholder="Email"
                        type="text"
                        onChange={handleEmail}
                    />
                    {error && error.data.email && (
                        <S.ErrorEmailMessage>
                            {error.data.email[0]}
                        </S.ErrorEmailMessage>
                    )}
                    <S.Input
                        placeholder="Пароль"
                        type="password"
                        onChange={handlePassword}
                    />
                    {error && error.data.password && (
                        <S.ErrorPasswordMessage>
                            {error.data.password[0]}
                        </S.ErrorPasswordMessage>
                    )}
                    <S.Input
                        placeholder="Повторите пароль"
                        type="password"
                        onChange={handleValidatePassword}
                    />

                    <S.FormButton onClick={(evt) => onRegistration(evt)}>
                        Зарегистрироваться
                    </S.FormButton>

                    {isSuccess && <Navigate to="/authorization" replace />}
                </S.Form>
            </S.FormWrapper>
        </S.Container>
    );
}
