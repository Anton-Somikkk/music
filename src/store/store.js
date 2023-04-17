import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { trackApi } from "../services/musicApi";
import favoriteReducer from "../Slices/favoriteSlice";
import authorizationReducer from "../Slices/authorizationSlice";
import playerReducer from "../Slices/playerSlice";
import filterReducer from "../Slices/filterSlice";
import searchReducer from "../Slices/searchSlice";

const rootReducer = combineReducers({
    [trackApi.reducerPath]: trackApi.reducer,
    favorite: favoriteReducer,
    authorization: authorizationReducer,
    player: playerReducer,
    filter: filterReducer,
    search: searchReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(trackApi.middleware),
});
