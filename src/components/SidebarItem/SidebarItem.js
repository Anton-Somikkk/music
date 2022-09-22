import * as S from "./styles";

export default function SidebarItem(props) {
    return (
          <S.SidebarItem>
                <S.SidebarLink href={props.sidebarItemUrl}>
                  <S.SidebarImage src={props.sidebarItemImageUrl}
                   alt={props.sidebarItemImageAlt} />
                </S.SidebarLink>
          </S.SidebarItem>
    );
  }