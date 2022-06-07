import {createContext} from "react";
import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../store";

const store = configureStore({
    reducer: counterSlice.reducer
})
export const CountContext = createContext<any>(store);
