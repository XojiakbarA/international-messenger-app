import {instance} from "./index"

export const fetchAuthUserChats = async () => await instance.get(`/chats`)