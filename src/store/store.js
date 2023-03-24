import { configureStore } from "@reduxjs/toolkit";
import { trackApi } from "../services/track";

export const store = configureStore({
    reducer: {
        [trackApi.reducerPath]: trackApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(trackApi.middleware),
});
