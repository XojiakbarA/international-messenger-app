import { Grid, Box, useTheme, useMediaQuery } from "@mui/material"
import { Outlet, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import ChatList from "../ChatList"
import Settings from "../Settings"

const Layout = () => {

    const isDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    const ref = useRef(null)

    const { palette } = useTheme()

    const params = useParams()

    const [sidebar, setSidebar] = useState("chatList")

    useEffect(() => {
        ref.current?.scrollTo(0, ref.current.scrollHeight)
    }, [params.id])

    return (
        <Grid container>
            {
                !(params.id && isDownSm)
                &&
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box height={"100vh"} overflow={"auto"} borderRight={"solid"} borderColor={palette.divider}>
                        {
                            sidebar === "chatList"
                            ?
                            <ChatList onSettingsClick={ e => setSidebar("settings") }/>
                            :
                            sidebar === "settings"
                            ?
                            <Settings onBackClick={ e => setSidebar("chatList") }/>
                            :
                            null
                        }
                    </Box>
                </Grid>
            }
            {
                params.id
                &&
                <Grid item xs={12} sm={6} md={8} lg={9}>
                    <Box ref={ref} height={"100vh"} overflow={"auto"}>
                        <Outlet/>
                    </Box>
                </Grid>
            }
        </Grid>
    )
}

export default Layout