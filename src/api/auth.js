import {instance} from "./index";

export const apiLogin = async (data) => await instance.post("/auth/login", data)

export const apiRegister = async (data) => await instance.post("/auth/register", data)