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
            error: {}
        }
    },
    reducers: {},
    extraReducers: {
        [fetchMapItems.pending]: (state, action) => {
            state.items.status = 'loading'
        },
        [fetchMapItems.fulfilled]: (state, action) => {
            state.items = {
                status: 'done',
                data: action.payload,
                error: {}
            }
        },
        [fetchMapItems.rejected]: (state, action) => {
            state.items = {
                status: 'error',
                data: null,
                error: action.payload,
            }
        }
    }
})

export default mapItemsSlice.reducer