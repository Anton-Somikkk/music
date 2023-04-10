import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { trackApi } from "../services/musicApi";
import favoriteReducer from "../Slices/favoriteSlice";
import authorizationReducer from "../Slices/authorizationSlice";
import playerReducer from "../Slices/playerSlice";

const rootReducer = combineReducers({
    [trackApi.reducerPath]: trackApi.reducer,
    favorite: favoriteReducer,
    authorization: authorizationReducer,
    player: playerReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(trackApi.middleware),
});
