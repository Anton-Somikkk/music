import { useEffect } from "react";
import { useDispatch } from "react-redux";

import PlayListTrack from "../PlayListTrack/PlayListTrack";
import { useGetPlaylistByIdQuery } from "../../services/musicApi";
import { getPlayListName } from "../../Slices/playListSlice";

import * as S from "./styles";

export default function SelectPlayList(idCollection) {
    const dispatch = useDispatch();
    
    const { data, isLoading, isSuccess } =
        useGetPlaylistByIdQuery(idCollection);
        
    useEffect(() => {
        if (isSuccess) {
            dispatch(getPlayListName(data.name));
        }
    }, [idCollection, data]);

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
            <S.SelectPlayList>
                {data?.items.map(
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
                            iconLikeUrl="img/icon/sprite.svg#icon-like"
                        />
                    )
                )}
            </S.SelectPlayList>
        );
    }
    return <S.SelectPlayList />;
}
