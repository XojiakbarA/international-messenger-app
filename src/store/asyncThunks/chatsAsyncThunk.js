import {createAsyncThunk} from "@reduxjs/toolkit"
import {fetchAuthUserChats} from "../../api/chats"

export const getAuthUserChats = createAsyncThunk("chats/getByAuthUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchAuthUserChats()
            if (response.status === 200) {
                return response.data
            }
        } catch ({ response }) {
            return rejectWithValue(response.data)
        }
    }
)