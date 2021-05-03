import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mapItemsSlice from "./mapItemsSlice";



const rootReducer = combineReducers({
    mapItems: mapItemsSlice
})

export const store = configureStore({
    reducer: rootReducer
})