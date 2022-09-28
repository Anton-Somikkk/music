import { useEffect, useState } from "react";
import TrackPlay from "../TrackPlay/TrackPlay";
import * as S from "./styles";

export default function TrackPlayContain(props) {
    const { initSeconds = 10 } = props;
    const [seconds, setSeconds] = useState(initSeconds);

    useEffect(() => {
        const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                clearInterval(myInterval);
            }
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <S.TrackPlayContain>
            {seconds === 0 ? (
                <TrackPlay
                    playTrackImageUrl="img/icon/sprite.svg#icon-note"
                    playTrackNameUrl="http://"
                    playTrackNameTitle="Ты та..."
                    playTrackAuthorUrl="http://"
                    playTrackAuthorTitle="Баста"
                />
            ) : (
                <img
                    src="../img/Skeleton-track-2.png"
                    aria-label="Загрузка трека"
                />
            )}
        </S.TrackPlayContain>
    );
}
