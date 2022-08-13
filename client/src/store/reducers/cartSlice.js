import { createSlice } from "@reduxjs/toolkit";
import hasExactAttributes from "../../utils/hasExactAttributes";

const initialState = {
    cartItems: localStorage.cartItems ?  JSON.parse(localStorage.cartItems) : {cartAmount: 0},
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            let { id, selectedAttributes, amount, ...restOfData } = action.payload;
            let stringAttributes = JSON.stringify(selectedAttributes);

            // if new product is not in cart, add it
            if(state.cartItems[action.payload.id] == null){
                let newItem = {
                    [id]: {
                        data: {...restOfData},
                        itemEntriesByAttributes: {
                            [stringAttributes]: amount
                        },
                        totalInCart: 1
                    }
                }

                state.cartItems = {
                    ...state.cartItems,
                    ...newItem
                }
            }
            else{// if new product is in cart, check if chosen attributes are the exact same
                 // if exact attributes, just increment amount of said product, else add new entry
                state.cartItems[action.payload.id].itemEntriesByAttributes[stringAttributes] ? 
                    state.cartItems[action.payload.id].itemEntriesByAttributes[stringAttributes] += 1 :
                    state.cartItems[action.payload.id].itemEntriesByAttributes[stringAttributes] = 1;

                state.cartItems[action.payload.id].totalInCart += 1;
            }
            
            // add to total cart amount regardless
            state.cartItems.cartAmount++;
            localStorage.cartItems = JSON.stringify(state.cartItems);
        },

        updateItemAmount: (state, action) => {
            let { updateValue, productId, itemAttributes } = action.payload;

            state.cartItems[productId].itemEntriesByAttributes[itemAttributes] += updateValue;
            state.cartItems[productId].totalInCart += updateValue;
            
            // if specific item amount is 0, remove from list
            if(!state.cartItems[productId].itemEntriesByAttributes[itemAttributes])
                delete state.cartItems[productId].itemEntriesByAttributes[itemAttributes];
            
            // if 0 products of that id, remove from cart
            const itemEntries = Object.keys(state.cartItems[productId].itemEntriesByAttributes);
            if(!itemEntries.length){
                delete state.cartItems[productId];
            }

            state.cartItems.cartAmount += updateValue;
            localStorage.cartItems = JSON.stringify(state.cartItems);
        }
    }
});

export const { addItemToCart, updateItemAmount } = cartSlice.actions;

export default cartSlice.reducer;
