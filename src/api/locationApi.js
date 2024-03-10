import { apiSlice } from "./api.js";

export const LocationSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLocation: builder.query({
            query: (id) => {
                return {
                    url: `/location/${id}`
                }
            }
        })
    })
});

export const { useGetLocationQuery } = LocationSlice;