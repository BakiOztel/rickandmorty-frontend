

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    episodes: [],
    pageCount: 1,
    isLoading: false,
    erro: null
}
export const getEpisodes = createAsyncThunk("episode/getEpisodes", async ({ params }) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode?${params}`)
    return {
        results: data.results,
        info: data.info
    }
})

export const episodesSlice = createSlice({
    name: 'episodes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEpisodes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getEpisodes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.episodes = action.payload.results;
                state.pageCount = action.payload.info.pages;
            })
            .addCase(getEpisodes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? 'Error fetching characters';
            });
    },
});
export const episodesActions = episodesSlice.actions
