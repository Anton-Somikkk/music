import { useDispatch } from "react-redux";
import { useThemeContext } from "../../../count-context";
import * as S from "./styles";
import {
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
} from "../../../services/musicApi";
import { play, getTrackId } from "../../../Slices/playerSlice";

export default function PlayListTrack({
    id,
    trackImageUrl,
    trackTitle,
    trackAuthorTitle,
    trackAlbumTitle,
    trackTime,
    isLike,
}) {
    const { theme } = useThemeContext();
    const [addFavoriteTrack] = useAddFavoriteTrackMutation();
    const [deleteFavoriteTrack] = useDeleteFavoriteTrackMutation();

    const dispatch = useDispatch();

    const togglePlayer = (evt) => {
        evt.preventDefault();

        dispatch(getTrackId(id));
        dispatch(play(true));
    };

    const handleToggleFavorite = (isFavorite) => {
        try {
            if (!id) {
                throw new Error("id is undefined");
            }

            if (!isFavorite) {
                addFavoriteTrack(id);
            } else {
                deleteFavoriteTrack(id);
            }
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
                    onClick={(evt) => {
                        togglePlayer(evt);
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
                        onClick={(evt) => {
                            togglePlayer(evt);
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
                {isLike ? (
                    <S.IconLikeSvg
                        alt="like"
                        onClick={() => handleToggleFavorite(isLike)}
                        style={{
                            stroke: theme.strokeTrackTitleImage,
                        }}
                        isLike={isLike}
                    >
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.IconLikeSvg>
                ) : (
                    <S.IconNotLikeSvg
                        alt="like"
                        onClick={() => handleToggleFavorite(isLike)}
                        style={{
                            stroke: theme.strokeTrackTitleImage,
                        }}
                        isLike={isLike}
                    >
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.IconNotLikeSvg>
                )}
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
