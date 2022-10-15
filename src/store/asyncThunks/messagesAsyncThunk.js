import {createAsyncThunk} from "@reduxjs/toolkit"
import {fetchChatMessages} from "../../api/messages"

export const getChatMessages = createAsyncThunk("messages/getByChatId",
    async ({ id }, { rejectWithValue }) => {
        try {
            const response = await fetchChatMessages(id)
            if (response.status === 200) {
                return response.data
            }
        } catch ({ response }) {
            return rejectWithValue(response.data)
        }
    }
)