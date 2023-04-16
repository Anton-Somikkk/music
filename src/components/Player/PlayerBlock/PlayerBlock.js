import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    useGetTrackByIdQuery,
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
} from "../../../services/musicApi";
import TrackPlayContain from "../TrackPlayContain/TrackPlayContain";
import { useThemeContext } from "../../../count-context";
import {
    play,
    getTrack,
    playPrevTrack,
    playNextTrack,
    getTrackId,
    shuffleTracks,
    sortTracks,
    repeatTrack,
} from "../../../Slices/playerSlice";

import { ReactComponent as ShuffleIcon } from "../../../img/icon/shuffle.svg";
import { ReactComponent as RepeatIcon } from "../../../img/icon/repeat.svg";
import { checkFavorites } from "../../../scripts/checkFavorites";
import * as S from "./styles";

export default function PlayerBlock() {
    const { theme } = useThemeContext();
    const dispatch = useDispatch();

    const isPlaying = useSelector((state) => state.player.isPlaying);
    const trackLink = useSelector((state) => state.player.trackLink);
    const trackId = useSelector((state) => state.player.id);
    const isVisible = useSelector((state) => state.player.isVisible);
    const trackIds = useSelector((state) => state.player.ids);
    const isShuffle = useSelector((state) => state.player.isShuffle);
    const isRepeat = useSelector((state) => state.player.isRepeat);

    const { data } = useGetTrackByIdQuery(trackId);

    let isLike = false;
    if (data) {
        isLike = checkFavorites(data);
    }

    const [track, setTrack] = useState(new Audio(trackLink));

    const [addTrack] = useAddFavoriteTrackMutation();
    const [deleteTrack] = useDeleteFavoriteTrackMutation();

    const onAddTrack = () => {
        addTrack(trackId);
    };

    const onDeleteTrack = () => {
        deleteTrack(trackId);
    };

    const [isVolumeOn, setIsVolumeOn] = useState(true);
    const [volumeValue, setVolumeValue] = useState(0.2);
    const [oldVolumeValue, setOldVolumeValue] = useState(0);

    track.volume = volumeValue;

    const onVolumeChange = (evt) => {
        if (!isVolumeOn) {
            setIsVolumeOn(true);
        }
        setVolumeValue(Number(evt.target.value));
    };

    const onVolumeToggle = () => {
        setIsVolumeOn(!isVolumeOn);
        if (isVolumeOn) {
            setOldVolumeValue(volumeValue);
            setVolumeValue(0);
        } else {
            setVolumeValue(oldVolumeValue);
        }
    };

    if (isPlaying) {
        track.autoplay = true;
    }

    useEffect(() => {
        dispatch(getTrack(data?.track_file));
    }, [data]);

    useEffect(() => {
        track.pause();
        track.remove();

        setTrack(new Audio(trackLink));
    }, [trackLink]);

    const barProgress = useRef(null);
    const { duration } = track;
    const [trackProgress, setTrackProgress] = useState(0);
    const progressPercent = (trackProgress / duration) * 100;

    const clearBarProgress = () => {
        if (typeof barProgress.current === "number") {
            clearInterval(barProgress.current);
        }
    };
    const startProgressTimer = () => {
        clearBarProgress();

        barProgress.current = setInterval(() => {
            setTrackProgress(track.currentTime);
            if (track.ended) {
                dispatch(play(false));
            }
        }, 1000);
    };

    const onProgressChange = (e) => {
        clearBarProgress();
        track.currentTime = Number(e.target.value);
        setTrackProgress(Number(e.target.value));
        startProgressTimer();
    };

    if (isPlaying) {
        startProgressTimer();
    }
    const togglePlay = () => {
        dispatch(play(!isPlaying));
    };

    const onNextTrack = () => {
        const currentTrack = +trackIds.indexOf(trackId);
        if (currentTrack + 1 === trackIds.length) {
            dispatch(getTrackId(trackIds[0]));
            return;
        }

        dispatch(playNextTrack(currentTrack));
    };

    const onPrevTrack = () => {
        const currentTrack = +trackIds.indexOf(trackId);
        if (!currentTrack) {
            dispatch(getTrackId(trackIds[0]));
            return;
        }
        dispatch(playPrevTrack(currentTrack));
    };

    const onShuffle = () => {
        if (isShuffle) {
            dispatch(sortTracks());
        } else {
            dispatch(shuffleTracks());
        }
    };

    const onRepeat = () => {
        track.loop = true;
        dispatch(repeatTrack());
    };

    useEffect(() => {
        if (isPlaying) {
            track.play();
        } else {
            track.pause();
        }
    }, [isPlaying]);

    const { appearance } = theme;

    let colorIconOn = "#FFFFFF";
    let colorIconOff = "#696969";

    if (appearance === "light") {
        colorIconOn = "#000000";
        colorIconOff = "#b1b1b1";
    }

    return (
        <S.Bar
            isPlaying={isVisible}
            style={{
                backgroundColor: theme.backgroundColorPlayer,
            }}
        >
            <S.BarContent>
                <S.BarPlayerProgressMoving
                    type="range"
                    step="1"
                    progress={trackProgress}
                    onChange={onProgressChange}
                    min="0"
                    max={Number.isNaN(duration) ? "100" : `${duration}`}
                    backgroundValue={
                        Number.isNaN(progressPercent)
                            ? "0"
                            : `${progressPercent}`
                    }
                />

                <S.BarPlayerBlock>
                    <S.BarPlayer>
                        <S.PlayerControls>
                            <S.PlayerBtnPrev onClick={onPrevTrack}>
                                <svg
                                    alt="prev"
                                    className={theme.playerBtnPrevNextSvg}
                                >
                                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                                </svg>
                            </S.PlayerBtnPrev>
                            <S.PlayerBtnPlay onClick={togglePlay}>
                                <svg
                                    alt="play"
                                    className={theme.playerBtnPlaySvg}
                                >
                                    {isPlaying ? (
                                        <use xlinkHref="img/icon/sprite.svg#icon-pause" />
                                    ) : (
                                        <use xlinkHref="img/icon/sprite.svg#icon-play" />
                                    )}
                                </svg>
                            </S.PlayerBtnPlay>
                            <S.PlayerBtnNext onClick={onNextTrack}>
                                <svg
                                    alt="next"
                                    className={theme.playerBtnPrevNextSvg}
                                >
                                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                                </svg>
                            </S.PlayerBtnNext>
                            <S.PlayerBtnRepeat onClick={onRepeat}>
                                <RepeatIcon
                                    fill={isRepeat ? colorIconOn : colorIconOff}
                                    aria-label="repeat"
                                />
                            </S.PlayerBtnRepeat>
                            <S.PlayerBtnShuffle onClick={onShuffle}>
                                <ShuffleIcon
                                    fill={
                                        isShuffle ? colorIconOn : colorIconOff
                                    }
                                    aria-label="shuffle"
                                />
                            </S.PlayerBtnShuffle>
                        </S.PlayerControls>
                        <S.PlayerTrackPlay>
                            <TrackPlayContain />
                            <S.TrackPlayLikeDis>
                                <S.TrackPlayLike onClick={onAddTrack}>
                                    {isLike ? (
                                        <S.IconLikeSvg
                                            alt="like"
                                            className={theme.playerBtnLikeSvg}
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                                        </S.IconLikeSvg>
                                    ) : (
                                        <S.IconNotLikeSvg
                                            alt="dislike"
                                            className={theme.playerBtnLikeSvg}
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                                        </S.IconNotLikeSvg>
                                    )}
                                </S.TrackPlayLike>
                                <S.TrackPlayDislike onClick={onDeleteTrack}>
                                    <S.IconNotLikeSvg
                                        alt="dislike"
                                        className={theme.playerBtnLikeSvg}
                                    >
                                        <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                                    </S.IconNotLikeSvg>
                                </S.TrackPlayDislike>
                            </S.TrackPlayLikeDis>
                        </S.PlayerTrackPlay>
                    </S.BarPlayer>
                    <S.BarVolumeBlock>
                        <S.VolumeContent>
                            <S.VolumeImage>
                                <S.VolumeSvg
                                    onClick={() => onVolumeToggle()}
                                    alt="volume"
                                    style={{
                                        stroke: theme.strokeIcon,
                                    }}
                                >
                                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                                </S.VolumeSvg>
                            </S.VolumeImage>
                            <S.VolumeProgress>
                                <S.VolumeProgressLine
                                    type="range"
                                    name="volume"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={volumeValue}
                                    onChange={(evt) => onVolumeChange(evt)}
                                />
                            </S.VolumeProgress>
                        </S.VolumeContent>
                    </S.BarVolumeBlock>
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    );
}
