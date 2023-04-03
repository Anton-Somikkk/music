import { useRef, useState } from "react";
import TrackPlayContain from "../TrackPlayContain/TrackPlayContain";
import { useThemeContext, usePlayerContext } from "../../count-context";

import * as S from "./styles";

export default function PlayerBlock(props) {
    const { playersOption } = usePlayerContext();
    const { theme } = useThemeContext();
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [visible, setVisible] = useState(true);

    // eslint-disable-next-line prefer-const
    let [count, setCount] = useState(0);

    const handleStop = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const handleStart = () => {
        audioRef.current.play();
        setIsPlaying(true);

        const timerId = setInterval(() => {
            count =
                (audioRef.current.currentTime / audioRef.current.duration) *
                100;
            setCount(count);

            if (audioRef.current.currentTime === audioRef.current.duration) {
                count = 0;
                setCount(count);
                audioRef.current.currentTime = 0;
                handleStop();
                setVisible(visible);
                clearInterval(timerId);
            }
        }, audioRef.current.duration / 100);

        return () => {
            clearInterval(timerId);
        };
    };

    const togglePlay = () => {
        if (isPlaying) {
            handleStop();
            setVisible(!visible);
        } else {
            handleStart();
            setVisible(!visible);
        }
    };

    return (
        <>
            <S.Audio controls ref={audioRef}>
                <source src={props.trackPlayUrl} type="audio/mpeg" />
                <track kind="captions" />
            </S.Audio>
            <S.Bar
                style={{
                    backgroundColor: theme.backgroundColorPlayer,
                    visibility: playersOption.playerStatus,
                }}
            >
                <S.BarContent>
                    <S.BarPlayerProgress
                        style={{
                            background: theme.backgroundProgressBar,
                        }}
                    >
                        <S.BarPlayerProgressMoving progress={count} />
                    </S.BarPlayerProgress>
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
                                        {visible ? (
                                            <use xlinkHref="img/icon/sprite.svg#icon-play" />
                                        ) : (
                                            <use xlinkHref="img/icon/sprite.svg#icon-pause" />
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
                                <TrackPlayContain initSeconds={3} />
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
        </>
    );
}
