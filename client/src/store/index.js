import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./reducers/currencySlice";
import cartReducer from "./reducers/cartSlice";

const store = configureStore({
    reducer: {
        currency: currencyReducer,
        cart: cartReducer
    }
});

export default store;
