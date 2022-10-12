import { useThemeContext } from "../../count-context";
import * as S from "./styles";

export default function TrackPlay(props) {
    const { theme } = useThemeContext();

    return (
        <>
            <S.TrackPlayImage
                style={{
                    backgroundColor: theme.backgroundTrackTitleImage,
                }}
            >
                <S.TrackPlaySvg
                    style={{
                        stroke: theme.strokeTrackTitleImage,
                    }}
                    alt="music"
                >
                    <use xlinkHref={props.playTrackImageUrl} />
                </S.TrackPlaySvg>
            </S.TrackPlayImage>
            <S.TrackPlayAuthor>
                <S.TrackPlayAuthorLink
                    href={props.playTrackNameUrl}
                    style={{
                        color: theme.color,
                    }}
                >
                    {props.playTrackNameTitle}
                </S.TrackPlayAuthorLink>
            </S.TrackPlayAuthor>
            <S.TrackPlayAlbum>
                <S.TrackPlayAlbumLink
                    href={props.playTrackAuthorUrl}
                    style={{
                        color: theme.color,
                    }}
                >
                    {props.playTrackAuthorTitle}
                </S.TrackPlayAlbumLink>
            </S.TrackPlayAlbum>
        </>
    );
}
