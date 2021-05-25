import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import mapItemsSlice from "./mapItemsSlice";
import authSlice from "./authSlice";
import placesSlice from "./placesSlice";
import paymentSlice from "./paymentSlice";


const rootReducer = combineReducers({
    mapItems: mapItemsSlice,
    auth: authSlice,
    places: placesSlice,
    payment: paymentSlice
})
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware
})