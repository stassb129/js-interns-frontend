import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMapItems} from "../api/getMapItems";

export const fetchMapItems = createAsyncThunk('mapItems/fetchingMapItems', (coords) => {
    return getMapItems(coords)
})

const mapItemsSlice = createSlice({
    name: 'map',
    initialState: {
        items: {
            status: '',
            data: null,
            error: {},
            coords: {},
            centerCoords: null,
            zoom: null
        }
    },
    reducers: {
        setCoords: (state, action) => {
            state.items.coords = action.payload
        },

        setCenterCoords: (state, action) => {
            state.items.centerCoords = action.payload.centerCoords
            state.items.zoom = action.payload.zoom
        }
    },
    extraReducers: {
        [fetchMapItems.pending]: (state) => {
            state.items.status = 'loading'
        },
        [fetchMapItems.fulfilled]: (state, action) => {
            state.items.status = "done"
            state.items.data = action.payload
            state.items.error = {}

        },
        [fetchMapItems.rejected]: (state, action) => {
            state.items = {
                status: 'error',
                data: {},
                error: action.payload,
            }
        }
    }
})

export const {setCoords, setCenterCoords} = mapItemsSlice.actions
export default mapItemsSlice.reducer