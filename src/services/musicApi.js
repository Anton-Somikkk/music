import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://painassasin.online";

export const trackApi = createApi({
    reducerPath: "trackApi",
    tagTypes: ["AllTracks", "FavoriteTracks"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const { token } = getState().authorization;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),

    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => "/catalog/track/all",
            providesTags: ["AllTracks"],
        }),

        getFavoriteTracks: builder.query({
            query: () => ({
                url: "/catalog/track/favorite/all/",
            }),
            providesTags: ["FavoriteTracks"],
        }),

        addFavoriteTrack: builder.mutation({
            query: (id) => ({
                url: `/catalog/track/${id}/favorite/`,
                method: "POST",
            }),
            invalidatesTags: ["FavoriteTracks", "AllTracks"],
        }),

        getToken: builder.mutation({
            query: ({ ...payload }) => ({
                url: "/user/token/",
                method: "POST",
                body: payload,
            }),
        }),

        userLogin: builder.mutation({
            query: ({ ...payload }) => ({
                url: "/user/login/",
                method: "POST",
                body: payload,
            }),
        }),

        userRegistration: builder.mutation({
            query: ({ ...payload }) => ({
                url: "/user/signup/",
                method: "POST",
                body: payload,
            }),
        }),

        getPlaylistById: builder.query({
            query: ({ id }) => ({
                url: `/catalog/selection/${id}/`,
            }),
            providesTags: ["AllTracks"],
        }),

        refreshToken: builder.mutation({
            query: ({ ...payload }) => ({
                url: "/user/token/refresh/",
                method: "POST",
                body: payload,
            }),
        }),

        deleteFavoriteTrack: builder.mutation({
            query: (payload) => ({
                url: `/catalog/track/${payload}/favorite/`,
                method: "DELETE",
            }),
            invalidatesTags: ["FavoriteTracks", "AllTracks"],
        }),

        getTrackById: builder.query({
            query: (id) => ({
                url: `/catalog/track/${id}`,
            }),
            providesTags: ['AllTracks'],
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
    useGetPlaylistByIdQuery,
    useRefreshTokenMutation,
    useDeleteFavoriteTrackMutation,
    useGetTrackByIdQuery,
} = trackApi;
