import { apiSlice } from "./api.js";

export const EpisodeSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEpisode: builder.query({
            query: (id) => {
                return {
                    url: `/episode/${id}`
                }
            }
        })
    })
});

export const { useGetEpisodeQuery } = EpisodeSlice;