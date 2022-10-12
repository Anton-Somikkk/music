import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { useThemeContext } from "../../count-context";

export default function MainLeftBarMenu(props) {
    const { theme } = useThemeContext();
    const { toggleTheme } = useThemeContext();

    return (
        <S.NavMenu>
            <S.MenuList>
                <S.MenuItem>
                    <S.MenuLink
                        href={props.menuItemMainUrl}
                        style={{
                            color: theme.color,
                        }}
                    >
                        Главное
                    </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <NavLink
                        className="menu__link"
                        to={props.menuItemPlayListUrl}
                        style={{
                            color: theme.color,
                        }}
                    >
                        Мой плейлист
                    </NavLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink
                        href={props.menuItemMainUrl}
                        style={{
                            color: theme.color,
                        }}
                    >
                        Войти
                    </S.MenuLink>
                </S.MenuItem>

                <S.MenuItem>
                    <S.MenuImage
                        onClick={toggleTheme}
                        style={{
                            backgroundImage: theme.backgroundImageThemeSwitcher,
                        }}
                    />
                </S.MenuItem>
            </S.MenuList>
        </S.NavMenu>
    );
}
