import { Avatar, Paper, Stack, Typography } from "@mui/material"

const MessageItem = ({ message }) => {

    return (
        <Stack direction={message.isOwn ? "row-reverse" : "row"} spacing={1} alignSelf={message.isOwn ? "end" : "start"}>
            <Avatar sx={{ width: 30, height: 30 }}/>
            <Paper sx={{
                p: 1,
                maxWidth: 300,
                bgcolor: message.isOwn ? "primary.main" : "background.paper",
            }}>
                    <Stack>
                        <Typography color={message.isOwn ? "primary.contrastText" : "text.primary"}>
                            { message.content }
                        </Typography>
                        <Typography color={message.isOwn ? "primary.contrastText" : "text.primary"} variant={"caption"} textAlign={"right"}>
                            { message.time }
                        </Typography>
                    </Stack>
            </Paper>
        </Stack>
    )
}

export default MessageItem