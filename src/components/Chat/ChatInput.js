import { AppBar, Container, IconButton, Stack, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'

const MessageInput = ({ width }) => {

    return (
        <AppBar
            position={"fixed"}
            color={"transparent"}
            sx={{ width, top: "auto", bottom: 0, backdropFilter: "blur(5px)" }}
        >
            <Container maxWidth={"md"}>
            <Stack spacing={1} direction={"row"} alignItems={"center"} py={0.5}>
                <TextField
                    fullWidth
                    variant={"standard"}
                />
                <IconButton color={"primary"}>
                    <SendIcon/>
                </IconButton>
            </Stack>
            </Container>
        </AppBar>
    )
}

export default MessageInput