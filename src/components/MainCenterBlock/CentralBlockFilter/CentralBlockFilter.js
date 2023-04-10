import { useRef, useState } from "react";
import FilterPopupListAuthorsElementsRender from "../FilterPopupListAuthors/FilterPopupListAuthors";
import FilterPopupListYearsElementsRender from "../FilterPopupListYears/FilterPopupListYears";
import FilterPopupListGenreElementsRender from "../FilterPopupListGenre/FilterPopupListGenre";
import { useThemeContext } from "../../../count-context";
import * as S from "./styles";

export default function CentralBlockFilter() {
    const { theme } = useThemeContext();

    const [visibleListAuthors, setVisibleListAuthors] = useState(false);
    const [visibleListYears, setVisibleListYears] = useState(false);
    const [visibleListGenre, setVisibleListGenre] = useState(false);

    const listAuthors = useRef(null);
    const listYears = useRef(null);
    const listGenre = useRef(null);

    const toggleVisibilityListAuthors = () => {
        setVisibleListAuthors(!visibleListAuthors);
        setVisibleListYears(null);
        setVisibleListGenre(null);
        listAuthors.current.classList.add("button-focus");
        listYears.current.classList.remove("button-focus");
        listGenre.current.classList.remove("button-focus");
    };

    const toggleVisibilityListYears = () => {
        setVisibleListYears(!visibleListYears);
        setVisibleListAuthors(null);
        setVisibleListGenre(null);
        listYears.current.classList.add("button-focus");
        listAuthors.current.classList.remove("button-focus");
        listGenre.current.classList.remove("button-focus");
    };

    const toggleVisibilityListGenre = () => {
        setVisibleListGenre(!visibleListGenre);
        setVisibleListAuthors(null);
        setVisibleListYears(null);
        listGenre.current.classList.add("button-focus");
        listYears.current.classList.remove("button-focus");
        listAuthors.current.classList.remove("button-focus");
    };

    return (
        <S.CenterBlockFilter>
            <S.FilterTitle
                style={{
                    color: theme.colorButtonFilter,
                }}
            >
                Искать по:
            </S.FilterTitle>

            <div
                className={theme.filterButtonAuthor}
                ref={listAuthors}
                role="presentation"
                onClick={toggleVisibilityListAuthors}
            >
                исполнителю
            </div>

            <div
                className={theme.filterButtonYear}
                ref={listYears}
                role="presentation"
                onClick={toggleVisibilityListYears}
            >
                году выпуска
            </div>

            <div
                className={theme.filterButtonGenre}
                ref={listGenre}
                role="presentation"
                onClick={toggleVisibilityListGenre}
            >
                жанру
            </div>

            {visibleListAuthors && (
                <S.PopupListAuthor
                    role="presentation"
                    onClick={toggleVisibilityListAuthors}
                >
                    <FilterPopupListAuthorsElementsRender />
                </S.PopupListAuthor>
            )}

            {visibleListYears && (
                <S.PopupListYear
                    role="presentation"
                    onClick={toggleVisibilityListYears}
                >
                    <FilterPopupListYearsElementsRender />
                </S.PopupListYear>
            )}

            {visibleListGenre && (
                <S.PopupListGenre
                    role="presentation"
                    onClick={toggleVisibilityListGenre}
                >
                    <FilterPopupListGenreElementsRender />
                </S.PopupListGenre>
            )}
        </S.CenterBlockFilter>
    );
}
