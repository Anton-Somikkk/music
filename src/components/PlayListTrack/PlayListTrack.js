// import { useDispatch } from "react-redux";
import { useThemeContext } from "../../count-context";
import * as S from "./styles";
import { useAddFavoriteTrackMutation } from "../../services/musicApi";
// import { removeTrack, addTrack } from "../../TracksApi/favoriteSlice";
// import { addTrack } from "../../Slices/favoriteSlice";

export default function PlayListTrack(props) {

    const { theme } = useThemeContext();
    const [addFavoriteTrack] = useAddFavoriteTrackMutation();

    // const dispatch = useDispatch();

    const handleToggleFavorite = (id) => {
        try {
            if (!id) {
                throw new Error("id is undefined");
            }
            console.log(props.id);
            addFavoriteTrack( props.id );
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
                        <use xlinkHref={props.trackImageUrl} />
                    </S.TrackTitleSvg>
                </S.TrackTitleImage>
                <S.TrackTitleText>
                    <S.TrackTitleLink
                        href={props.trackTitleUrl}
                        style={{
                            color: theme.color,
                        }}
                    >
                        {props.trackTitle}{" "}
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
                    href={props.trackAuthorUrl}
                    style={{
                        color: theme.color,
                    }}
                >
                    {props.trackAuthorTitle}
                </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
                <S.TrackAlbumLink
                    href={props.trackAlbumUrl}
                    style={{
                        color: theme.colorPale,
                    }}
                >
                    {props.trackAlbumTitle}
                </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
                <S.TrackTimeSvg
                    alt="time"
                    onClick={(id) => handleToggleFavorite(id)}
                    style={{
                        stroke: theme.strokeTrackTitleImage,
                    }}
                >
                    <use xlinkHref={props.iconLikeUrl} />
                </S.TrackTimeSvg>
                <S.TrackTimeText
                    style={{
                        color: theme.colorPale,
                    }}
                >
                    {props.trackTime}
                </S.TrackTimeText>
            </S.TrackTime>
        </S.PlayListTrack>
    );
}
