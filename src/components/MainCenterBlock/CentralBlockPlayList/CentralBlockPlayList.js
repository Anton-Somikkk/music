import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PlayListItem from "../PlayListItem/PlayListItem";
import * as S from "./styles";
import { useGetAllTracksQuery } from "../../../services/musicApi";
import { clearTracksId, getTracksId } from "../../../Slices/playerSlice";

export default function CentralBlockPlayList() {
    const dispatch = useDispatch();

    const { data, error, isLoading, isSuccess } = useGetAllTracksQuery();

    useEffect(() => {
        dispatch(clearTracksId());

        if (isSuccess) {
            data?.map((track) => dispatch(getTracksId(track.id)));
        }
    }, [data]);

    const isEmptyList = !isLoading && !data?.length;

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

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isEmptyList) {
        return <p>No todos, yay!</p>;
    }

    return (
        <>
            {data.map((track) => (
                <PlayListItem key={track.id} track={track} />
            ))}
        </>
    );
}
