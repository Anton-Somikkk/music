import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { trackApi } from "../services/musicApi";
import favoriteReducer from "../Slices/favoriteSlice";
import authorizationReducer from "../Slices/authorizationSlice";

const rootReducer = combineReducers({
    [trackApi.reducerPath]: trackApi.reducer,
    favorite: favoriteReducer,
    authorization: authorizationReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(trackApi.middleware),
});
