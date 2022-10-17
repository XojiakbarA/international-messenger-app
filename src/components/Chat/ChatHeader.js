import {AppBar, Box, ButtonBase, Chip, CircularProgress, IconButton, Toolbar} from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import TranslateIcon from '@mui/icons-material/Translate'
import UserInfoDialog from "../modals/UserInfoDialog"
import {useEffect, useState} from "react"
import LanguagePopover from "../modals/LanguagePopover"
import {useNavigate, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {chatsSelector} from "../../store/selectors"
import {setChat} from "../../store/slices/chatsSlice"
import ChatHeaderUserSkeleton from "../skeletons/ChatHeaderUserSkeleton"
import ChatHeaderUser from "./ChatHeaderUser"

const ChatHeader = ({ width }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const { loading, single: chat, list: chats } = useSelector(chatsSelector)

    const [userInfoOpen, setUserInfoOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    useEffect(() => {
        const chat = chats.find(ch => ch.id === +params.id)
        dispatch(setChat({ chat }))
    }, [dispatch, chats, params.id])

    return (
        <AppBar
            position={"fixed"}
            color={"transparent"}
            sx={{ width, top: 0, backdropFilter: "blur(5px)" }}
        >
            <Toolbar variant="dense">
                <IconButton
                    sx={{ display: { xs: "block", sm: "none" } }}
                    onClick={ e => navigate(-1) }
                >
                    <ChevronLeftIcon/>
                </IconButton>
                {
                    loading
                    ?
                    <ChatHeaderUserSkeleton/>
                    :
                    <ChatHeaderUser user={chat?.user} onClick={ e => setUserInfoOpen(true) }/>
                }
                <Box flexGrow={1}/>
                <Chip
                    clickable
                    disabled={loading}
                    icon={loading ? <CircularProgress size={16}/> : <TranslateIcon fontSize={"small"}/>}
                    label={chat?.locale ? chat?.locale?.languageCode.toUpperCase() : " - "}
                    component={ButtonBase}
                    onClick={ e => setAnchorEl(e.currentTarget) }
                />
            </Toolbar>
            <UserInfoDialog
                open={userInfoOpen}
                onClose={ e => setUserInfoOpen(false) }
            />
            <LanguagePopover
                anchorEl={anchorEl}
                onClose={ e => setAnchorEl(null) }
            />
        </AppBar>
    )
}

export default ChatHeader