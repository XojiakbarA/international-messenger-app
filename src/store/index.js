import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./slices/themeSlice"
import authReducer from "./slices/authSlice"
import chatsReducer from "./slices/chatsSlice"
import messagesReducer from "./slices/messagesSlice"
import languagesReducer from "./slices/languagesSlice"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        chats: chatsReducer,
        messages: messagesReducer,
        languages: languagesReducer
    }
})