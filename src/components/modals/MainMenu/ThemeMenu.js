import {Popover, ToggleButton, ToggleButtonGroup} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";

const ThemeMenu = ({ anchorEl, onClose, onChange, mode }) => {

    const handleChange = (e, mode) => {
        onChange(e, mode)
        onClose()
    }

    return (
        <Popover
            id={"theme-menu"}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
            transformOrigin={{ vertical: "center", horizontal: "left" }}
        >
            <ToggleButtonGroup
                size={"small"}
                value={mode}
                exclusive
                onChange={handleChange}
                aria-label="change mode"
                color='primary'
            >
                <ToggleButton value="light" aria-label="left aligned">
                    <LightModeIcon/>
                </ToggleButton>
                <ToggleButton value="dark" aria-label="centered">
                    <DarkModeIcon/>
                </ToggleButton>
                <ToggleButton value="" aria-label="right aligned">
                    <BrightnessAutoIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Popover>
    )
}

export default ThemeMenu