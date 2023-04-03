import { useParams } from "react-router-dom";
import { useThemeContext } from "../../count-context";
import { NotFound } from "../not-found";
import SelectPlayList from "../../components/SelectPlayList/SelectPlayList";
import CentralBlockFilter from "../../components/CentralBlockFilter/CentralBlockFilter";
import * as S from "./styles";

export function Collections(props) {
    const { theme } = useThemeContext();
    const { id } = useParams();
    const musicCollection = [
        "Плейлист дня",
        "100 танцевальных хитов",
        "Инди заряд",
    ];

    if (id !== "1" && id !== "2" && id !== "3") {
        return <NotFound />;
    }
    return (
        // <div>
        //     <S.CenterBlock>
        //         <S.CenterBlockContent>
        //             {/* <Search /> */}
        //             <S.CenterBlockTitle>
        //                 {musicCollection[id - 1]}
        //             </S.CenterBlockTitle>
        //             <S.TitleWrapper>
        //                 <S.TitleTrack>ТРЕК</S.TitleTrack>
        //                 <S.TitleAuthor>ИСПОЛНИТЕЛЬ</S.TitleAuthor>
        //                 <S.TitleAlbum>АЛЬБОМ</S.TitleAlbum>
        //                 <S.TitleTime>
        //                     {/* <S.WatchIcon src={watch} alt="time" /> */}
        //                 </S.TitleTime>
        //             </S.TitleWrapper>
        //             <SelectPlayList id={id} />
        //         </S.CenterBlockContent>
        //     </S.CenterBlock>
        // </div>

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
            <S.CenterBlockTitle title={musicCollection[id - 1]} />
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
            <SelectPlayList id={id} />
            </S.ContentPlayList>
        </S.MainCenterBlock>
    );
}
