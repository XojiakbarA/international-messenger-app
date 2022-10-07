import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material"
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto'
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import ThemeMenu from "./ThemeMenu"
import { useState } from "react"
import { useTheme } from "../../../hooks/useTheme"

const MainMenu = ({ anchorEl, onClose, onSettingsClick }) => {

    const [themeAnchorEl, setThemeAnchorEl] = useState(null)

    const { mode, handleModeChange } = useTheme()

    const renderThemeIcon = (mode) => {
        switch (mode) {
            case "light":
                return <LightModeIcon/>
            case "dark":
                return <DarkModeIcon/>
            default:
                return <BrightnessAutoIcon/>
        }
    }

    return (
        <Menu
            id="main-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
            MenuListProps={{ 'aria-labelledby': 'main-menu-button' }}
        >
            <MenuItem onClick={ e => setThemeAnchorEl(e.currentTarget) }>
                <ListItemIcon>
                    { renderThemeIcon(mode) }
                </ListItemIcon>
                <ListItemText>Theme</ListItemText>
            </MenuItem>
            <MenuItem onClick={onSettingsClick}>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                <ListItemText>Settings</ListItemText>
            </MenuItem>
            <MenuItem onClick={onClose}>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </MenuItem>
            <ThemeMenu
                anchorEl={themeAnchorEl}
                onClose={ e => setThemeAnchorEl(null) }
                onChange={handleModeChange}
                mode={mode}
            />
        </Menu>
    )
}

export default MainMenu