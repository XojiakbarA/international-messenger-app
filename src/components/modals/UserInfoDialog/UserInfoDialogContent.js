import { Avatar, Stack, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import {useSelector} from "react-redux"
import {chatsSelector} from "../../../store/selectors"

const UserInfoDialogContent = () => {

    const { single: chat } = useSelector(chatsSelector)

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
                <Typography>{ chat?.user?.email }</Typography>
            </Stack>
            <Stack>
                <Typography variant={"button"} color={"primary"}>Member since</Typography>
                <Typography>{ new Date(chat?.user?.createdAt).toLocaleDateString() }</Typography>
            </Stack>
        </Stack>
    )
}

export default UserInfoDialogContent