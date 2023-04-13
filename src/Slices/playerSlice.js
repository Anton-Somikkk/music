/* eslint no-param-reassign: "error" */
/* eslint-disable prefer-destructuring */
import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
        isVisible: false,
        isPlaying: false,
        trackLink: "",
        id: 8,
        ids: [],
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

        playNextTrack: (state, action) => {
            if (state.ids.indexOf(state.id) > state.ids.length) {
                state.id = state.ids[0]
            }
            state.id = state.ids[action.payload + 1]
        },

        playPrevTrack: (state, action) => {
            state.id = state.ids[action.payload - 1]
        },
    },
});
export const { play, getTrack, getTrackId, playNextTrack, playPrevTrack } = playerSlice.actions;

export default playerSlice.reducer;
