import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMapItems} from "../api/getMapItems";
import {getPlaces} from "../api/getPlaces";


export const fetchPlaces = createAsyncThunk('places/fetchingPlaces', (coords) => {
    return getPlaces(coords)
})

const placesSlice = createSlice({
    name: 'places',
    initialState: {
        status: '',
        data: null,
        errors: {}
    },
    reducers: {},
    extraReducers: {
        [fetchPlaces.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchPlaces.fulfilled]: (state, action) => {
            state.status = 'done'
            state.data = action.payload
            state.errors = {}
        },
        [fetchPlaces.rejected]: (state, action) => {
            state.status = 'error'
            state.errors = action.payload
        }
    }
})

export default placesSlice.reducer