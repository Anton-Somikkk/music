/* eslint no-param-reassign: "error" */
import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
        isVisible: false,
        isPlaying: false,
        trackLink: "",
        id: 8,
    },
    reducers: {
        play: (state, action) => {
            state.isPlaying = action.payload;
            state.isVisible = true;
        },

        getTrack: (state, action) => {
            state.trackLink = action.payload;
            console.log(state.trackLink);
        },

        getTrackId: (state, action) => {
            state.id = action.payload;
        },
    },
});
export const { play, getTrack, getTrackId } = playerSlice.actions;

export default playerSlice.reducer;
