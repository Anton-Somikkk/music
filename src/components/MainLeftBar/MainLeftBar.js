import { useState } from "react";
import MainLeftBarMenu from "../MainLeftBarMenu/MainLeftBarMenu";
import { useThemeContext } from "../../count-context";
import * as S from "./styles";

export default function MainLeftBar(props) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible(!visible);

    const { theme } = useThemeContext();
    return (
        <S.MainNav
            style={{
                backgroundColor: theme.background,
            }}
        >
            <S.NavLogo
                style={{
                    color: theme.color,
                }}
            >
                <S.LogoImage src={props.logoUrl} alt="logo" />
            </S.NavLogo>

            <S.NavBurger
                role="presentation"
                onClick={toggleVisibility}
                onKeyDown={toggleVisibility}
            >
                <S.BurgerLine
                    style={{
                        backgroundColor: theme.backgroundBurgerButton,
                    }}
                />
                <S.BurgerLine
                    style={{
                        backgroundColor: theme.backgroundBurgerButton,
                    }}
                />
                <S.BurgerLine
                    style={{
                        backgroundColor: theme.backgroundBurgerButton,
                    }}
                />
            </S.NavBurger>

            {visible && (
                <MainLeftBarMenu
                    menuItemMainUrl="http://"
                    menuItemPlayListUrl="/my-tracks"
                    menuItemEnterUrl="http://"
                    light="img/icon/sprite.svg#icon-light-theme"
                    dark="img/icon/sprite.svg#icon-dark-theme"
                />
            )}
        </S.MainNav>
    );
}
