import { useRef, useState } from "react";
import TrackPlayContain from "../TrackPlayContain/TrackPlayContain";
import { useThemeContext } from "../../count-context";
import * as S from "./styles";

export default function PlayerBlock(props) {
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
                <source src="./Bobby_Marleni_Dropin.mp3" type="audio/mpeg" />
                <track kind="captions" />
            </S.Audio>
            <S.Bar
                style={{
                    backgroundColor: theme.backgroundColorPlayer,
                }}
            >
                <S.BarContent>
                    <S.BarPlayerProgress>
                        <S.BarPlayerProgressMoving progress={count} />
                    </S.BarPlayerProgress>
                    <S.BarPlayerBlock>
                        <S.BarPlayer>
                            <S.PlayerControls>
                                <S.PlayerBtnPrev>
                                    <S.PlayerBtnPrevSvg
                                        alt="prev"
                                        style={{
                                            fill: theme.playerButtons,
                                            stroke: theme.playerButtons,
                                        }}
                                    >
                                        <use
                                            xlinkHref={props.playerIconPrevUrl}
                                        />
                                    </S.PlayerBtnPrevSvg>
                                </S.PlayerBtnPrev>
                                <S.PlayerBtnPlay onClick={togglePlay}>
                                    <S.PlayerBtnPlaySvg
                                        alt="play"
                                        style={{
                                            fill: theme.playerButtons,
                                        }}
                                    >
                                        {visible ? (
                                            <use
                                                xlinkHref={
                                                    props.playerIconPlayUrl
                                                }
                                            />
                                        ) : (
                                            <use
                                                xlinkHref={
                                                    props.playerIconPauseUrl
                                                }
                                            />
                                        )}
                                    </S.PlayerBtnPlaySvg>
                                </S.PlayerBtnPlay>
                                <S.PlayerBtnNext>
                                    <S.PlayerBtnNextSvg
                                        alt="next"
                                        style={{
                                            fill: theme.playerButtons,
                                            stroke: theme.playerButtons,
                                        }}
                                    >
                                        <use
                                            xlinkHref={props.playerIconNextUrl}
                                        />
                                    </S.PlayerBtnNextSvg>
                                </S.PlayerBtnNext>
                                <S.PlayerBtnRepeat>
                                    <S.PlayerBtnRepeatSvg alt="repeat">
                                        <use
                                            xlinkHref={
                                                props.playerIconRepeatUrl
                                            }
                                        />
                                    </S.PlayerBtnRepeatSvg>
                                </S.PlayerBtnRepeat>
                                <S.PlayerBtnShuffle>
                                    <S.PlayerBtnShuffleSvg alt="shuffle">
                                        <use
                                            xlinkHref={
                                                props.playerIconShuffleUrl
                                            }
                                        />
                                    </S.PlayerBtnShuffleSvg>
                                </S.PlayerBtnShuffle>
                            </S.PlayerControls>
                            <S.PlayerTrackPlay>
                                <TrackPlayContain initSeconds={3} />
                                <S.TrackPlayLikeDis>
                                    <S.TrackPlayLike>
                                        <S.TrackPlayLikeSvg alt="like">
                                            <use
                                                xlinkHref={
                                                    props.playerIconLikeUrl
                                                }
                                            />
                                        </S.TrackPlayLikeSvg>
                                    </S.TrackPlayLike>
                                    <S.TrackPlayDislike>
                                        <S.TrackPlayDislikeSvg alt="dislike">
                                            <use
                                                xlinkHref={
                                                    props.playerIconDislikeUrl
                                                }
                                            />
                                        </S.TrackPlayDislikeSvg>
                                    </S.TrackPlayDislike>
                                </S.TrackPlayLikeDis>
                            </S.PlayerTrackPlay>
                        </S.BarPlayer>
                        <S.BarVolumeBlock>
                            <S.VolumeContent>
                                <S.VolumeImage>
                                    <S.VolumeSvg alt="volume">
                                        <use
                                            xlinkHref={
                                                props.playerIconVolumeUrl
                                            }
                                        />
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
