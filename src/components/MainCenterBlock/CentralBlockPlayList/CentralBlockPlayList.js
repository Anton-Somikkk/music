import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayListItem from "../PlayListItem/PlayListItem";
import * as S from "./styles";
import { useGetAllTracksQuery } from "../../../services/musicApi";
import { clearTracksId, getTracksId } from "../../../Slices/playerSlice";
import { getAuthors, getGenres } from "../../../Slices/filterSlice";

export default function CentralBlockPlayList() {
    const dispatch = useDispatch();

    const { data, error, isLoading, isSuccess } = useGetAllTracksQuery();

    const trackTitle = useSelector((state) => state.search.searchValue);
    const filterValue = useSelector((state) => state.filter.filterYearValue);
    const genresValue = useSelector((state) => state.filter.filterGenresValue);
    const authorsValue = useSelector(
        (state) => state.filter.filterAuthorsValue
    );

    useEffect(() => {
        dispatch(clearTracksId());

        if (isSuccess) {
            data?.map((track) => dispatch(getTracksId(track.id)));
            data?.map((track) => dispatch(getGenres(track.genre)));
            data?.map((track) => dispatch(getAuthors(track.author)));
        }
    }, [data]);

    const isEmptyList = !isLoading && !data?.length;

    const filterByYear = (a, b, value) => {
        if (value === "old") {
            return Date.parse(a.release_date) - Date.parse(b.release_date);
        }

        if (value === "new") {
            return Date.parse(b.release_date) - Date.parse(a.release_date);
        }

        return 0;
    };

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
        <div>
            {data
                ?.filter(({ name }) => name.toLowerCase().includes(trackTitle))
                .filter(({ genre }) =>
                    genresValue.length ? genresValue.includes(genre) : genre
                )
                .filter(({ author }) =>
                    authorsValue.length ? authorsValue.includes(author) : author
                )
                .sort((a, b) => filterByYear(a, b, filterValue))
                .map((track) => (
                    <PlayListItem key={track.id} track={track} />
                ))}
        </div>
    );
}
