import { NavLink } from "react-router-dom";
import * as S from "./styles";



export default function SidebarItem(props) {
    return (
          <S.SidebarItem>
                <NavLink className="sidebar__link" to={props.sidebarItemUrl}>
                  <S.SidebarImage src={props.sidebarItemImageUrl}
                   alt={props.sidebarItemImageAlt} />
                </NavLink>
          </S.SidebarItem>
    );
  }