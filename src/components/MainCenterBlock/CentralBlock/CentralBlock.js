import { useDispatch, useSelector } from "react-redux";
import CentralBlockPlayList from "../CentralBlockPlayList/CentralBlockPlayList";
import CentralBlockFilter from "../../Filter/CentralBlockFilter/CentralBlockFilter";
import CentralBlockContent from "../CentralBlockContent/CentralBlockContent";
import MainSidebarRight from "../../MainSidebarRight/MainSidebarRight";
import { useThemeContext } from "../../../count-context";
import { search } from "../../../Slices/searchSlice";
import * as S from "./styles";

export default function CentralBlock() {
    const { theme } = useThemeContext();

    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        dispatch(search(e.target.value));
    };

    const trackTitle = useSelector((state) => state.search.searchValue);

    return (
        <>
            <S.MainCenterBlock>
                <S.CenterBlockContent>
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
                            <use xlinkHref="/img/icon/sprite.svg#icon-search" />
                        </S.SearchSvg>
                        <S.SearchText
                            onChange={onChangeHandler}
                            type="search"
                            placeholder="Поиск"
                            name="search"
                            value={trackTitle}
                            style={{
                                color: theme.color,
                            }}
                        />
                    </S.CenterBlockSearch>
                    <CentralBlockTitle title="Треки" />
                    <CentralBlockFilter />
                    <CentralBlockContent iconWatchUrl="img/icon/sprite.svg#icon-watch" />
                    <S.ContentPlayList>
                        <CentralBlockPlayList initSeconds={3} />
                    </S.ContentPlayList>
                </S.CenterBlockContent>
            </S.MainCenterBlock>
            <MainSidebarRight />
        </>
    );
}

function CentralBlockTitle(props) {
    const { theme } = useThemeContext();
    return (
        <S.CenterBlockSubTitle
            style={{
                color: theme.color,
            }}
        >
            {props.title}
        </S.CenterBlockSubTitle>
    );
}
