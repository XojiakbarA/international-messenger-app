import {Box, CircularProgress, Container, Stack, Toolbar} from "@mui/material"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatItem from "./ChatItem"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useRef} from "react"
import {chatsSelector, messagesSelector} from "../../store/selectors"
import {useGetWidth} from "../../hooks/useGetWidth"
import {getChatMessages} from "../../store/asyncThunks/messagesAsyncThunk"
import {useParams} from "react-router-dom";

const Chat = () => {

    const dispatch = useDispatch()
    const params = useParams()

    const { loading, list: messages } = useSelector(messagesSelector)
    const { single: chat } = useSelector(chatsSelector)

    const { ref, width } = useGetWidth()

    const toolbarRef = useRef(null)

    useEffect(() => {
        if (messages.length) {
            toolbarRef.current?.scrollIntoView({ behavior: "auto" })
        }
    }, [messages])

    useEffect(() => {
        const promise = dispatch(getChatMessages({ id: params.id }))
        return () => {
            promise.abort()
        }
    }, [dispatch, chat, params.id])

    const timeouts = Array.from({ length: messages.length }, (_, i) => i+1).reverse()

    return (
        <Box height={"100vh"} overflow={"auto"} ref={ref}>
            <ChatHeader width={width}/>
            {
                loading
                ?
                <Box
                    width={"100%"} height={"100%"}
                    display={"flex"} justifyContent={"center"} alignItems={"center"}
                >
                    <CircularProgress/>
                </Box>
                :
                <Container maxWidth={"md"}>
                    <Toolbar variant={"dense"}/>
                    <Stack spacing={2} my={2} direction={"column"} alignItems={"start"}>
                        {
                            messages.map((message, i) => (
                                <ChatItem
                                    key={message.id}
                                    message={message}
                                    timeout={timeouts[i]}
                                />
                            ))
                        }
                    </Stack>
                    <Toolbar variant={"dense"} ref={toolbarRef}/>
                </Container>
            }
            <ChatInput width={width}/>
        </Box>
    )
}

export default Chat