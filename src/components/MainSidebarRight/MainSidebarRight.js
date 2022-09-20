import * as S from "./styles";

import SidebarBlock from '../SidebarBlock/SidebarBlock';
import SidebarPerson from '../SidebarPerson/SidebarPerson';

export default function MainSidebarRight() {
    return (
      <S.MainSidebar>
        <SidebarPerson personName="Sergey.Ivanov" />
        <SidebarBlock initSeconds={3} />
      </S.MainSidebar>
    );
}