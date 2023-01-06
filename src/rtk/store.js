import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";

export const store = configureStore({
    reducer: {
        product: {
            products: productsSlice
        }
    },
})