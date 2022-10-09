// import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { ThemeContext, useThemeContext } from "../../count-context";

export default function MainLeftBarMenu(props) {
    const { theme } = useThemeContext();
    const { toggleTheme } = useThemeContext();
    // const [visible, setVisible] = useState(false);

    // const toggleVisibility = () => setVisible(!visible);

    return (
        <S.NavMenu>
            <S.MenuList>
                <S.MenuItem>
                    <S.MenuLink href={props.menuItemMainUrl}>
                        Главное
                    </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <NavLink
                        className="menu__link"
                        to={props.menuItemPlayListUrl}
                    >
                        Мой плейлист
                    </NavLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink href={props.menuItemMainUrl}>Войти</S.MenuLink>
                </S.MenuItem>
                <ThemeContext.Consumer>
                    <S.MenuItem>
                        <S.MenuImage
                            onClick={toggleTheme}
                            alt="Сменить тему"
                            style={{
                                backgroundImage: theme.backgroundImage,
                                color: theme.color,
                            }}
                        >
                            {/* {visible ? (
                            <use xlinkHref={props.light} />
                        ) : (
                            <use xlinkHref={props.dark} />
                        )} */}
                        </S.MenuImage>
                    </S.MenuItem>
                </ThemeContext.Consumer>
            </S.MenuList>
        </S.NavMenu>
    );
}
