import { useThemeContext } from "../../count-context";
import MyPlayList from "../../components/MyPlayList/MyPlayList";
import CentralBlockFilter from "../../components/MainCenterBlock/CentralBlockFilter/CentralBlockFilter";
import * as S from "./styles";

export function MyTracks(props) {
    const { theme } = useThemeContext();

    return (
        <S.MainCenterBlock>
            <S.CenterBlockSearch
                style={{
                    borderBottom: theme.borderBottom,
                }}
            >
                <S.SearchSvg
                    style={{
                        stroke: theme.stroke,
                    }}
                >
                    <use xlinkHref={props.searchImageUrl} />
                </S.SearchSvg>
                <S.SearchText
                    type="search"
                    placeholder="Поиск"
                    name="search"
                    style={{
                        color: theme.color,
                    }}
                />
            </S.CenterBlockSearch>
            <S.CenterBlockTitle
                style={{
                    color: theme.color,
                }}
            >
                Избранное
            </S.CenterBlockTitle>
            <CentralBlockFilter />
            <S.CenterBlockContent>
                <S.ContentTitle>
                    <S.PlayListTitleCol01
                        style={{
                            color: theme.colorPale,
                        }}
                    >
                        Трек
                    </S.PlayListTitleCol01>
                    <S.PlayListTitleCol02
                        style={{
                            color: theme.colorPale,
                        }}
                    >
                        ИСПОЛНИТЕЛЬ
                    </S.PlayListTitleCol02>
                    <S.PlayListTitleCol03
                        style={{
                            color: theme.colorPale,
                        }}
                    >
                        АЛЬБОМ
                    </S.PlayListTitleCol03>
                    <S.PlayListTitleCol04>
                        <S.PlayListTitleSvg
                            alt="time"
                            style={{
                                stroke: theme.colorPale,
                            }}
                        >
                            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                        </S.PlayListTitleSvg>
                    </S.PlayListTitleCol04>
                </S.ContentTitle>
            </S.CenterBlockContent>
            <S.ContentPlayList>
                <MyPlayList />
            </S.ContentPlayList>
        </S.MainCenterBlock>
    );
}
