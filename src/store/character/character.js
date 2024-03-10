

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    character: [],
    pageCount: 1,
    isLoading: false,
    error: null
}
export const getCharacter = createAsyncThunk("character/getCharacter", async ({ params }) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character?${params}`)

    return {
        results: data.results,
        info: data.info
    }
})

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCharacter.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCharacter.fulfilled, (state, action) => {
                state.isLoading = false;
                state.character = action.payload.results;
                state.pageCount = action.payload.info.pages;
            })
            .addCase(getCharacter.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? 'Error fetching characters';
            });
    },
});
export const characterActions = characterSlice.actions
