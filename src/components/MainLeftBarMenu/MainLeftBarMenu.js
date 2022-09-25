import { NavLink } from "react-router-dom";
import * as S from "./styles";


export default function MainLeftBarMenu(props) {
    return (
                <S.NavMenu>
                      <S.MenuList>
                          <S.MenuItem><S.MenuLink href={props.menuItemMainUrl}>
                            Главное</S.MenuLink></S.MenuItem>
                          <S.MenuItem><NavLink className="menu__link" to={props.menuItemPlayListUrl}>
                            Мой плейлист</NavLink></S.MenuItem>
                          <S.MenuItem><S.MenuLink href={props.menuItemMainUrl}>
                            Войти</S.MenuLink></S.MenuItem>
                      </S.MenuList>
                </S.NavMenu>
    );
}