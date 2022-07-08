import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./reducers/currencyReducer";

const store = configureStore({
    reducer: currencyReducer
});

export default store;
