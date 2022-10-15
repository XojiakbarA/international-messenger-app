import { Grid, Box, useTheme, useMediaQuery } from "@mui/material"
import {Navigate, Outlet, useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import ChatList from "../ChatList"
import Settings from "../Settings"
import {useDispatch, useSelector} from "react-redux"
import {authSelector} from "../../store/selectors"
import {getAuthUserChats} from "../../store/asyncThunks/chatsAsyncThunk"

const Layout = () => {

    const isDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    const dispatch = useDispatch()
    const params = useParams()
    const { palette } = useTheme()
    const { isAuth } = useSelector(authSelector)

    const [sidebar, setSidebar] = useState("chatList")

    useEffect(() => {
        dispatch(getAuthUserChats())
    }, [dispatch])

    if (!isAuth) return <Navigate to={"/auth"}/>

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
                    <Outlet/>
                </Grid>
            }
        </Grid>
    )
}

export default Layout