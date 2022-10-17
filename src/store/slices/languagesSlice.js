import {createSlice} from "@reduxjs/toolkit"
import {getLanguages} from "../asyncThunks/languagesAsyncThunk"

const initialState = {
    loading: false,
    message: null,
    error: false,
    list: []
}

export const languagesSlice = createSlice({
    name: 'languages',
    initialState,
    extraReducers: {
        [getLanguages.pending]: (state) => {
            state.loading = true
            state.message = null
            state.error = false
            state.list = []
        },
        [getLanguages.fulfilled]: (state, action) => {
            state.loading = false
            state.message = action.payload.message
            state.error = false
            state.list = action.payload.content
        },
        [getLanguages.rejected]: (state, action) => {
            state.loading = false
            state.message = action.payload.message
            state.error = true
            state.list = []
        }
    }
})

// export const { setTheme } = messagesSlice.actions

export default languagesSlice.reducer