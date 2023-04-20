import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritesTracks: [],
};

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        removeTrack: (state, action) => ({
            ...state,
            favoritesTracks: state.favoritesTracks.filter(
                (track) => track.id !== action.payload.id
            ),
        }),
        addTrack: (state, action) => {
          
            const index = state.favoritesTracks.findIndex(
                (track) => track.id === action.payload.id
            );
            if (index === -1) {
                state.favoritesTracks.push(action.payload);
            } else {
                state.favoritesTracks.splice(index, 1);
            }
        },
    },
});

export const { removeTrack, addTrack } = favoriteSlice.actions;

export default favoriteSlice.reducer;
