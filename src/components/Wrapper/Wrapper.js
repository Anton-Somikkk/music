import MainLeftBar from "../MainLeftBar/MainLeftBar";
import CentralBlock from "../MainCenterBlock/CentralBlock/CentralBlock";
import MainSidebarRight from "../MainSidebarRight/MainSidebarRight";
import PlayerBlock from "../PlayerBlock/PlayerBlock";
import { useThemeContext } from "../../count-context";
import * as S from "./styles";

export function Wrapper() {
    const { theme } = useThemeContext();

    return (
        <S.Wrapper>
            <S.Container
                style={{
                    backgroundColor: theme.background,
                }}
            >
                <S.Main>
                    <MainLeftBar logoUrl={theme.logoURL} />
                    <CentralBlock />
                    <MainSidebarRight />
                </S.Main>
                <PlayerBlock />
            </S.Container>
        </S.Wrapper>
    );
}
