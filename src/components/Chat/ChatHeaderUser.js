import {Avatar, IconButton, Stack, Typography} from "@mui/material"

const ChatHeaderUser = ({ user, onClick }) => {

    return (
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <IconButton onClick={onClick}>
                <Avatar sx={{ width: 30, height: 30 }}/>
            </IconButton>
            <Typography>{ user?.name }</Typography>
        </Stack>
    )
}

export default ChatHeaderUser