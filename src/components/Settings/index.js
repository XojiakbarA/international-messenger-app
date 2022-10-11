import { Box, Button, Divider, Fab, IconButton, Slide, Stack, TextField, Toolbar, Typography, Zoom } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import SaveIcon from '@mui/icons-material/Save'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PasswordIcon from '@mui/icons-material/Password'
import { useGetWidth } from "../../hooks/useGetWidth"
import ImageUpload from "../ImageUpload"

const Settings = ({ onBackClick }) => {

    const { ref: imageRef, width: imageWidth } = useGetWidth()
    const { ref: boxRef, width: boxWidth } = useGetWidth()
    const { ref: fabRef, width: fabWidth } = useGetWidth()

    return (
        <Slide in direction={"left"}>
            <Box height={"100%"} position={"relative"} ref={boxRef}>
                <Toolbar variant={"dense"} sx={{ position: "sticky", top: 0, left: 0, zIndex: 1, backdropFilter: "blur(5px)" }}>
                    <IconButton onClick={onBackClick} sx={{ mr: 1 }}>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <Typography variant={"h6"}>Settings</Typography>
                </Toolbar>
                <Divider/>
                <form>
                    <Stack spacing={2}>
                        <ImageUpload
                            ref={imageRef}
                            width={"100%"}
                            height={imageWidth}
                        />
                        <Stack spacing={2} px={1}>
                            <TextField
                                fullWidth
                                variant={"filled"}
                                label={"Name"}
                            />
                            <TextField
                                fullWidth
                                variant={"filled"}
                                label={"Email"}
                                value={"user@gmail.com"}
                                disabled
                            />
                        </Stack>
                        <Button startIcon={<AlternateEmailIcon/>}>Change Email</Button>
                        <Button startIcon={<PasswordIcon/>}>Change Password</Button>
                    </Stack>
                    <Zoom in>
                        <Fab
                            color={"primary"}
                            ref={fabRef}
                            sx={{ position: "fixed", left: boxWidth - fabWidth - 10, bottom: 16 }}
                        >
                            <SaveIcon/>
                        </Fab>
                    </Zoom>
                </form>
            </Box>
        </Slide>
    )
}

export default Settings