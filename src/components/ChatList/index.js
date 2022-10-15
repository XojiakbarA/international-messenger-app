import {
    Box,
    Grow,
    IconButton,
    List,
    Toolbar,
} from "@mui/material"
import {useState} from "react"
import MenuIcon from '@mui/icons-material/Menu'
import MainMenu from "../modals/MainMenu"
import SearchInput from "../inputs/SearchInput"
import {useSelector} from "react-redux"
import {chatsSelector} from "../../store/selectors"
import ChatListItemSkeleton from "../skeletons/ChatListItemSkeleton"
import ChatListItem from "./ChatListItem"

const ChatList = ({ onSettingsClick }) => {

    const { loading, list: chats } = useSelector(chatsSelector)

    const [anchorEl, setAnchorEl] = useState(null)

    const skeletons = Array.from({ length: 10 }, (_, i) => i)

    return (
        <Grow in>
            <Box height={"100%"} position={"relative"}>
                <Toolbar
                    variant={"dense"}
                    sx={{ position: "fixed", top: 0, left: 0, zIndex: 1, backdropFilter: "blur(5px)" }}
                >
                    <IconButton
                        id="main-menu-button"
                        onClick={ e => setAnchorEl(e.currentTarget) }
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <SearchInput/>
                    <MainMenu
                        anchorEl={anchorEl}
                        onClose={ e => setAnchorEl(null) }
                        onSettingsClick={onSettingsClick}
                    />
                </Toolbar>
                <Toolbar variant={"dense"}/>
                <List disablePadding>
                    {
                        loading
                        ?
                        skeletons.map(i => <ChatListItemSkeleton key={i}/>)
                        :
                        chats.map(chat => <ChatListItem key={chat.id} chat={chat}/>)
                    }
                </List>
            </Box>
        </Grow>
    )
}

export default ChatList