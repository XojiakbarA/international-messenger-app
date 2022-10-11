import {createAsyncThunk} from "@reduxjs/toolkit"
import {apiLogin, apiRegister} from "../../api/auth"

export const login = createAsyncThunk("auth/login",
    async ({ data }, { rejectWithValue }) => {
        try {
            const response = await apiLogin(data)
            if (response.status === 200) {
                return response.data
            }
        } catch ({ response }) {
            return rejectWithValue(response.data)
        }
    }
)

export const register = createAsyncThunk("auth/register",
    async ({ data, setForm, setErrors }, { rejectWithValue }) => {
        try {
            const response = await apiRegister(data)
            if (response.status === 201) {
                setForm("login")
                return response.data
            }
        } catch ({ response }) {
            setErrors(response.data.errors)
            return rejectWithValue(response.data)
        }
    }
)