import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setLogout } from "../../Slices/authorizationSlice";
import * as S from "./styles";
import { useThemeContext } from "../../count-context";

export default function MainLeftBarMenu(props) {
    const dispatch = useDispatch();

    const { theme } = useThemeContext();
    const { toggleTheme } = useThemeContext();

    const onLogout = () => {
        dispatch(setLogout());
        document.cookie = "token=; max-age=-1";
        document.cookie = "username=; max-age=-1";
    };

    return (
        <S.NavMenu>
            <S.MenuList>
                <S.MenuItem>
                    <NavLink
                        className="menu__link"
                        to={props.menuItemMainUrl}
                        style={{
                            color: theme.color,
                        }}
                    >
                        Главная
                    </NavLink>
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
                    <NavLink to="/authorization" onClick={onLogout}>
                        <S.MenuLink
                            href={props.menuItemMainUrl}
                            style={{
                                color: theme.color,
                            }}
                        >
                            Выйти
                        </S.MenuLink>
                    </NavLink>
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
