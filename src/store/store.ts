import { configureStore } from "@reduxjs/toolkit";
import { cartSLice } from "./cart-slice";

export const store = configureStore({
    reducer: cartSLice.reducer
})