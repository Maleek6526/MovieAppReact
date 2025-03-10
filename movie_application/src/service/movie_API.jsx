import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY;

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL,
        prepareHeaders: (headers)=>{
            headers.set('Authorization', `Bearer ${API_KEY}`);
            return headers;
        }
    }),


    endpoints:(build) => ({
        getTopRatedMovies: build.query({
            query: () => `/movie/top_rated?api_key=${API_KEY}`
        }),

        getUpComingMovies: build.query({
            query: () => `/movie/upcoming?api_key=${API_KEY}`
        }),

        getNowPlayingMovies: build.query({
            query: () => `/movie/now_playing?api_key=${API_KEY}`
        }),
    }),
})

export const{useGetTopRatedMoviesQuery, useGetUpComingMoviesQuery, useGetNowPlayingMoviesQuery} = movieApi;