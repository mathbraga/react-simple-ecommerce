import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.cartItems ?  JSON.parse(localStorage.cartItems) : [],
    cartAmount: localStorage.cartItems ?  JSON.parse(localStorage.cartItems).length : 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push(action.payload);
            state.cartAmount += 1;
            localStorage.cartItems = JSON.stringify(state.cartItems);
        }
    }
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
