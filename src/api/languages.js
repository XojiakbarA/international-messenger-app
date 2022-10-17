import {instance} from "./index"

export const fetchLanguages = async () => await instance.get("/languages")