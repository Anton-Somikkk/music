import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PlayListTrack from "../MainCenterBlock/PlayListTrack/PlayListTrack";
import { useGetFavoriteTracksQuery } from "../../services/musicApi";
import { clearTracksId, getTracksId } from "../../Slices/playerSlice";

import * as S from "./styles";

export default function MyPlayList() {
    const dispatch = useDispatch();
    const { data, isLoading, isSuccess } = useGetFavoriteTracksQuery("");

    useEffect(() => {
        dispatch(clearTracksId());
        if (isSuccess) {
            data?.map((track) => dispatch(getTracksId(track.id)));
        }
    }, [data]);

    if (isLoading) {
        const elemsSkeletonCollection = [];

        for (let i = 0; i < 20; i += 1) {
            const elemSkeleton = (
                <S.PlayListItem key={i}>
                    <S.PlayListItemSkeleton
                        src="../img/track-sceleton.png"
                        aria-label="Загрузка трека"
                    />
                </S.PlayListItem>
            );
            elemsSkeletonCollection.push(elemSkeleton);
        }
        return elemsSkeletonCollection;
    }

    if (isSuccess) {
        return (
            <S.MyPlayList>
                {data.map(
                    ({
                        id,
                        name,
                        author,
                        album,
                        trackFile,
                        durationInSeconds,
                    }) => (
                        <PlayListTrack
                            key={id}
                            id={id}
                            trackTitleUrl={trackFile}
                            trackTitle={name}
                            trackAuthorTitle={author}
                            trackAlbumTitle={album}
                            trackTime={durationInSeconds}
                            isLike="true"
                        />
                    )
                )}
            </S.MyPlayList>
        );
    }
    return <S.MyPlayList />;
}
