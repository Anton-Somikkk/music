import * as S from "./styles";

export default function SidebarPerson(props) {
    return (
        <S.SidebarPersonal>
            <S.SidebarPersonalName>{props.personName}</S.SidebarPersonalName>
            <S.SidebarAvatar />
        </S.SidebarPersonal>
    );
}
