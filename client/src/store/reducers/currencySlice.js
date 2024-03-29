import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    defaultCurrency: localStorage.currency || 0
}

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        update: (state, action) => {
            localStorage.currency = action.payload;
            state.defaultCurrency = action.payload;
        }
    }
});

export const { update } = currencySlice.actions;

export default currencySlice.reducer;
