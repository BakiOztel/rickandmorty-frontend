import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
});


export const apiSlice = createApi({
    baseQuery,
    endpoints: builder => ({})
});