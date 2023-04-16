import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PlayListTrack from "../MainCenterBlock/PlayListTrack/PlayListTrack";
import { useGetPlaylistByIdQuery } from "../../services/musicApi";
import { getPlayListName } from "../../Slices/playListSlice";
import { clearTracksId, getTracksId } from "../../Slices/playerSlice";
import { getAuthors, getGenres } from "../../Slices/filterSlice";

import * as S from "./styles";

export default function SelectPlayList(idCollection) {
    const dispatch = useDispatch();

    const { data, isLoading, isSuccess } =
        useGetPlaylistByIdQuery(idCollection);
    const trackTitle = useSelector((state) => state.search.searchValue);
    const filterValue = useSelector((state) => state.filter.filterYearValue);
    const genresValue = useSelector((state) => state.filter.filterGenresValue);
    const authorsValue = useSelector(
        (state) => state.filter.filterAuthorsValue
    );

    useEffect(() => {
        dispatch(clearTracksId());

        data?.items.map((track) => dispatch(getGenres(track.genre)));
        data?.items.map((track) => dispatch(getAuthors(track.author)));
        data?.items.map((track) => dispatch(getTracksId(track.id)));
    }, [data]);

    const filterByYear = (a, b, value) => {
        if (value === "old") {
            return Date.parse(a.release_date) - Date.parse(b.release_date);
        }

        if (value === "new") {
            return Date.parse(b.release_date) - Date.parse(a.release_date);
        }

        return 0;
    };

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
                {data?.items
                    ?.filter(({ name }) =>
                        name.toLowerCase().includes(trackTitle)
                    )
                    .filter(({ genre }) =>
                        genresValue.length ? genresValue.includes(genre) : genre
                    )
                    .filter(({ author }) =>
                        authorsValue.length
                            ? authorsValue.includes(author)
                            : author
                    )
                    .sort((a, b) => filterByYear(a, b, filterValue))
                    .map(
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
