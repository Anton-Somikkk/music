/* eslint no-param-reassign: "error" */
import { createSlice } from "@reduxjs/toolkit";

const playListSlice = createSlice({
    name: "playlists",
    initialState: { id: "1", name: "Загрузка..." },
    reducers: {
        getPlayListId: (state, action) => {
            state.id = action.payload;
        },
        getPlayListName: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { getPlayListId, getPlayListName } = playListSlice.actions;

export default playListSlice.reducer;
