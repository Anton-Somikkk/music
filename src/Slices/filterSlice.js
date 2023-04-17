/* eslint no-param-reassign: "error" */

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filterYear: false,
        filterGenre: false,
        filterAuthor: false,
        filterYearValue: "default",
        filterGenresValue: [],
        filterAuthorsValue: [],
        genres: [],
        authors: [],
    },
    reducers: {
        getGenres: (state, action) => {
            if (action.payload) {
                state.genres = state.genres.concat(action.payload);
            }
        },

        getAuthors: (state, action) => {
            state.authors = state.authors.concat(action.payload);
        },

        filterByYear: (state, action) => {
            state.filterYearValue = action.payload;
            state.filterYear = action.payload !== "default";
        },

        addFilterByGenre: (state, action) => {
            state.filterGenresValue.push(action.payload);
            state.filterGenre = true;
        },

        deleteGenres: (state, action) => {
            state.filterGenresValue = state.filterGenresValue.filter(
                (genre) => genre !== action.payload
            );
            if (!state.filterGenresValue.length) {
                state.filterGenre = false;
            }
        },

        addFilterByAuthor: (state, action) => {
            state.filterAuthorsValue.push(action.payload);
            state.filterAuthor = true;
        },

        deleteAuthors: (state, action) => {
            state.filterAuthorsValue = state.filterAuthorsValue.filter(
                (author) => author !== action.payload
            );
            if (!state.filterAuthorsValue.length) {
                state.filterAuthor = false;
            }
        },
    },
});

export const {
    filterByYear,
    getGenres,
    getAuthors,
    deleteGenres,
    addFilterByGenre,
    addFilterByAuthor,
    deleteAuthors,
} = filterSlice.actions;

export default filterSlice.reducer;
