import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMapItems} from "../api/getMapItems";
import {getPlaces} from "../api/getPlaces";


export const fetchPlaces = createAsyncThunk('places/fetchingPlaces', (coords) => {
    return getPlaces(coords)
})

export const fetchNextPlaces = createAsyncThunk('places/fetchingNextPlaces', (param, thunkAPI) => {
    const currentPage = +thunkAPI.getState().places.currentPage + 1
    const coords = thunkAPI.getState().mapItems.items.coords
    return getPlaces(coords, currentPage)
})

const placesSlice = createSlice({
    name: 'places',
    initialState: {
        status: '',
        currentPage: 1,
        sort: {},
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
            state.currentPage = 1
            state.errors = {}
        },
        [fetchPlaces.rejected]: (state, action) => {
            state.status = 'error'
            state.errors = action.payload
        },

        [fetchNextPlaces.pending]: (state) => {
            state.status = 'loading'
        },

        [fetchNextPlaces.fulfilled]: (state, action) => {
            state.status = 'done'
            state.errors = {}
            if (action.payload.data.length) {
                state.data.data = [...state.data.data, ...action.payload.data]
                state.currentPage = action.payload.page

            }
        },

        [fetchNextPlaces.rejected]: (state, action) => {
            state.status = 'error'
            state.errors = action.payload
        }
    }
})

export default placesSlice.reducer