import CentralBlockPlayList from "../CentralBlockPlayList/CentralBlockPlayList";
import CentralBlockFilter from "../CentralBlockFilter/CentralBlockFilter";
import CentralBlockContent from "../CentralBlockContent/CentralBlockContent";
import { useThemeContext } from "../../count-context";
import * as S from "./styles";

export default function CentralBlock() {
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
                    <use xlinkHref="img/icon/sprite.svg#icon-search" />
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
            <CentralBlockTitle title="Треки" />
            <CentralBlockFilter />
            <CentralBlockContent iconWatchUrl="img/icon/sprite.svg#icon-watch" />
            <S.ContentPlayList>
                <CentralBlockPlayList initSeconds={3} />
            </S.ContentPlayList>
        </S.MainCenterBlock>
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
