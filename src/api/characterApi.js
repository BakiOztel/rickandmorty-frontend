import { apiSlice } from "./api.js";

export const CharacterSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCharacter: builder.query({
            query: (id) => {
                return {
                    url: `/character/${id}`
                }
            }
        })
    })
});

export const { useGetCharacterQuery } = CharacterSlice;