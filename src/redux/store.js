import { configureStore } from "@reduxjs/toolkit";
import favorites from "./favorites";
import cart from "./cart";

export const store = configureStore(
    {
        reducer:{
            favorites : favorites,
            cart : cart
        }
        
    }
)