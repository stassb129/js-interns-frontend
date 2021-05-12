import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMapItems} from "../api/getMapItems";
import {useDispatch} from "react-redux";

const dispatch = useDispatch

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
            coords: {}
        }
    },
    reducers: {
        setCoords: (state, action) => {
            state.items.coords = action.payload
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

export const {setCoords} = mapItemsSlice.actions
export default mapItemsSlice.reducer