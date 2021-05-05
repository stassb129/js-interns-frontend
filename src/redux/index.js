import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mapItemsSlice from "./mapItemsSlice";
import authSlice from "./authSlice";


const rootReducer = combineReducers({
    mapItems: mapItemsSlice,
    auth: authSlice
})

export const store = configureStore({
    reducer: rootReducer
})