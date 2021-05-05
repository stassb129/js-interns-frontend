import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login} from "../api/login";


export const getToken = createAsyncThunk('login/fetchingMapItems', (username, password) => {
    return login(username, password)
})

const authSlice = createSlice({
    name: 'login',
    initialState: {
        login: {
            status: '',
            isLogin: false,
            token: '',
            error: {}
        }
    },
    reducers: {},
    extraReducers: {
        [getToken.pending]: (state) => {
            state.login.status = 'loading'
        },
        [getToken.fulfilled]: (state, action) => {
            state.login = {
                status: 'done',
                data: action.payload,
                error: {}
            }

        },
        [getToken.rejected]: (state, action) => {
            state.login = {
                status: 'error',
                data: null,
                error: action.payload,
            }
        }
    }
})

export default authSlice.reducer