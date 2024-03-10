
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    location: [],
    pageCount: 1,
    isLoading: false,
    erro: null
}
export const getLocations = createAsyncThunk("location/getLocation", async ({ params }) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location?${params}`)
    return {
        results: data.results,
        info: data.info
    }
})

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLocations.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getLocations.fulfilled, (state, action) => {
                state.isLoading = false;
                state.location = action.payload.results;
                state.pageCount = action.payload.info.pages;
            })
            .addCase(getLocations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? 'Error fetching characters';
            });
    },
});
export const locationActions = locationSlice.actions
