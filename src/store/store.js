import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { episodesSlice } from "./episodes/episodes.js";
import { apiSlice } from "../api/api.js";
import { characterSlice } from "./character/character.js";
import { favlistSlice } from "./favorite/favbasket.js"
import { locationSlice } from "./location/location.js";

const rootReducer = combineReducers({
    episodes: episodesSlice.reducer,
    location: locationSlice.reducer,
    character: characterSlice.reducer,
    favlist: favlistSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});