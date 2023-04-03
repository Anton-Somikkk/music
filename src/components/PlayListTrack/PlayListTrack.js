// import { useDispatch } from "react-redux";
import { useThemeContext } from "../../count-context";
import * as S from "./styles";
import { useAddFavoriteTrackMutation } from "../../services/musicApi";
// import { removeTrack, addTrack } from "../../TracksApi/favoriteSlice";
// import { addTrack } from "../../Slices/favoriteSlice";

export default function PlayListTrack({
    id,
    trackImageUrl,
    trackTitle,
    trackAuthorTitle,
    trackAlbumTitle,
    trackTime,
    iconLikeUrl,
}) {
    const { theme } = useThemeContext();
    const [addFavoriteTrack] = useAddFavoriteTrackMutation();

    // const dispatch = useDispatch();

    const handleToggleFavorite = (e) => {
        try {
            if (!e.target.id) {
                throw new Error("id is undefined");
            }
            console.log(id);
            addFavoriteTrack(e.target.id);
            // dispatch(addTrack({ id }));
            // if (id) {
            //     dispatch(addTrack({ id: track.id }));
            // } else {
            //     dispatch(removeTrack({ id: track.id }));
            // }
        } catch (error) {
            console.error("Failed to toggle favorite", error);
        }
    };

    return (
        <S.PlayListTrack>
            <S.TrackTitle>
                <S.TrackTitleImage
                    style={{
                        background: theme.backgroundTrackTitleImage,
                    }}
                >
                    <S.TrackTitleSvg
                        alt="music"
                        style={{
                            stroke: theme.strokeTrackTitleImage,
                        }}
                    >
                        <use xlinkHref={trackImageUrl} />
                    </S.TrackTitleSvg>
                </S.TrackTitleImage>
                <S.TrackTitleText>
                    <S.TrackTitleLink
                        href=""
                        style={{
                            color: theme.color,
                        }}
                    >
                        {trackTitle}{" "}
                        <S.TrackTitleSpan
                            style={{
                                color: theme.colorPale,
                            }}
                        />
                    </S.TrackTitleLink>
                </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
                <S.TrackAuthorLink
                    href=""
                    style={{
                        color: theme.color,
                    }}
                >
                    {trackAuthorTitle}
                </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
                <S.TrackAlbumLink
                    href=""
                    style={{
                        color: theme.colorPale,
                    }}
                >
                    {trackAlbumTitle}
                </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
                <S.TrackTimeSvg
                    alt="time"
                    onClick={(e) => handleToggleFavorite(e)}
                    style={{
                        stroke: theme.strokeTrackTitleImage,
                    }}
                >
                    <use xlinkHref={iconLikeUrl} />
                </S.TrackTimeSvg>
                <S.TrackTimeText
                    style={{
                        color: theme.colorPale,
                    }}
                >
                    {trackTime}
                </S.TrackTimeText>
            </S.TrackTime>
        </S.PlayListTrack>
    );
}
