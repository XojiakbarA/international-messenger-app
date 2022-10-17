import {createAsyncThunk} from "@reduxjs/toolkit"
import {fetchLanguages} from "../../api/languages"

export const getLanguages = createAsyncThunk("languages/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchLanguages()
            if (response.status === 200) {
                return response.data
            }
        } catch ({ response }) {
            return rejectWithValue(response.data)
        }
    }
)