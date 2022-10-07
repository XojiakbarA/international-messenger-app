import { Avatar, Stack, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"

const UserInfoDialogContent = () => {

    const ref = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(ref?.current?.offsetWidth)
    }, [])


    return (
        <Stack spacing={2} alignItems={"start"} paddingX={5}>
            <Avatar ref={ref} variant={"rounded"} sx={{ alignSelf: "center", width: "100%", height }}/>
            <Stack>
                <Typography variant={"button"} color={"primary"}>Email</Typography>
                <Typography>user@gmail.com</Typography>
            </Stack>
            <Stack>
                <Typography variant={"button"} color={"primary"}>Member since</Typography>
                <Typography>20.12.2012</Typography>
            </Stack>
        </Stack>
    )
}

export default UserInfoDialogContent