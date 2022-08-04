import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.cartItems ?  JSON.parse(localStorage.cartItems) : {cartAmount: 0},
};

const findEqual = (currentItem, newItem) => {
    const attributes = Object.keys(newItem.selectedAttributes);
    const isAttributeEqual = attributes.every(
        attribute => {
            const current = currentItem.selectedAttributes[attribute];
            const newAttr = newItem.selectedAttributes[attribute];
            
            return current === newAttr;
    })

    return isAttributeEqual;
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            let { id, ...restOfData } = action.payload; 

            // if new product is not in cart, add it
            if(state.cartItems[action.payload.id] == null){
                let newItem = {
                    [id]: [{
                        ...restOfData
                    }]
                }

                state.cartItems = {
                    ...state.cartItems,
                    ...newItem
                }
            }
            else{// if new product is in cart, check if chosen attributes are the exact same
                 // if exact attributes, just increment amount of said product, else add new entry
                let isExactProduct = false;

                state.cartItems[action.payload.id].some(
                    item => {
                        isExactProduct = findEqual(item, action.payload);

                        if(isExactProduct)
                            item.amount++;

                        return isExactProduct;
                    });

                if(!isExactProduct)
                    state.cartItems[action.payload.id].push({...restOfData});
            }
            
            // add to total cart amount regardless
            state.cartItems.cartAmount++;
            localStorage.cartItems = JSON.stringify(state.cartItems);
        }
    }
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
