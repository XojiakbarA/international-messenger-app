import {createSlice} from "@reduxjs/toolkit"
import {getChatMessages} from "../asyncThunks/messagesAsyncThunk"

const initialState = {
    loading: false,
    message: null,
    error: false,
    list: []
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    extraReducers: {
        [getChatMessages.pending]: (state) => {
            state.loading = true
            state.message = null
            state.error = false
            state.list = []
        },
        [getChatMessages.fulfilled]: (state, action) => {
            state.loading = false
            state.message = action.payload.message
            state.error = false
            state.list = action.payload.content
        },
        [getChatMessages.rejected]: (state, action) => {
            state.loading = false
            if (action.meta.aborted) {
                state.message = null
                state.error = false
            } else {
                state.message = action.payload.message
                state.error = true
            }
            state.list = []
        }
    }
})

// export const { setTheme } = messagesSlice.actions

export default messagesSlice.reducer