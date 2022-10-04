import { useRef, useState, useEffect } from "react";
import TrackPlayContain from "../TrackPlayContain/TrackPlayContain";
import * as S from "./styles";

export default function PlayerBlock(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [visible, setVisible] = useState(true);
    const [count, setCount] = useState(0);

    // const progressBar = (progressWidth) => {
    //     console.log(progressWidth);
    //     return progressWidth;
    // };

    // const handleStart = () => {
    //     audioRef.current.play();
    //     setIsPlaying(true);
    // };

    useEffect(() => {

        function handleStart() {
            audioRef.current.play();
            setIsPlaying(true);
        }

        function handleStop() {
            audioRef.current.pause();
            setIsPlaying(false);
        }

        function togglePlay() {
            if (isPlaying) {
                handleStop();
                setVisible(!visible);
            } else {
                handleStart();
                setVisible(!visible);
            }
        }

        const timerId = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        console.log(count);
        return () => {
            clearInterval(timerId),
            togglePlay;
        };
    });

    // const handleStop = () => {
    //     audioRef.current.pause();
    //     setIsPlaying(false);
    // };

    // const togglePlay = () => {
    //     if (isPlaying) {
    //         handleStop();
    //         setVisible(!visible);
    //     } else {
    //         handleStart();
    //         setVisible(!visible);
    //     }
    // };

    return (
        <>
            <audio controls ref={audioRef}>
                <source src="./Bobby_Marleni_Dropin.mp3" type="audio/mpeg" />
                <track kind="captions" />
            </audio>
            <S.Bar>
                <S.BarContent>
                    <S.BarPlayerProgress>
                        <S.BarPlayerProgressMoving progress={count} />
                    </S.BarPlayerProgress>
                    <S.BarPlayerBlock>
                        <S.BarPlayer>
                            <S.PlayerControls>
                                <S.PlayerBtnPrev>
                                    <S.PlayerBtnPrevSvg alt="prev">
                                        <use
                                            xlinkHref={props.playerIconPrevUrl}
                                        />
                                    </S.PlayerBtnPrevSvg>
                                </S.PlayerBtnPrev>
                                <S.PlayerBtnPlay onClick={togglePlay}>
                                    <S.PlayerBtnPlaySvg alt="play">
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
                                    <S.PlayerBtnNextSvg alt="next">
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
