import PlayListItem from "../PlayListItem/PlayListItem";
import * as S from "./styles";
import { useGetAllTracksQuery } from "../../services/musicApi";

export default function CentralBlockPlayList() {
    const { data, error, isLoading } = useGetAllTracksQuery();
    
    const isEmptyList = !isLoading && !data?.length;

    if (isLoading) {
        const elemsSkeletonCollection = [];

        for (let i = 0; i < 10; i += 1) {
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
