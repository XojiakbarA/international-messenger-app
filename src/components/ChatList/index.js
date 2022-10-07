import { Avatar, Box, Chip, Divider, Grow, IconButton, List, ListItemAvatar, ListItemButton, ListItemText, Toolbar } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import MainMenu from "../modals/MainMenu"
import SearchInput from "../SearchInput"

const ChatList = ({ onSettingsClick }) => {

    const [anchorEl, setAnchorEl] = useState(null)

    const params = useParams()

    const array = Array.from({ length: 20 }, (_, i) => i)

    return (
        <Grow in>
            <Box height={"100%"} position={"relative"}>
                <Toolbar variant={"dense"} sx={{ position: "sticky", top: 0, left: 0, zIndex: 1, backdropFilter: "blur(5px)" }}>
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
                <Divider/>
                <List disablePadding>
                    {
                        array.map(i => (
                            <ListItemButton
                                divider
                                selected={+params.id === i}
                                key={i}
                                component={Link}
                                to={"/chats/" + i}
                            >
                                <ListItemAvatar>
                                    <Avatar/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={"Person 1"}
                                    secondary={"I'll be in your neighborhood doing errands this…"}
                                    primaryTypographyProps={{ noWrap: true }}
                                    secondaryTypographyProps={{ noWrap: true }}
                                />
                                {
                                    i === 0 &&
                                    <Chip label={1} size={"small"} color={"primary"}/>
                                }
                            </ListItemButton>
                        ))
                    }
                </List>
            </Box>
        </Grow>
    )
}

export default ChatList