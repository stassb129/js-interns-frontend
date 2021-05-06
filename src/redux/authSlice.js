import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login} from "../api/auth";


export const getToken = createAsyncThunk('auth/fetchingToken', (user) => {
    return login(user.username, user.password)
})

const authSlice = createSlice({
    name: 'auth',
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
                token: action.payload.access_token,
                isLogin: true,
                error: {}
            }
            localStorage.setItem('token', action.payload.access_token)
        },
        [getToken.rejected]: (state, action) => {
            state.login = {
                status: 'error',
                isLogin: false,
                error: action.error
            }
            localStorage.removeItem('token')
        }
    }
})

export default authSlice.reducer