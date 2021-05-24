import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import mapItemsSlice from "./mapItemsSlice";
import authSlice from "./authSlice";
import placesSlice from "./placesSlice";


const rootReducer = combineReducers({
    mapItems: mapItemsSlice,
    auth: authSlice,
    places: placesSlice
})
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware
})