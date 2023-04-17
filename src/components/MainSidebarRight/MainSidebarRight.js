import * as S from "./styles";

import SidebarBlock from "../SidebarBlock/SidebarBlock";
import SidebarPerson from "../SidebarPerson/SidebarPerson";

export default function MainSidebarRight() {

    const userName = document.cookie.split(";")[0].split("=")[1];

    return (
        <S.MainSidebar>
            <SidebarPerson personName={userName} />
            <SidebarBlock initSeconds={3} />
        </S.MainSidebar>
    );
}
