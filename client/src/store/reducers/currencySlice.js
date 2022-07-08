import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    defaultCurrency: localStorage.currency || "$"
}

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        update: (state, action) => {
            state.defaultCurrency = action.payload
        }
    }
});

export const { update } = currencySlice.actions;

export default currencySlice.reducer;
