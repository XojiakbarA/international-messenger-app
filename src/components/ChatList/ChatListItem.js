import {Link, useParams} from "react-router-dom"
import {Avatar, Chip, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material"

const ChatListItem = ({ chat }) => {

    const params = useParams()

    return (
        <ListItemButton
            divider
            selected={+params.id === chat.id}
            component={Link}
            to={"/chats/" + chat.id}
        >
            <ListItemAvatar>
                <Avatar/>
            </ListItemAvatar>
            <ListItemText
                primary={chat.user.name}
                secondary={chat.lastMessage.content}
                primaryTypographyProps={{ noWrap: true }}
                secondaryTypographyProps={{ noWrap: true }}
            />
            {
                chat.id === 0 &&
                <Chip label={1} size={"small"} color={"primary"}/>
            }
        </ListItemButton>
    )
}

export default ChatListItem