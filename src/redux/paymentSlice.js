import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {sendPayment} from "../api/sendPayment";

export const fetchPayment = createAsyncThunk('payment/fetchingMapItems', ({id, amount, description, metadata}) => {
    return sendPayment(id, amount, description, metadata)

})

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        status: ''
    },
    reducers: {
        setStatus(state, action) {
            state.status = action.payload
        }
    },
    extraReducers: {
        [fetchPayment.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchPayment.fulfilled]: (state, action) => {
            state.status = "success"
            state.error = {}
        },
        [fetchPayment.rejected]: (state, action) => {
            state.status = 'error'
            state.data = {}
            state.error = action.payload
        }
    }
})

export const {setStatus} = paymentSlice.actions
export default paymentSlice.reducer