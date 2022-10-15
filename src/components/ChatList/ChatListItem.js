import {Link, useParams} from "react-router-dom"
import {Avatar, Chip, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material"
import {useDispatch} from "react-redux"
import {setChat} from "../../store/slices/chatsSlice"

const ChatListItem = ({ chat }) => {

    const dispatch = useDispatch()
    const params = useParams()

    return (
        <ListItemButton
            divider
            selected={+params.id === chat.id}
            component={Link}
            to={"/chats/" + chat.id}
            onClick={ e => dispatch(setChat({ chat })) }
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