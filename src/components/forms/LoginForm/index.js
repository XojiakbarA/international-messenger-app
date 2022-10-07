import { LoadingButton } from "@mui/lab"
import { Chip, Divider, Slide, Stack, TextField } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login'
import SocialLoginButtons from "./SocialLoginButtons"

const LoginForm = () => {

    return (
        <Slide in direction={"right"}>
            <form>
                <Stack spacing={2}>
                    <TextField
                        variant={"standard"}
                        label={"Email"}
                    />
                    <TextField
                        variant={"standard"}
                        label={"Password"}
                    />
                    <LoadingButton
                        variant={"contained"}
                        startIcon={<LoginIcon/>}
                    >
                        Login
                    </LoadingButton>
                    <Divider><Chip label={"OR"} size={"small"}/></Divider>
                    <SocialLoginButtons/>
                </Stack>
            </form>
        </Slide>
    )
}

export default LoginForm