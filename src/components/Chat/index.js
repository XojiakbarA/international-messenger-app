import { Box, Container, Fade, Stack } from "@mui/material"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatItem from "./ChatItem"

const Chat = () => {

    const array = [
        {
            content: "Hello My friend",
            isOwn: false,
            time: "20:55"
        },
        {
            content: "Hello mospedmcpsdm mc mklsmfklm kmweklfmdsklcmdskl kmklfmdsklcvmskcdm",
            isOwn: true,
            time: "20:55"
        },
        {
            content: "Hello",
            isOwn: false,
            time: "20:55"
        },
        {
            content: "Hello",
            isOwn: true,
            time: "20:55"
        },
        {
            content: "Hello",
            isOwn: false,
            time: "20:55"
        },
        {
            content: "Hello",
            isOwn: true,
            time: "20:55"
        },
        {
            content: "Hello",
            isOwn: false,
            time: "20:55"
        },
        {
            content: "Hello",
            isOwn: true,
            time: "20:55"
        },
        {
            content: "Hello",
            isOwn: false,
            time: "20:55"
        },
        {
            content: "Hello",
            isOwn: true,
            time: "20:55"
        },
    ]

    return (
        <Fade in timeout={1000}>
            <Box position={"relative"} height={"100%"}>
                <ChatHeader/>
                <Container maxWidth={"md"}>
                    <Stack spacing={2} my={2} direction={"column"} alignItems={"start"}>
                        { array.map((m, i) => <ChatItem key={i} message={m}/>) }
                    </Stack>
                </Container>
                <ChatInput/>
            </Box>
        </Fade>
    )
}

export default Chat