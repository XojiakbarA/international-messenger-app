import axios from "axios"
import {API_BASE_URL} from "../utils/constants"

export const instance = axios.create({
    baseURL: API_BASE_URL + "/api",
    withCredentials: true
})

instance.interceptors.request.use(async req => {
    const token = localStorage.getItem("token")
    if (token) req.headers["Authorization"] = "Bearer " + token
    return req
})