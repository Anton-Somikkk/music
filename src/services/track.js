import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trackApi = createApi({
    reducerPath: "trackApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://painassasin.online/catalog/track/",
    }),

    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => "all",
        }),
    }),
});

export const favoriteTrackApi = createApi({
    reducerPath: "favoriteTrackApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://painassasin.online/catalog/track/",
    }),

    endpoints: (builder) => ({
        addFavoriteTrack: builder.mutation({
            query: ({ id }) => ({
                url: `${id}/favorite/`,
                method: "POST",
            }),
        }),
    }),
});

export const { useGetAllTracksQuery } = trackApi;
export const { useGetAllFavoriteTracksQuery, useAddFavoriteTrackMutation } =
    favoriteTrackApi;
