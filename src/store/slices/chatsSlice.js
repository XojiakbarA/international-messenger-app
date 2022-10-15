import {createSlice} from "@reduxjs/toolkit"
import {getAuthUserChats} from "../asyncThunks/chatsAsyncThunk"

const initialState = {
    loading: false,
    message: null,
    error: false,
    list: [],
    single: null
}

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setChat: (state, action) => {
            state.single = action.payload.chat
        }
    },
    extraReducers: {
        [getAuthUserChats.pending]: (state) => {
            state.loading = true
            state.message = null
            state.error = false
            state.list = []
        },
        [getAuthUserChats.fulfilled]: (state, action) => {
            state.loading = false
            state.message = action.payload.message
            state.error = false
            state.list = action.payload.content
        },
        [getAuthUserChats.rejected]: (state, action) => {
            state.loading = false
            state.message = action.payload.message
            state.error = true
            state.list = []
        }
    }
})

export const { setChat } = chatsSlice.actions

export default chatsSlice.reducer