import * as S from "./styles";
import { useThemeContext } from "../../count-context";

export default function SidebarPerson(props) {
    const { theme } = useThemeContext();

    return (
        <S.SidebarPersonal>
            <S.SidebarPersonalName style={{ color: theme.color }}>
                {props.personName}
            </S.SidebarPersonalName>
            <S.SidebarAvatar style={{ background: theme.backgroundTrackTitleImage }}/>
        </S.SidebarPersonal>
    );
}
