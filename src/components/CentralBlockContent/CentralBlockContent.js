import * as S from "./styles";

export default function CentralBlockContent(props) {
    return (
        <S.CenterBlockContent>
            <S.ContentTitle>
                <S.PlayListTitleCol01>Трек</S.PlayListTitleCol01>
                <S.PlayListTitleCol02>ИСПОЛНИТЕЛЬ</S.PlayListTitleCol02>
                <S.PlayListTitleCol03>АЛЬБОМ</S.PlayListTitleCol03>
                <S.PlayListTitleCol04>
                    <S.PlayListTitleSvg alt="time">
                        <use xlinkHref={props.iconWatchUrl} />
                    </S.PlayListTitleSvg>
                </S.PlayListTitleCol04>
            </S.ContentTitle>
        </S.CenterBlockContent>
    );
}
