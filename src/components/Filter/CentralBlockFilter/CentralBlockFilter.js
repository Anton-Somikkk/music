import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import FilterPopupListAuthors from "../FilterPopupListAuthors/FilterPopupListAuthors";
import FilterPopupListGenre from "../FilterPopupListGenre/FilterPopupListGenre";
import FilterPopupListYears from "../FilterPopupListYears/FilterPopupListYears";
import {
    addFilterByAuthor,
    addFilterByGenre,
    deleteAuthors,
    deleteGenres,
} from "../../../Slices/filterSlice";
import * as S from "./styles";
import { useThemeContext } from "../../../count-context";

export default function Filter() {
    const dispatch = useDispatch();

    const genres = useSelector((state) => state.filter.genres);
    const authors = useSelector((state) => state.filter.authors);

    const filteredByYear = useSelector((state) => state.filter.filteredByYear);
    const filteredByGenre = useSelector(
        (state) => state.filter.filteredByGenre
    );
    const filteredByAuthor = useSelector(
        (state) => state.filter.filteredByAuthor
    );
    const genresValue = useSelector((state) => state.filter.filterGenresValue);
    const authorsValue = useSelector(
        (state) => state.filter.filterAuthorsValue
    );

    const [isActive, setActive] = useState(null);

    const onAddGenre = (e) => {
        if (!e.target.checked) {
            dispatch(deleteGenres(e.target.value));
        } else {
            dispatch(addFilterByGenre(e.target.value));
        }
    };

    const onAddAuthor = (e) => {
        if (!e.target.checked) {
            dispatch(deleteAuthors(e.target.value));
        } else {
            dispatch(addFilterByAuthor(e.target.value));
        }
    };

    const { theme } = useThemeContext();

    return (
        <S.FilterWrapper
            style={{ backgroundColor: theme.background, color: theme.color }}
        >
            <S.FilterTitle
                style={{
                    backgroundColor: theme.background,
                    color: theme.color,
                }}
            >
                Искать по:
            </S.FilterTitle>
            <S.ButtonWrapper
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? "author" : null
                    )
                }
            >
                <S.FilterButton
                    border={theme.border}
                    isActive={filteredByAuthor}
                >
                    <p>исполнителю</p>
                    <S.FilterButtonCount isActive={filteredByAuthor}>
                        {String(authorsValue.length)}
                    </S.FilterButtonCount>
                </S.FilterButton>

                <S.AuthorWrapper
                    isActive={isActive}
                    style={{
                        backgroundColor: theme.backgroundNote,
                        color: theme.color,
                        border: theme.borderFilter,
                    }}
                >
                    <S.FilterItems>
                        {authors
                            .filter(
                                (item, pos) => authors.indexOf(item) === pos
                            )
                            .map((item) => (
                                <FilterPopupListAuthors
                                    key={item}
                                    value={item}
                                    onClickFunction={onAddAuthor}
                                />
                            ))}
                    </S.FilterItems>
                </S.AuthorWrapper>
            </S.ButtonWrapper>
            <S.ButtonWrapper
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? "year" : null
                    )
                }
            >
                <S.FilterButton border={theme.border} isActive={filteredByYear}>
                    <p>году выпуска</p>
                    <S.FilterButtonCount isActive={filteredByYear}>
                        1
                    </S.FilterButtonCount>
                </S.FilterButton>
                <S.YearWrapper
                    isActive={isActive}
                    style={{
                        backgroundColor: theme.backgroundNote,
                        color: theme.color,
                        border: theme.borderFilter,
                    }}
                >
                    <FilterPopupListYears />
                </S.YearWrapper>
            </S.ButtonWrapper>
            <S.ButtonWrapper
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? "genre" : null
                    )
                }
            >
                <S.FilterButton
                    border={theme.border}
                    isActive={filteredByGenre}
                >
                    <p>жанру</p>
                    <S.FilterButtonCount isActive={filteredByGenre}>
                        {String(genresValue.length)}
                    </S.FilterButtonCount>
                </S.FilterButton>

                <S.GenreWrapper
                    isActive={isActive}
                    style={{
                        backgroundColor: theme.backgroundNote,
                        color: theme.color,
                        border: theme.borderFilter,
                    }}
                >
                    <S.FilterItems>
                        {genres
                            .filter((item, pos) => genres.indexOf(item) === pos)
                            .map((item) => (
                                <FilterPopupListGenre
                                    key={item}
                                    value={item}
                                    onClickFunction={onAddGenre}
                                />
                            ))}
                    </S.FilterItems>
                </S.GenreWrapper>
            </S.ButtonWrapper>
        </S.FilterWrapper>
    );
}
