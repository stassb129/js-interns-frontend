import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPlaces} from "../api/getPlaces";


export const fetchPlaces = createAsyncThunk('places/fetchingPlaces', (param, thunkAPI) => {
    const sort = thunkAPI.getState().places.sort
    const coords = thunkAPI.getState().mapItems.items.coords

    return getPlaces(coords, sort)
})

export const fetchNextPlaces = createAsyncThunk('places/fetchingNextPlaces', (param, thunkAPI) => {
    const currentPage = +thunkAPI.getState().places.currentPage + 1
    const coords = thunkAPI.getState().mapItems.items.coords
    const sort = thunkAPI.getState().places.sort
    return getPlaces(coords, sort, currentPage)
})

const placesSlice = createSlice({
    name: 'places',
    initialState: {
        statusMapUpdate: '',
        status: '',
        currentPage: 1,
        sort: {
            upPrice: false,
            downPrice: false,
            upRate: false,
            beds: 1,
            priceRange: [0, 5000]
        },
        data: null,
        errors: {}
    },
    reducers: {
        setSort(state, action) {
            if (action.payload === 'upPrice') {
                state.sort.upPrice = !state.sort.upPrice
            }
            if (action.payload === 'downPrice') {
                state.sort.downPrice = !state.sort.downPrice
            }
            if (action.payload === 'upRate') {
                state.sort.upRate = !state.sort.upRate
            }
        },
        setFilter(state, action) {
            if (action.payload.type === 'priceRange') {
                state.sort.priceRange = action.payload.value
            }
        },
        setBeds(state, action) {
            state.sort.beds = action.payload
        }
    },
    extraReducers: {
        [fetchPlaces.pending]: (state) => {
            state.status = 'loading'
            state.statusMapUpdate = 'loading'
        },
        [fetchPlaces.fulfilled]: (state, action) => {
            state.statusMapUpdate = 'done'
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

export const {setSort, setBeds, setFilter} = placesSlice.actions
export default placesSlice.reducer