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

export const { useGetAllTracksQuery } = trackApi;
