import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.cartItems ?  JSON.parse(localStorage.cartItems) : []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push(action.payload);
            localStorage.cartItems = JSON.stringify(state.cartItems);
        }
    }
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
