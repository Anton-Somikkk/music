import { createGlobalStyle } from "styled-components";
import MainLeftBar from "../MainLeftBar/MainLeftBar";
import CentralBlock from "../CentralBlock/CentralBlock";
import MainSidebarRight from "../MainSidebarRight/MainSidebarRight";
// import PlayerBlock from "../PlayerBlock/PlayerBlock";
import { useThemeContext } from "../../count-context";
import * as S from "./styles";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    font-family: 'Stratos-Thin', sans-serif;
    color: #FFFFFF;

}

a,
a:visited {
  text-decoration: none;
  font-family: 'Stratos-Thin', sans-serif;
  cursor: pointer;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'Stratos-Thin';
  src: local('Stratos-Thin'), local('Stratos-Thin'),
      url('../fonts/Stratos-Thin.woff2') format('woff2'),
      url('../fonts/Stratos-Thin.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
`;

export function Wrapper() {
    const { theme } = useThemeContext();

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container
                    style={{
                        backgroundColor: theme.background,
                    }}
                >
                    <S.Main>
                        <MainLeftBar logoUrl={theme.logoURL} />
                        <CentralBlock searchImageUrl="img/icon/sprite.svg#icon-search" />
                        <MainSidebarRight />
                    </S.Main>
                    {/* <PlayerBlock
                        playerIconPrevUrl="img/icon/sprite.svg#icon-prev"
                        playerIconPlayUrl="img/icon/sprite.svg#icon-play"
                        playerIconPauseUrl="img/icon/sprite.svg#icon-pause"
                        playerIconNextUrl="img/icon/sprite.svg#icon-next"
                        playerIconRepeatUrl="img/icon/sprite.svg#icon-repeat"
                        playerIconShuffleUrl="img/icon/sprite.svg#icon-shuffle"
                        playerIconLikeUrl="img/icon/sprite.svg#icon-like"
                        playerIconDislikeUrl="img/icon/sprite.svg#icon-dislike"
                        playerIconVolumeUrl="img/icon/sprite.svg#icon-volume"
                    /> */}
                </S.Container>
            </S.Wrapper>
        </>
    );
}
