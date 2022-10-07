import { AppBar, Avatar, Box, ButtonBase, Chip, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import UserInfoDialog from "../modals/UserInfoDialog"
import { useState } from "react"
import LanguagePopover from "../modals/LanguagePopover"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    const array = [
        { code: "ru", title: "Russian" },
        { code: "en", title: "English" },
        { code: "it", title: "Italian" },
        { code: "fr", title: "French" },
        { code: "ch", title: "Chinese" },
        { code: "uz", title: "Uzbek" },
    ]

    const [language, setLanguage] = useState(array[0])
    const [userInfoOpen, setUserInfoOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    return (
        <AppBar
            position={"sticky"}
            color={"transparent"}
            sx={{ top: 0, backdropFilter: "blur(5px)" }}
        >
            <Toolbar variant="dense">
                <IconButton
                    sx={{ display: { xs: "block", sm: "none" } }}
                    onClick={ e => navigate(-1) }
                >
                    <ChevronLeftIcon/>
                </IconButton>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <IconButton onClick={ e => setUserInfoOpen(true) }>
                        <Avatar sx={{ width: 30, height: 30 }}/>
                    </IconButton>
                    <Typography>Person 1</Typography>
                </Stack>
                <Box flexGrow={1}/>
                <Chip
                    clickable
                    label={language?.code?.toUpperCase()}
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
                value={language}
                options={array}
                onChange={ (e, lang) => setLanguage(lang) }
            />
        </AppBar>
    )
}

export default Header