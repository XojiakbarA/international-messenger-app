import {Avatar, Fade, Paper, Stack, Typography} from "@mui/material"

const ChatItem = ({ message, timeout }) => {

    return (
        <Fade in timeout={timeout * 200}>
            <Stack direction={message.isMine ? "row-reverse" : "row"} spacing={1} alignSelf={message.isMine ? "end" : "start"}>
                <Avatar sx={{ width: 30, height: 30 }}/>
                <Paper sx={{
                    p: 1,
                    maxWidth: 300,
                    bgcolor: message.isMine ? "primary.main" : "background.paper",
                }}>
                        <Stack>
                            <Typography color={message.isMine ? "primary.contrastText" : "text.primary"}>
                                { message.content }
                            </Typography>
                            <Typography color={message.isMine ? "primary.contrastText" : "text.primary"} variant={"caption"} textAlign={"right"}>
                                { new Date(message.createdAt).toLocaleTimeString() }
                            </Typography>
                        </Stack>
                </Paper>
            </Stack>
        </Fade>
    )
}

export default ChatItem