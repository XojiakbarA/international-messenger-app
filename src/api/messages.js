import {instance} from "./index"

export const fetchChatMessages = async (id) => await instance.get(`/chats/${id}/messages`)