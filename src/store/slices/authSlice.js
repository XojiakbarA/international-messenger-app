import {createSlice} from "@reduxjs/toolkit"
import {login, register} from "../asyncThunks/authAsyncThunk"
import {isExpired} from "react-jwt"

const initialState = {
    loading: false,
    message: null,
    error: false,
    isAuth: !isExpired(localStorage.getItem("token"))
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        oauth2Login: (state, action) => {
            state.message = action.payload.message
            state.error = false
            state.isAuth = true
            localStorage.setItem("token", action.payload.token)
        },
        oauth2LoginError: (state, action) => {
            state.message = action.payload.message
            state.error = true
            state.isAuth = false
            localStorage.removeItem("token")
        },
        logout: (state) => {
            state.message = "You are logged out"
            state.error = false
            state.isAuth = false
            localStorage.removeItem("token")
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true
            state.message = null
            state.error = false
            state.isAuth = false
            localStorage.removeItem("token")
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false
            state.message = action.payload.message
            state.error = false
            state.isAuth = true
            localStorage.setItem("token", action.payload.token)
        },
        [login.rejected]: (state, action) => {
            state.loading = false
            state.message = action.payload.message
            state.error = true
            state.isAuth = false
            localStorage.removeItem("token")
        },
        [register.pending]: (state) => {
            state.loading = true
            state.message = null
            state.error = false
            state.isAuth = false
            localStorage.removeItem("token")
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false
            state.message = action.payload.message
            state.error = false
            state.isAuth = false
            localStorage.removeItem("token")
        },
        [register.rejected]: (state, action) => {
            state.loading = false
            state.message = action.payload.message
            state.error = true
            state.isAuth = false
            localStorage.removeItem("token")
        }
    }
})

export const { logout, oauth2Login, oauth2LoginError } = authSlice.actions

export default authSlice.reducer