import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    listItems: localStorage.getItem("favItems") ? JSON.parse(localStorage.getItem("favItems")) : []
}


export const favlistSlice = createSlice({
    name: "favlist",
    initialState,
    reducers: {
        addToBasket(state, action) {
            state.listItems = [...state.listItems, action.payload]
            localStorage.setItem('favItems', JSON.stringify(state.listItems));
        },
        deleteToList(state, action) {
            const listItemId = action.payload;
            state.listItems = state.listItems.filter(item => item.id !== listItemId);

            let savedItems = JSON.parse(localStorage.getItem('favItems')) || [];
            savedItems = savedItems.filter(item => item.id !== listItemId);
            localStorage.setItem('favItems', JSON.stringify(savedItems))
        }
    }
});


export const { addToBasket, deleteToList } = favlistSlice.actions;

export default favlistSlice.reducer;