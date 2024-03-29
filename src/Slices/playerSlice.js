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
        },

        getTrackId: (state, action) => {
            state.id = action.payload;
        },

        getTracksId: (state, action) => {
            state.ids.push(Number(action.payload));
        },

        clearTracksId: (state) => {
            state.ids = [];
        },

        playNextTrack: (state, action) => {
            if (state.ids.indexOf(state.id) > state.ids.length) {
                state.id = state.ids[0];
            }
            state.id = state.ids[action.payload + 1];
        },

        playPrevTrack: (state, action) => {
            state.id = state.ids[action.payload - 1];
        },

        shuffleTracks: (state) => {
            state.isShuffle = true;
            for (let i = state.ids.length - 1; i > 0; i -= 1) {
                const iRandom = Math.floor(Math.random() * (i + 1));
                [state.ids[i], state.ids[iRandom]] = [
                    state.ids[iRandom],
                    state.ids[i],
                ];
            }
        },

        sortTracks: (state) => {
            state.isShuffle = false;
            state.ids = state.ids.sort((a, b) => a - b);
        },

        repeatTrack: (state) => {
            state.isRepeat = !state.isRepeat;
        },
    },
});
export const {
    play,
    getTrack,
    getTrackId,
    playNextTrack,
    playPrevTrack,
    getTracksId,
    clearTracksId,
    shuffleTracks,
    sortTracks,
    repeatTrack,
} = playerSlice.actions;

export default playerSlice.reducer;
