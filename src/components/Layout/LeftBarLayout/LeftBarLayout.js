import { Outlet } from "react-router-dom";
import MainLeftBar from "../../MainLeftBar/MainLeftBar";
import * as S from "./styles";
import { useThemeContext } from "../../../count-context";

export default function LeftBarLayout() {
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
                    <Outlet />
                </S.Main>
            </S.Container>
        </S.Wrapper>
    );
}
