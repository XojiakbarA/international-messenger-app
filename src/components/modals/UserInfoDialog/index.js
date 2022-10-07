import { Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import UserInfoDialogContent from "./UserInfoDialogContent"
import { TransitionFade, TransitionSlide } from "../../transitions"

const UserInfoDialog = ({ open, onClose }) => {

    const isDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={"xs"}
            fullWidth
            fullScreen={isDownSm}
            TransitionComponent={ isDownSm ? TransitionSlide : TransitionFade }
        >
            <DialogTitle component={"div"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant={"h6"}>Person 1</Typography>
                <IconButton onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <UserInfoDialogContent/>
            </DialogContent>
        </Dialog>
    )
}

export default UserInfoDialog