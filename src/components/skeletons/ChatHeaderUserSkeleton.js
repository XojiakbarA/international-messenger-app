import {IconButton, Skeleton, Stack, Typography} from "@mui/material"

const ChatHeaderUserSkeleton = () => {

    return (
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <IconButton disabled>
                <Skeleton variant={"circular"} width={30} height={30}/>
            </IconButton>
            <Typography><Skeleton width={100} animation={"wave"}/></Typography>
        </Stack>
    )
}

export default ChatHeaderUserSkeleton