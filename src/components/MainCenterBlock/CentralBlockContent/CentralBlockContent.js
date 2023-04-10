import { useThemeContext } from "../../../count-context";
import * as S from "./styles";

export default function CentralBlockContent(props) {
    const { theme } = useThemeContext();

    return (
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
                        <use xlinkHref={props.iconWatchUrl} />
                    </S.PlayListTitleSvg>
                </S.PlayListTitleCol04>
            </S.ContentTitle>
        </S.CenterBlockContent>
    );
}
