import { useEffect, useState } from "react";
import getTracks from "../../tracks";
import PlayListItem from "../PlayListItem/PlayListItem";
import * as S from "./styles";

export default function CentralBlockPlayList(props) {
    const elemsCollection = [];
    const elemsSkeletonCollection = [];
    getTracks();
    
    for (let i = 0; i < window.application.tracks.length; i += 1) {
        const elem = <PlayListItem trackNumber={i} key={i} />;
        const elemSkeleton = (
            <S.PlayListItem key={i}>
                <S.PlayListItemSkeleton
                    src="../img/track-sceleton.png"
                    aria-label="Загрузка трека"
                />
            </S.PlayListItem>
        );

        elemsCollection.push(elem);
        elemsSkeletonCollection.push(elemSkeleton);
    }

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

    return seconds === 0 ? elemsCollection : elemsSkeletonCollection;
}
