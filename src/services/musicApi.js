import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://painassasin.online";

export const trackApi = createApi({
    reducerPath: "trackApi",
    tagTypes: ["Tracks"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),

    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => "/catalog/track/all",
        }),

        getFavoriteTracks: builder.query({
            query: () => ({
                url: "/catalog/track/favorite/all/",
            }),
            providesTags: ["Tracks"],
        }),

        addFavoriteTrack: builder.mutation({
            query: (id) => ({
                url: `/catalog/track/${id}/favorite/`,
                method: "POST",
            }),
            invalidatesTags: ["Tracks"],
        }),

        getToken: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/token/',
                method: 'POST',
                body: payload,
            }),
        }),

        userLogin: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/login/',
                method: 'POST',
                body: payload,
            }),
        }),

        userRegistration: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/signup/',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
});

export const {
    useGetAllTracksQuery,
    useGetFavoriteTracksQuery,
    useAddFavoriteTrackMutation,
    useGetTokenMutation,
    useUserLoginMutation,
    useUserRegistrationMutation,
} = trackApi;
