import {ListItemAvatar, ListItemButton, ListItemText, Skeleton} from "@mui/material"

const ChatListItemSkeleton = () => {

    return (
        <ListItemButton divider disabled>
            <ListItemAvatar>
                <Skeleton variant={"circular"} width={40} height={40}/>
            </ListItemAvatar>
            <ListItemText
                primary={<Skeleton animation={"wave"}/>}
                secondary={<Skeleton animation={"wave"}/>}
            />
        </ListItemButton>
    )
}

export default ChatListItemSkeleton