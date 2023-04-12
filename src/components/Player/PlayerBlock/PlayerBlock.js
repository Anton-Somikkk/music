import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetTrackByIdQuery } from "../../../services/musicApi";
import TrackPlayContain from "../TrackPlayContain/TrackPlayContain";
import { useThemeContext } from "../../../count-context";
import { play, getTrack } from "../../../Slices/playerSlice";

import * as S from "./styles";

export default function PlayerBlock() {
    const { theme } = useThemeContext();
    const dispatch = useDispatch();

    const isPlaying = useSelector((state) => state.player.isPlaying);
    const trackLink = useSelector((state) => state.player.trackLink);
    const trackId = useSelector((state) => state.player.id);
    const isVisible = useSelector((state) => state.player.isVisible);

    const { data } = useGetTrackByIdQuery(trackId);

    const [track, setTrack] = useState(new Audio(trackLink));

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
        startProgressTimer()
    }
    const togglePlay = () => {
        dispatch(play(!isPlaying));
    };

    // if (isPlaying) {
    //     handleStop();
    //     startProgressTimer();
    // } else {
    //     handleStart();
    // }

    useEffect(() => {
        if (isPlaying) {
            track.play();
        } else {
            track.pause();
        }
    }, [isPlaying]);

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
                            <S.PlayerBtnPrev>
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
                            <S.PlayerBtnNext>
                                <svg
                                    alt="next"
                                    className={theme.playerBtnPrevNextSvg}
                                >
                                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                                </svg>
                            </S.PlayerBtnNext>
                            <S.PlayerBtnRepeat>
                                <svg
                                    alt="repeat"
                                    className={theme.playerBtnSvg}
                                >
                                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                                </svg>
                            </S.PlayerBtnRepeat>
                            <S.PlayerBtnShuffle>
                                <svg
                                    alt="shuffle"
                                    className={theme.playerBtnSvg}
                                >
                                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                                </svg>
                            </S.PlayerBtnShuffle>
                        </S.PlayerControls>
                        <S.PlayerTrackPlay>
                            <TrackPlayContain />
                            <S.TrackPlayLikeDis>
                                <S.TrackPlayLike>
                                    <svg
                                        alt="like"
                                        className={theme.playerBtnLikeSvg}
                                    >
                                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                                    </svg>
                                </S.TrackPlayLike>
                                <S.TrackPlayDislike>
                                    <svg
                                        alt="dislike"
                                        className={theme.playerBtnLikeSvg}
                                    >
                                        <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                                    </svg>
                                </S.TrackPlayDislike>
                            </S.TrackPlayLikeDis>
                        </S.PlayerTrackPlay>
                    </S.BarPlayer>
                    <S.BarVolumeBlock>
                        <S.VolumeContent>
                            <S.VolumeImage>
                                <S.VolumeSvg
                                    alt="volume"
                                    style={{
                                        stroke: theme.strokeIcon,
                                    }}
                                >
                                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                                </S.VolumeSvg>
                            </S.VolumeImage>
                            <S.VolumeProgress>
                                <S.VolumeProgressLine
                                    type="range"
                                    name="range"
                                />
                            </S.VolumeProgress>
                        </S.VolumeContent>
                    </S.BarVolumeBlock>
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    );
}
